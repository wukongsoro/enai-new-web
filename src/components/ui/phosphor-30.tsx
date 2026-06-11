"use client";

import React, { useEffect, useRef } from "react";

const SHADER_SRC = `#version 300 es
precision highp float;

out vec4 fragColor;
in vec2 v_uv;

uniform vec3  iResolution;
uniform float iTime;
uniform int   iFrame;
uniform vec4  iMouse;

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2  r  = iResolution.xy;
    float t  = iTime;
    vec3  FC = vec3(fragCoord, t);
    vec4  o  = vec4(0.0);

    float s = 0.0;
    for (float i = 0.0, z = 0.0, d = 0.0; i++ < 8e1; o += (cos(s + vec4(0.0, 1.0, 8.0, 0.0)) + 1.0) / d)
    {
        vec3 p = z * normalize(FC.rgb * 2.0 - r.xyy);
        vec3 a = normalize(cos(vec3(5.0, 0.0, 1.0) + t - d * 4.0));
        p.z += 5.0;

        a = a * dot(a, p) - cross(a, p);
        for (d = 1.0; d++ < 9.0; )
            a -= sin(a * d + t).zxy / d;

        z += d = 0.1 * abs(length(p) - 3.0) + 0.07 * abs(cos(s = a.y));
    }
    o = tanh(o / 3e3);

    fragColor = vec4(o.rgb, 1.0);
}

void main(){
  mainImage(fragColor, gl_FragCoord.xy);
}
`;

const VERT_SRC = `#version 300 es
precision highp float;
layout(location=0) in vec2 a_pos;
out vec2 v_uv;
void main(){
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

function safeCompile(gl: WebGL2RenderingContext, type: number, src: string) {
  const shader = gl.createShader(type);
  if (!shader) return { shader: null, log: "Unable to create shader" };
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  const ok = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  const log = gl.getShaderInfoLog(shader) || "";
  return { shader: ok ? shader : null, log };
}

function safeLink(gl: WebGL2RenderingContext, vs: WebGLShader, fs: WebGLShader) {
  const program = gl.createProgram();
  if (!program) return { program: null, log: "Unable to create program" };
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  const ok = gl.getProgramParameter(program, gl.LINK_STATUS);
  const log = gl.getProgramInfoLog(program) || "";
  return { program: ok ? program : null, log };
}

function drawError(gl: WebGL2RenderingContext, msg: string) {
  console.error(msg);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.clearColor(0.08, 0.02, 0.02, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);
}

function ShaderCanvas({
  fragSource,
  pixelRatio,
}: {
  fragSource: string;
  pixelRatio?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef(0);
  const frameRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0, l: 0, r: 0 });

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const maybeGl = canvas.getContext("webgl2", { premultipliedAlpha: false });
    if (!maybeGl) return;
    const gl: WebGL2RenderingContext = maybeGl;

    let disposed = false;
    let vao: WebGLVertexArrayObject | null = null;
    let vbo: WebGLBuffer | null = null;
    let program: WebGLProgram | null = null;
    let ro: ResizeObserver | null = null;
    let resizeScheduled = false;
    let io: IntersectionObserver | null = null;
    let onVisibility: (() => void) | null = null;

    const getDpr = () => {
      const sys = window.devicePixelRatio || 1;
      return Math.max(1, Math.min(2, pixelRatio ?? sys));
    };

    function applySize() {
      resizeScheduled = false;
      if (disposed) return;
      const dpr = getDpr();
      const cssW = Math.max(1, canvas.clientWidth | 0);
      const cssH = Math.max(1, canvas.clientHeight | 0);
      const w = Math.max(1, Math.floor(cssW * dpr));
      const h = Math.max(1, Math.floor(cssH * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    }

    function scheduleSize() {
      if (resizeScheduled) return;
      resizeScheduled = true;
      requestAnimationFrame(applySize);
    }

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseRef.current.x = Math.max(0, Math.min(x, rect.width));
      mouseRef.current.y = Math.max(0, Math.min(rect.height - y, rect.height));
    };
    const onDown = (e: MouseEvent) => {
      if (e.button === 0) mouseRef.current.l = 1;
      if (e.button === 2) mouseRef.current.r = 1;
    };
    const onUp = (e: MouseEvent) => {
      if (e.button === 0) mouseRef.current.l = 0;
      if (e.button === 2) mouseRef.current.r = 0;
    };
    const onCtxMenu = (e: Event) => e.preventDefault();
    const onContextLost = (e: Event) => {
      e.preventDefault();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };

    function cleanup() {
      disposed = true;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mousedown", onDown);
      canvas.removeEventListener("mouseup", onUp);
      canvas.removeEventListener("contextmenu", onCtxMenu);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      ro?.disconnect();
      io?.disconnect();
      if (onVisibility) document.removeEventListener("visibilitychange", onVisibility);
      if (vbo) gl.deleteBuffer(vbo);
      if (vao) gl.deleteVertexArray(vao);
      if (program) gl.deleteProgram(program);
    }

    vao = gl.createVertexArray();
    vbo = gl.createBuffer();
    if (!vao || !vbo) {
      drawError(gl, "Failed to create shader geometry");
      return cleanup;
    }

    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const { shader: vs, log: vsLog } = safeCompile(gl, gl.VERTEX_SHADER, VERT_SRC);
    if (!vs) {
      drawError(gl, `Vertex compile error: ${vsLog}`);
      return cleanup;
    }

    const { shader: fs, log: fsLog } = safeCompile(gl, gl.FRAGMENT_SHADER, fragSource);
    if (!fs) {
      drawError(gl, `Fragment compile error: ${fsLog}`);
      gl.deleteShader(vs);
      return cleanup;
    }

    const linked = safeLink(gl, vs, fs);
    gl.deleteShader(vs);
    gl.deleteShader(fs);
    if (!linked.program) {
      drawError(gl, `Program link error: ${linked.log}`);
      return cleanup;
    }
    program = linked.program;

    const uResolution = gl.getUniformLocation(program, "iResolution");
    const uTime = gl.getUniformLocation(program, "iTime");
    const uFrame = gl.getUniformLocation(program, "iFrame");
    const uMouse = gl.getUniformLocation(program, "iMouse");

    applySize();
    ro = new ResizeObserver(scheduleSize);
    ro.observe(canvas);
    scheduleSize();

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mousedown", onDown);
    canvas.addEventListener("mouseup", onUp);
    canvas.addEventListener("contextmenu", onCtxMenu);
    canvas.addEventListener("webglcontextlost", onContextLost);

    startRef.current = performance.now();
    frameRef.current = 0;

    // Render gating: only run while visible on-screen and tab is foregrounded.
    let visible = true;
    let tabHidden = typeof document !== "undefined" && document.hidden;
    let scheduled = false;
    let lastDraw = 0;
    const FRAME_MS = 1000 / 30; // cap to 30fps — plenty for a decorative orb

    function schedule() {
      if (disposed || scheduled || !visible || tabHidden) return;
      scheduled = true;
      rafRef.current = requestAnimationFrame(tick);
    }

    function tick(now: number) {
      scheduled = false;
      if (disposed || !program || !vao) return;
      if (gl.isContextLost()) {
        schedule();
        return;
      }
      if (now - lastDraw < FRAME_MS) {
        schedule();
        return;
      }
      lastDraw = now;

      const t = (now - startRef.current) / 1000;
      frameRef.current += 1;

      if (resizeScheduled) applySize();
      gl.useProgram(program);

      const dpr = getDpr();
      if (uResolution) gl.uniform3f(uResolution, canvas.width, canvas.height, dpr);
      if (uTime) gl.uniform1f(uTime, t);
      if (uFrame) gl.uniform1i(uFrame, frameRef.current);
      if (uMouse) {
        const m = mouseRef.current;
        gl.uniform4f(uMouse, m.x * dpr, m.y * dpr, m.l, m.r);
      }

      gl.bindVertexArray(vao);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      schedule();
    }

    io = new IntersectionObserver(
      (entries) => {
        visible = entries.some((e) => e.isIntersecting);
        if (visible) schedule();
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    onVisibility = () => {
      tabHidden = document.hidden;
      if (!tabHidden) schedule();
    };
    document.addEventListener("visibilitychange", onVisibility);

    schedule();
    return cleanup;
  }, [fragSource, pixelRatio]);

  return (
    <div className="absolute inset-0">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}

export default function Phosphor30({
  className = "",
  pixelRatio,
}: {
  className?: string;
  pixelRatio?: number;
}) {
  return (
    <div className={`h-full w-full overflow-hidden bg-black ${className}`}>
      <ShaderCanvas fragSource={SHADER_SRC} pixelRatio={pixelRatio} />
    </div>
  );
}
