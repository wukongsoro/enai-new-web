import React from "react";
import { LucideQuote, LucideType, LucidePalette, LucideLayout, LucideMove, LucideLayers } from "lucide-react";

export default function DesignTokensTypography() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white p-8 md:p-16 font-harvey-sans selection:bg-[#F5F5F5] selection:text-black">
        <div className="max-w-[1400px] mx-auto space-y-24">
            {/* Header */}
            <div className="space-y-6 border-b border-[#2A2A2A] pb-12">
                <h1 className="font-harvey-serif text-6xl md:text-7xl lg:text-[80px] leading-[1.1]">
                    Design System
                </h1>
                <p className="text-[#A1A1A1] text-lg max-w-2xl font-harvey-sans">
                    A comprehensive guide to the Harvey.ai design language, featuring typography scales, color tokens, spacing systems, and component primitives designed for professional-class AI interfaces.
                </p>
                <div className="flex gap-4 pt-4">
                    <Badge>Dark Theme Only</Badge>
                    <Badge variant="outline">v2.0.0</Badge>
                </div>
            </div>

            {/* Typography Section */}
            <section className="space-y-12">
                <div className="flex items-center gap-3 text-[#FDB913]">
                    <LucideType className="w-6 h-6" />
                    <h2 className="text-2xl font-medium tracking-wide">Typography</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Font Families */}
                    <div className="space-y-8">
                        <h3 className="text-[#A1A1A1] text-sm uppercase tracking-wider font-semibold border-b border-[#2A2A2A] pb-2">Font Families</h3>
                        <div className="space-y-6">
                            <div className="p-8 border border-[#2A2A2A] rounded-lg bg-[#0A0A0A]">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="px-3 py-1 bg-[#2A2A2A] rounded text-xs text-white">Heads / Serif</span>
                                    <span className="text-[#A1A1A1] font-mono text-xs">var(--font-harvey-serif)</span>
                                </div>
                                <p className="font-harvey-serif text-5xl md:text-6xl mb-2">Playfair Display</p>
                                <p className="text-[#A1A1A1]">Used for Brand Headings, Hero Text, Quotes</p>
                            </div>
                            
                            <div className="p-8 border border-[#2A2A2A] rounded-lg bg-[#0A0A0A]">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="px-3 py-1 bg-[#2A2A2A] rounded text-xs text-white">Body / Sans</span>
                                    <span className="text-[#A1A1A1] font-mono text-xs">var(--font-harvey-sans)</span>
                                </div>
                                <p className="font-harvey-sans text-5xl md:text-6xl mb-2 tracking-tight">Inter</p>
                                <p className="text-[#A1A1A1]">Used for UI Elements, Body Text, Navigation, Metadata</p>
                            </div>
                        </div>
                    </div>

                    {/* Scale Hierarchy */}
                    <div className="space-y-8">
                        <h3 className="text-[#A1A1A1] text-sm uppercase tracking-wider font-semibold border-b border-[#2A2A2A] pb-2">Typographic Scale</h3>
                        <div className="space-y-8">
                            <TypeSpec name="H1 Hero" font="font-harvey-serif" size="80px" leading="1.1" weight="400">
                                Professional Class AI
                            </TypeSpec>
                            <TypeSpec name="H2 Section" font="font-harvey-serif" size="64px" leading="1.1" weight="400">
                                Built for Industry Leaders
                            </TypeSpec>
                            <TypeSpec name="H3 Subsection" font="font-harvey-serif" size="48px" leading="1.2" weight="400">
                                Quantifiable Impact
                            </TypeSpec>
                            <TypeSpec name="H4 Title" font="font-harvey-serif" size="36px" leading="1.2" weight="400">
                                Feature Highlights
                            </TypeSpec>
                            <TypeSpec name="Stat Number" font="font-harvey-sans" size="72px" leading="1" weight="700">
                                74k+
                            </TypeSpec>
                            <TypeSpec name="Quote" font="font-harvey-serif" size="28px" leading="1.4" weight="400" className="italic text-[#A1A1A1]">
                                "Generative AI will be the biggest game-changer..."
                            </TypeSpec>
                            <div className="grid grid-cols-2 gap-8 pt-4 border-t border-[#2A2A2A]">
                                <TypeSpec name="Body Large" font="font-harvey-sans" size="18px" leading="1.5" weight="400" compact>
                                    Large body text used for introductions.
                                </TypeSpec>
                                <TypeSpec name="Body Default" font="font-harvey-sans" size="16px" leading="1.5" weight="400" compact>
                                    Standard body text for component descriptions.
                                </TypeSpec>
                                <TypeSpec name="Body Small" font="font-harvey-sans" size="14px" leading="1.4" weight="400" compact>
                                    Secondary text and support details.
                                </TypeSpec>
                                <TypeSpec name="Caption" font="font-harvey-sans" size="12px" leading="1.3" weight="500" compact>
                                    LABEL / CAPTION
                                </TypeSpec>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Colors Section */}
            <section className="space-y-12">
                <div className="flex items-center gap-3 text-[#4ADE80]">
                    <LucidePalette className="w-6 h-6" />
                    <h2 className="text-2xl font-medium tracking-wide">Color System</h2>
                </div>

                <div className="space-y-12">
                    {/* Core Brand Colors */}
                    <div className="space-y-6">
                        <h3 className="text-[#A1A1A1] text-sm uppercase tracking-wider font-semibold">Background & Surfaces</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            <ColorSwatch name="Background" value="#0A0A0A" cssVar="--background" className="border border-[#2A2A2A]" />
                            <ColorSwatch name="Card / Popover" value="#0A0A0A" cssVar="--card" className="border border-[#2A2A2A]" />
                            <ColorSwatch name="Secondary Bg" value="#D4D4D8" cssVar="--secondary" text="black" />
                            <ColorSwatch name="Muted Bg" value="#2A2A2A" cssVar="--muted" />
                        </div>
                    </div>

                    {/* Text & Accents */}
                    <div className="space-y-6">
                        <h3 className="text-[#A1A1A1] text-sm uppercase tracking-wider font-semibold">Foreground & Accents</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            <ColorSwatch name="Foreground" value="#FFFFFF" cssVar="--foreground" text="black" />
                            <ColorSwatch name="Muted Fg" value="#A1A1A1" cssVar="--muted-foreground" text="black" />
                            <ColorSwatch name="Primary / Button" value="#F5F5F5" cssVar="--primary" text="black" />
                            <ColorSwatch name="Input / Static" value="#FFFFFF" cssVar="--input" text="black" />
                            <ColorSwatch name="Accent Cyan" value="#C5E4E8" cssVar="--accent" text="black" />
                        </div>
                    </div>

                    {/* Status & Functional */}
                    <div className="space-y-6">
                        <h3 className="text-[#A1A1A1] text-sm uppercase tracking-wider font-semibold">Status & Borders</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            <ColorSwatch name="Destructive" value="#EF4444" cssVar="--destructive" />
                            <ColorSwatch name="Success / Chart 2" value="#4ADE80" cssVar="--chart-2" text="black" />
                            <ColorSwatch name="Warning / Chart 1" value="#FDB913" cssVar="--chart-1" text="black" />
                            <ColorSwatch name="Border" value="#2A2A2A" cssVar="--border" />
                            <ColorSwatch name="Ring" value="#A1A1A1" cssVar="--ring" text="black" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Spacing & Layout */}
            <section className="space-y-12">
                <div className="flex items-center gap-3 text-[#C5E4E8]">
                    <LucideLayout className="w-6 h-6" />
                    <h2 className="text-2xl font-medium tracking-wide">Layout & Spacing</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                     <div className="space-y-8">
                        <h3 className="text-[#A1A1A1] text-sm uppercase tracking-wider font-semibold border-b border-[#2A2A2A] pb-2">Spacing Scale (Base 8px)</h3>
                        <div className="space-y-4 font-mono text-xs">
                             <SpacingBar label="xs" value="4px" />
                             <SpacingBar label="sm" value="8px" />
                             <SpacingBar label="md" value="16px" />
                             <SpacingBar label="lg" value="24px" />
                             <SpacingBar label="xl" value="32px" />
                             <SpacingBar label="2xl" value="48px" />
                             <SpacingBar label="3xl" value="64px" />
                             <SpacingBar label="4xl" value="96px" />
                        </div>
                     </div>

                     <div className="space-y-8">
                        <h3 className="text-[#A1A1A1] text-sm uppercase tracking-wider font-semibold border-b border-[#2A2A2A] pb-2">Layout Constraints</h3>
                        <div className="grid gap-6">
                            <div className="p-6 border border-[#2A2A2A] rounded-lg">
                                <h4 className="font-harvey-serif text-xl mb-4">Container</h4>
                                <div className="space-y-2 text-sm text-[#A1A1A1]">
                                    <div className="flex justify-between border-b border-[#2A2A2A] pb-2">
                                        <span>Max Width</span>
                                        <span className="font-mono text-white">1920px</span>
                                    </div>
                                    <div className="flex justify-between border-b border-[#2A2A2A] pb-2">
                                        <span>Padding (Desktop)</span>
                                        <span className="font-mono text-white">40px (px-10)</span>
                                    </div>
                                    <div className="flex justify-between border-b border-[#2A2A2A] pb-2">
                                        <span>Padding (Tablet)</span>
                                        <span className="font-mono text-white">32px (px-8)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 border border-[#2A2A2A] rounded-lg">
                                <h4 className="font-harvey-serif text-xl mb-4">Header Dimensions</h4>
                                <div className="space-y-2 text-sm text-[#A1A1A1]">
                                    <div className="flex justify-between border-b border-[#2A2A2A] pb-2">
                                        <span>--base-header-height</span>
                                        <span className="font-mono text-white">80px (desktop)</span>
                                    </div>
                                    <div className="flex justify-between border-b border-[#2A2A2A] pb-2">
                                        <span>--header-height (Mobile)</span>
                                        <span className="font-mono text-white">64px</span>
                                    </div>
                                    <div className="flex justify-between border-b border-[#2A2A2A] pb-2">
                                        <span>--header-banner-height</span>
                                        <span className="font-mono text-white">48px</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </section>

             {/* Shapes & Animation */}
             <section className="space-y-12">
                <div className="flex items-center gap-3 text-[#A1A1A1]">
                    <LucideMove className="w-6 h-6" />
                    <h2 className="text-2xl font-medium tracking-wide">Primitives & Motion</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Radius */}
                    <div className="space-y-6">
                        <h3 className="text-[#A1A1A1] text-sm uppercase tracking-wider font-semibold">Border Radius</h3>
                         <div className="grid gap-4">
                            <div className="h-16 w-full border border-[#FFFFFF] rounded-sm flex items-center justify-center text-xs font-mono">
                                --radius-sm (0.25rem)
                            </div>
                            <div className="h-16 w-full border border-[#FFFFFF] rounded-md flex items-center justify-center text-xs font-mono">
                                --radius-md (0.375rem)
                            </div>
                            <div className="h-16 w-full border border-[#FFFFFF] rounded-lg flex items-center justify-center text-xs font-mono">
                                --radius-lg (0.5rem)
                            </div>
                         </div>
                    </div>

                    {/* Animation */}
                    <div className="space-y-6">
                        <h3 className="text-[#A1A1A1] text-sm uppercase tracking-wider font-semibold">Transitions</h3>
                         <div className="grid gap-4">
                             <div className="bg-[#1A1A1A] p-4 rounded-lg space-y-2">
                                <div className="text-xs text-[#A1A1A1] font-mono">Timing Function</div>
                                <div className="text-white text-sm">cubic-bezier(0.25, 0.46, 0.45, 0.94)</div>
                                <div className="w-full bg-[#2A2A2A] h-1.5 rounded-full overflow-hidden mt-2">
                                    <div className="w-full h-full bg-[#FDB913] animate-pulse origin-left scale-x-50"></div>
                                </div>
                             </div>
                             <div className="bg-[#1A1A1A] p-4 rounded-lg space-y-2">
                                <div className="text-xs text-[#A1A1A1] font-mono">Duration Standard</div>
                                <div className="text-white text-sm">300ms</div>
                             </div>
                             <div className="bg-[#1A1A1A] p-4 rounded-lg space-y-2">
                                <div className="text-xs text-[#A1A1A1] font-mono">Duration Slow</div>
                                <div className="text-white text-sm">500ms</div>
                             </div>
                         </div>
                    </div>

                    {/* Layers */}
                    <div className="space-y-6">
                        <h3 className="text-[#A1A1A1] text-sm uppercase tracking-wider font-semibold">Shadows & Depth</h3>
                         <div className="grid gap-6">
                             <div className="bg-[#0A0A0A] border border-[#2A2A2A] h-24 rounded-lg flex items-center justify-center text-sm shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
                                Light Shadow (Cards)
                             </div>
                             <div className="bg-[#0A0A0A] border border-[#2A2A2A] h-24 rounded-lg flex items-center justify-center text-sm shadow-[0_10px_25px_rgba(0,0,0,0.3)] relative z-10">
                                Heavy Shadow (Dropdowns)
                             </div>
                         </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// Sub-components for Token Display
// ----------------------------------------------------------------------

function Badge({ children, variant = "default" }: { children: React.ReactNode, variant?: "default" | "outline" }) {
    if (variant === "outline") {
        return <span className="px-3 py-1 border border-[#2A2A2A] rounded-full text-xs font-mono text-[#A1A1A1]">{children}</span>
    }
    return <span className="px-3 py-1 bg-[#F5F5F5] text-black rounded-full text-xs font-mono font-medium">{children}</span>
}

function TypeSpec({ 
    name, 
    font, 
    size, 
    leading, 
    weight, 
    children,
    className,
    compact = false
}: { 
    name: string, 
    font: string, 
    size: string, 
    leading: string, 
    weight: string, 
    children: React.ReactNode,
    className?: string,
    compact?: boolean
}) {
    return (
        <div className={className}>
            <div className="flex items-baseline justify-between mb-2">
                <span className="text-[#A1A1A1] text-xs uppercase tracking-wider">{name}</span>
                <span className="text-[#A1A1A1] font-mono text-xs hidden md:inline-block">
                    {font} • {size} • LH {leading} • {weight}
                </span>
            </div>
            <div 
                className={font} 
                style={{ 
                    fontSize: size, 
                    lineHeight: leading, 
                    fontWeight: weight 
                }}
            >
                {children}
            </div>
            {compact && (
                 <span className="text-[#A1A1A1] font-mono text-xs mt-2 md:hidden block">
                    {font} • {size} • LH {leading} • {weight}
                </span>
            )}
        </div>
    )
}

function ColorSwatch({ 
    name, 
    value, 
    cssVar, 
    text = "white",
    className
}: { 
    name: string, 
    value: string, 
    cssVar: string, 
    text?: "white" | "black",
    className?: string
}) {
    return (
        <div className="space-y-3">
            <div 
                className={`w-full aspect-square rounded-lg shadow-sm flex items-end p-3 ${className}`} 
                style={{ backgroundColor: value }}
            >
                <div className={`text-xs font-mono opacity-80 ${text === "white" ? "text-white" : "text-black"}`}>
                    {value}
                </div>
            </div>
            <div>
                <div className="font-medium text-sm">{name}</div>
                <div className="text-xs text-[#A1A1A1] font-mono mt-1">{cssVar}</div>
            </div>
        </div>
    )
}

function SpacingBar({ label, value }: { label: string, value: string }) {
    return (
        <div className="flex items-center gap-4 group">
            <div className="w-12 text-[#A1A1A1]">{label}</div>
            <div className="w-16 text-right text-white">{value}</div>
            <div 
                className="h-4 bg-[#2A2A2A] rounded-sm group-hover:bg-[#4ADE80] transition-colors duration-300"
                style={{ width: value }}
            />
        </div>
    )
}