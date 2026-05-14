"use client";

import { useEffect } from "react";

export default function WebinarClient() {
  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>('.webinar-root .reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: '0px 0px -32px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);


  return (
    <>
      <style>{`
        .webinar-root *, .webinar-root *::before, .webinar-root *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .webinar-root { font-family: 'Inter', sans-serif; background: #F6F4F0; color: #1A1A1A; line-height: 1.6; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
        .webinar-root a { text-decoration: none; color: inherit; }
        .webinar-root img { display: block; max-width: 100%; }
        .webinar-root {
          --beige:#F6F4F0; --beige-2:#EDEAE4; --beige-3:#E4E0D8;
          --black:#1A1A1A; --black-soft:#2C2C2C;
          --sage:#E2E8D8; --sage-mid:#C4D4A8; --sage-dark:#6B8F4A;
          --orange:#D97706; --orange-dark:#B45309;
          --gray:#A3A3A3; --gray-2:#737373; --gray-3:#D4D0CA; --white:#FFFFFF;
          --radius-sm:5px; --radius-md:9px; --radius-lg:14px;
          --shadow-sm:0 1px 3px rgba(0,0,0,0.08),0 1px 2px rgba(0,0,0,0.04);
          --shadow-md:0 4px 16px rgba(0,0,0,0.08),0 2px 6px rgba(0,0,0,0.04);
          --shadow-lg:0 16px 48px rgba(0,0,0,0.12),0 4px 16px rgba(0,0,0,0.06);
        }
        .webinar-root .display { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 700; letter-spacing: -0.02em; line-height: 1.04; }
        .webinar-root .display-xl  { font-size: clamp(44px, 6vw, 76px); }
        .webinar-root .display-lg  { font-size: clamp(34px, 4vw, 52px); }
        .webinar-root .display-md  { font-size: clamp(26px, 3vw, 38px); }
        .webinar-root .eyebrow { font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gray); }
        .webinar-root .container { max-width: 1160px; margin: 0 auto; padding: 0 48px; }
        .webinar-root .section { padding: 88px 0; }
        .webinar-root .badge { display: inline-flex; align-items: center; gap: 7px; padding: 4px 13px; border-radius: var(--radius-sm); font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }
        .webinar-root .badge-sage  { background: var(--sage); border: 1px solid var(--sage-mid); color: var(--sage-dark); }
        .webinar-root .badge-amber { background: #FEF3C7; border: 1px solid #FCD34D; color: #92400E; }
        .webinar-root .badge-black { background: var(--black); border: 1px solid var(--black); color: var(--white); }
        .webinar-root .live-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--orange); flex-shrink: 0; animation: webinar-pulse 1.6s ease-in-out infinite; }
        @keyframes webinar-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.35;transform:scale(0.8)} }
        .webinar-root .w-nav { position: fixed; top: 0; left: 0; right: 0; z-index: 300; height: 60px; background: rgba(246,244,240,0.94); backdrop-filter: blur(16px) saturate(1.4); border-bottom: 1px solid var(--gray-3); display: flex; align-items: center; }
        .webinar-root .w-nav .container { width: 100%; display: flex; align-items: center; justify-content: space-between; }
        .webinar-root .nav-brand { font-size: 13.5px; font-weight: 600; color: var(--black); letter-spacing: 0.01em; display: flex; align-items: center; gap: 8px; }
        .webinar-root .nav-brand .x { color: var(--gray-3); font-weight: 300; font-size: 16px; }
        .webinar-root .nav-right { display: flex; align-items: center; gap: 16px; }
        .webinar-root .nav-date { font-size: 12px; font-weight: 500; color: var(--gray-2); display: flex; align-items: center; gap: 7px; }
        .webinar-root .nav-cta { background: var(--black); color: var(--white); border-radius: var(--radius-sm); padding: 8px 20px; font-size: 13px; font-weight: 600; transition: background 0.15s, transform 0.15s; border: none; cursor: pointer; display: inline-block; }
        .webinar-root .nav-cta:hover { background: var(--black-soft); transform: translateY(-1px); }
        .webinar-root .hero-outer { padding-top: 60px; min-height: 100vh; background: var(--beige); position: relative; overflow: hidden; }
        .webinar-root .hero-outer::before { content: ''; position: absolute; inset: 0; background-image: radial-gradient(ellipse 80% 60% at 65% 40%, rgba(217,119,6,0.055) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 10% 80%, rgba(196,212,168,0.25) 0%, transparent 60%); pointer-events: none; }
        .webinar-root .hero-grid { display: grid; grid-template-columns: 1fr 400px; gap: 64px; align-items: start; padding-top: 64px; padding-bottom: 80px; position: relative; z-index: 1; }
        .webinar-root .hero-pretag { margin-bottom: 28px; display: flex; align-items: center; gap: 10px; }
        .webinar-root .hero-pretag-divider { width: 32px; height: 1px; background: var(--gray-3); }
        .webinar-root .hero-headline { margin-bottom: 10px; }
        .webinar-root .hero-headline .italic-orange { font-style: italic; color: var(--orange); }
        .webinar-root .hero-sub-headline { font-family: 'Cormorant Garamond', serif; font-size: clamp(16px, 2vw, 21px); font-weight: 500; color: var(--gray-2); line-height: 1.5; margin-bottom: 32px; max-width: 540px; }
        .webinar-root .hero-sub-headline strong { color: var(--black-soft); font-weight: 600; }
        .webinar-root .meta-row { display: flex; flex-wrap: nowrap; gap: 0; border: 1px solid var(--gray-3); border-radius: var(--radius-md); overflow: hidden; background: var(--white); width: fit-content; max-width: 100%; margin-bottom: 48px; box-shadow: var(--shadow-sm); }
        .webinar-root .meta-cell { padding: 13px 18px; border-right: 1px solid var(--gray-3); display: flex; flex-direction: column; gap: 3px; flex-shrink: 0; }
        .webinar-root .meta-cell:last-child { border-right: none; }
        .webinar-root .meta-label { font-size: 10px; font-weight: 600; color: var(--gray); letter-spacing: 0.11em; text-transform: uppercase; white-space: nowrap; }
        .webinar-root .meta-val { font-size: 14px; font-weight: 600; color: var(--black); white-space: nowrap; }
        .webinar-root .stat-row { display: flex; gap: 44px; flex-wrap: wrap; }
        .webinar-root .stat-num { font-family: 'Cormorant Garamond', serif; font-size: 38px; font-weight: 700; color: var(--orange); line-height: 1; }
        .webinar-root .stat-lbl { font-size: 12px; color: var(--gray-2); font-weight: 400; margin-top: 4px; max-width: 120px; line-height: 1.45; }
        .webinar-root .hero-right { position: sticky; top: 76px; }
        .webinar-root .form-card { background: var(--black); border-radius: var(--radius-lg); padding: 36px 32px; box-shadow: var(--shadow-lg); color: var(--white); }
        .webinar-root .form-card-top { margin-bottom: 22px; padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .webinar-root .form-card-eyebrow { font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #666; margin-bottom: 6px; }
        .webinar-root .form-card-title { font-family: 'Cormorant Garamond', serif; font-size: 24px; font-weight: 700; line-height: 1.2; margin-bottom: 5px; color: var(--white); }
        .webinar-root .form-card-sub { font-size: 13px; color: #888; font-weight: 300; line-height: 1.55; }
        .webinar-root .spots-row { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
        .webinar-root .spots-bar { flex: 1; height: 3px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden; }
        .webinar-root .spots-fill { height: 100%; width: 71%; background: var(--orange); border-radius: 2px; position: relative; }
        .webinar-root .spots-fill::after { content: ''; position: absolute; right: 0; top: -2px; width: 7px; height: 7px; border-radius: 50%; background: var(--orange); }
        .webinar-root .spots-text { font-size: 11.5px; color: var(--orange); font-weight: 600; white-space: nowrap; }
        .webinar-root .form-group { margin-bottom: 12px; }
        .webinar-root .form-group label { display: block; font-size: 10px; font-weight: 600; color: #666; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 5px; }
        .webinar-root .form-group input, .webinar-root .form-group select { width: 100%; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.1); border-radius: var(--radius-sm); padding: 10px 13px; font-family: 'Inter', sans-serif; font-size: 14px; color: var(--white); outline: none; transition: border-color 0.15s, background 0.15s; -webkit-appearance: none; }
        .webinar-root .form-group select option { background: #222; }
        .webinar-root .form-group input::placeholder { color: rgba(255,255,255,0.2); }
        .webinar-root .form-group input:focus, .webinar-root .form-group select:focus { border-color: rgba(217,119,6,0.7); background: rgba(255,255,255,0.09); }
        .webinar-root .form-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .webinar-root .form-submit { width: 100%; margin-top: 6px; background: var(--orange); color: var(--white); border: none; border-radius: var(--radius-sm); padding: 13px 16px; font-family: 'Inter', sans-serif; font-weight: 600; font-size: 15px; cursor: pointer; letter-spacing: 0.01em; transition: background 0.15s, transform 0.12s; }
        .webinar-root .form-submit:hover { background: var(--orange-dark); transform: translateY(-1px); }
        .webinar-root .form-note { font-size: 11px; color: #555; text-align: center; margin-top: 12px; line-height: 1.6; }
        .webinar-root .tension-strip { background: var(--black); padding: 0; }
        .webinar-root .tension-inner { display: grid; grid-template-columns: repeat(3, 1fr); }
        .webinar-root .tension-cell { padding: 44px 40px; border-right: 1px solid rgba(255,255,255,0.07); position: relative; }
        .webinar-root .tension-cell:last-child { border-right: none; }
        .webinar-root .tension-cell::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: transparent; transition: background 0.2s; }
        .webinar-root .tension-cell:hover::before { background: var(--orange); }
        .webinar-root .t-num { font-family: 'Cormorant Garamond', serif; font-size: 52px; font-weight: 700; color: var(--orange); line-height: 1; margin-bottom: 10px; }
        .webinar-root .t-text { font-size: 14px; color: #999; font-weight: 300; line-height: 1.65; max-width: 260px; }
        .webinar-root .t-text strong { color: #E5E5E5; font-weight: 500; }
        .webinar-root .outcomes-section { background: var(--beige); }
        .webinar-root .outcomes-header { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: end; margin-bottom: 52px; }
        .webinar-root .outcomes-header-right { font-size: 16px; font-weight: 300; color: var(--gray-2); line-height: 1.75; }
        .webinar-root .outcomes-header-right strong { color: var(--black); font-weight: 500; }
        .webinar-root .outcomes-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: var(--gray-3); border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--gray-3); }
        .webinar-root .outcome-card { background: var(--white); padding: 38px 32px; transition: background 0.18s; cursor: default; position: relative; overflow: hidden; }
        .webinar-root .outcome-card::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: var(--orange); transform: scaleX(0); transform-origin: left; transition: transform 0.25s ease; }
        .webinar-root .outcome-card:hover { background: var(--beige); }
        .webinar-root .outcome-card:hover::after { transform: scaleX(1); }
        .webinar-root .outcome-n { font-family: 'Cormorant Garamond', serif; font-size: 52px; font-weight: 700; color: var(--beige-3); line-height: 1; margin-bottom: 20px; transition: color 0.2s; }
        .webinar-root .outcome-card:hover .outcome-n { color: var(--sage-mid); }
        .webinar-root .outcome-title { font-size: 15px; font-weight: 600; color: var(--black); margin-bottom: 10px; line-height: 1.35; }
        .webinar-root .outcome-desc { font-size: 13.5px; color: var(--gray-2); line-height: 1.72; font-weight: 300; }
        .webinar-root .agenda-section { background: var(--beige-2); }
        .webinar-root .agenda-header { margin-bottom: 52px; }
        .webinar-root .agenda-sessions { display: flex; flex-direction: column; gap: 20px; }
        .webinar-root .session-card { background: var(--white); border: 1px solid var(--gray-3); border-radius: var(--radius-lg); overflow: hidden; transition: box-shadow 0.2s, transform 0.2s; box-shadow: var(--shadow-sm); }
        .webinar-root .session-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
        .webinar-root .session-top { display: grid; grid-template-columns: 96px 1fr; gap: 0; }
        .webinar-root .session-time-col { background: var(--black); padding: 32px 20px; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; gap: 6px; text-align: center; }
        .webinar-root .session-time-num { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 700; color: var(--white); line-height: 1; }
        .webinar-root .session-time-label { font-size: 10px; font-weight: 600; color: #666; letter-spacing: 0.08em; text-transform: uppercase; }
        .webinar-root .session-time-duration { margin-top: 10px; font-size: 11px; font-weight: 500; color: var(--orange); background: rgba(217,119,6,0.15); border-radius: 3px; padding: 2px 8px; }
        .webinar-root .session-body { padding: 28px 32px; display: flex; flex-direction: column; gap: 10px; }
        .webinar-root .session-tag-row { display: flex; align-items: center; gap: 10px; }
        .webinar-root .session-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(18px, 2vw, 23px); font-weight: 700; line-height: 1.2; color: var(--black); }
        .webinar-root .session-desc { font-size: 13.5px; color: var(--gray-2); line-height: 1.72; font-weight: 300; max-width: 680px; }
        .webinar-root .session-speaker-row { display: flex; align-items: center; gap: 10px; padding-top: 8px; border-top: 1px solid var(--beige-2); }
        .webinar-root .speaker-chip { display: flex; align-items: center; gap: 8px; }
        .webinar-root .speaker-avatar-sm { width: 32px; height: 32px; border-radius: 50%; background: var(--beige-3); border: 1px solid var(--gray-3); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: var(--black-soft); flex-shrink: 0; overflow: hidden; }
        .webinar-root .speaker-avatar-sm img { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; object-position: center top; display: block; }
        .webinar-root .speaker-chip-name { font-size: 13px; font-weight: 600; color: var(--black); }
        .webinar-root .speaker-chip-role { font-size: 12px; color: var(--gray); font-weight: 300; }
        .webinar-root .session-card.demo-card .session-time-col { background: #1C1200; }
        .webinar-root .session-card.demo-card .session-time-num { color: #FCD34D; }
        .webinar-root .qa-row { display: grid; grid-template-columns: 96px 1fr; gap: 0; background: var(--white); border: 1px solid var(--gray-3); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm); }
        .webinar-root .qa-time { background: var(--beige-2); padding: 20px; display: flex; align-items: center; justify-content: center; font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 700; color: var(--gray-2); }
        .webinar-root .qa-body { padding: 20px 32px; display: flex; align-items: center; gap: 12px; }
        .webinar-root .qa-body .badge { flex-shrink: 0; }
        .webinar-root .qa-text { font-size: 14px; font-weight: 500; color: var(--black-soft); }
        .webinar-root .qa-sub { font-size: 12px; color: var(--gray); font-weight: 300; }
        .webinar-root .speakers-section { background: var(--beige-2); }
        .webinar-root .speakers-header { margin-bottom: 52px; }
        .webinar-root .speakers-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .webinar-root .speaker-card { background: var(--white); border: 1px solid var(--gray-3); border-radius: var(--radius-lg); padding: 36px 28px; transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s; box-shadow: var(--shadow-sm); position: relative; overflow: hidden; }
        .webinar-root .speaker-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--orange); transform: scaleX(0); transform-origin: left; transition: transform 0.25s ease; }
        .webinar-root .speaker-card:hover { border-color: var(--gray-2); transform: translateY(-3px); box-shadow: var(--shadow-md); }
        .webinar-root .speaker-card:hover::before { transform: scaleX(1); }
        .webinar-root .speaker-photo-wrap { position: relative; width: 88px; height: 88px; margin-bottom: 18px; }
        .webinar-root .speaker-photo-wrap img { width: 88px; height: 88px; border-radius: 50%; object-fit: cover; object-position: center top; border: 3px solid var(--beige-3); box-shadow: var(--shadow-sm); display: block; }
        .webinar-root .speaker-name { font-size: 16px; font-weight: 600; color: var(--black); margin-bottom: 3px; }
        .webinar-root .speaker-role { font-size: 13px; color: var(--gray-2); font-weight: 300; line-height: 1.5; margin-bottom: 16px; }
        .webinar-root .speaker-session { font-size: 12.5px; color: var(--black-soft); font-weight: 500; line-height: 1.5; padding-top: 14px; border-top: 1px solid var(--beige-2); }
        .webinar-root .speaker-session-label { font-size: 10px; font-weight: 600; color: var(--gray); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 4px; }
        .webinar-root .cohosts-section { background: var(--beige); }
        .webinar-root .cohosts-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 48px; }
        .webinar-root .cohost-card { background: var(--white); border: 1px solid var(--gray-3); border-radius: var(--radius-lg); padding: 36px 32px; transition: box-shadow 0.2s, transform 0.2s; box-shadow: var(--shadow-sm); }
        .webinar-root .cohost-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
        .webinar-root .cohost-name { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 700; color: var(--black); margin-bottom: 5px; }
        .webinar-root .cohost-tagline { font-size: 13px; color: var(--orange); font-weight: 500; margin-bottom: 18px; letter-spacing: 0.01em; }
        .webinar-root .cohost-desc { font-size: 14px; color: var(--gray-2); font-weight: 300; line-height: 1.75; margin-bottom: 20px; }
        .webinar-root .cohost-desc strong { color: var(--black-soft); font-weight: 500; }
        .webinar-root .cohost-link { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: var(--black); border-bottom: 1px solid var(--black); padding-bottom: 1px; transition: color 0.15s, border-color 0.15s; }
        .webinar-root .cohost-link:hover { color: var(--orange); border-color: var(--orange); }
        .webinar-root .cohost-badge-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
        .webinar-root .cta-section { background: var(--black); padding: 96px 0; position: relative; overflow: hidden; }
        .webinar-root .cta-section::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 60% at 50% 50%, rgba(217,119,6,0.08) 0%, transparent 70%); pointer-events: none; }
        .webinar-root .cta-inner { position: relative; z-index: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .webinar-root .cta-eyebrow { color: #555; margin-bottom: 14px; }
        .webinar-root .cta-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(34px, 4vw, 52px); font-weight: 700; line-height: 1.06; color: var(--white); letter-spacing: -0.02em; margin-bottom: 14px; }
        .webinar-root .cta-title em { font-style: italic; color: var(--orange); }
        .webinar-root .cta-desc { font-size: 15px; color: #888; font-weight: 300; line-height: 1.72; }
        .webinar-root .cta-checklist { display: flex; flex-direction: column; gap: 14px; margin-bottom: 36px; }
        .webinar-root .check-item { display: flex; align-items: flex-start; gap: 12px; }
        .webinar-root .check-icon { width: 22px; height: 22px; border-radius: 50%; background: rgba(217,119,6,0.15); border: 1px solid rgba(217,119,6,0.3); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; font-size: 11px; color: var(--orange); font-weight: 700; }
        .webinar-root .check-text { font-size: 14px; color: #CCCCCC; font-weight: 300; line-height: 1.55; }
        .webinar-root .check-text strong { color: var(--white); font-weight: 500; }
        .webinar-root .cta-btn { display: inline-flex; align-items: center; gap: 10px; background: var(--orange); color: var(--white); border: none; border-radius: var(--radius-sm); padding: 15px 36px; font-family: 'Inter', sans-serif; font-weight: 600; font-size: 15px; cursor: pointer; letter-spacing: 0.01em; transition: background 0.15s, transform 0.12s; text-decoration: none; }
        .webinar-root .cta-btn:hover { background: var(--orange-dark); transform: translateY(-1px); }
        .webinar-root .cta-btn-arrow { font-size: 18px; transition: transform 0.15s; }
        .webinar-root .cta-btn:hover .cta-btn-arrow { transform: translateX(3px); }
        .webinar-root .w-footer { background: #111111; border-top: 1px solid #1F1F1F; padding: 28px 0; }
        .webinar-root .w-footer .container { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
        .webinar-root .footer-brand { font-size: 13px; font-weight: 600; color: #444; }
        .webinar-root .footer-links { display: flex; gap: 24px; }
        .webinar-root .footer-links a { font-size: 12px; color: #3A3A3A; transition: color 0.15s; }
        .webinar-root .footer-links a:hover { color: #777; }
        .webinar-root .footer-copy { font-size: 12px; color: #333; }
        .webinar-root .reveal { opacity: 0; transform: translateY(22px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .webinar-root .reveal.in { opacity: 1; transform: translateY(0); }
        .webinar-root .reveal-delay-1 { transition-delay: 0.08s; }
        .webinar-root .reveal-delay-2 { transition-delay: 0.16s; }
        .webinar-root .reveal-delay-3 { transition-delay: 0.24s; }
        @media (max-width: 960px) {
          .webinar-root .hero-grid { grid-template-columns: 1fr; gap: 48px; padding-bottom: 60px; }
          .webinar-root .hero-right { position: static; }
          .webinar-root .form-card { max-width: 520px; }
          .webinar-root .tension-inner { grid-template-columns: 1fr; }
          .webinar-root .tension-cell { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); }
          .webinar-root .tension-cell:last-child { border-bottom: none; }
          .webinar-root .outcomes-header { grid-template-columns: 1fr; gap: 16px; }
          .webinar-root .outcomes-grid { grid-template-columns: 1fr; }
          .webinar-root .speakers-grid { grid-template-columns: 1fr; }
          .webinar-root .cohosts-grid { grid-template-columns: 1fr; }
          .webinar-root .cta-inner { grid-template-columns: 1fr; gap: 48px; }
          .webinar-root .session-top { grid-template-columns: 72px 1fr; }
          .webinar-root .container { padding: 0 24px; }
          .webinar-root .section { padding: 64px 0; }
          .webinar-root .w-nav .container { padding: 0 24px; }
        }
        @media (max-width: 620px) {
          .webinar-root .form-2col { grid-template-columns: 1fr; }
          .webinar-root .meta-row { flex-wrap: wrap; }
          .webinar-root .meta-cell { border-right: none; border-bottom: 1px solid var(--gray-3); flex: 1 1 40%; }
          .webinar-root .meta-cell:last-child { border-bottom: none; }
          .webinar-root .stat-row { gap: 28px; }
          .webinar-root .session-top { grid-template-columns: 60px 1fr; }
          .webinar-root .session-time-col { padding: 24px 12px; }
          .webinar-root .session-body { padding: 20px 18px; }
          .webinar-root .qa-row { grid-template-columns: 60px 1fr; }
          .webinar-root .nav-date { display: none; }
        }
      `}</style>

      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />

      <div className="webinar-root">
        <nav className="w-nav">
          <div className="container">
            <div className="nav-brand">ENAI <span className="x">×</span> IndustryGeniuses</div>
            <div className="nav-right">
              <div className="nav-date"><span className="live-dot"></span>Free Live Webinar &mdash; 24 June 2026 &middot; 2:00 PM GMT</div>
              <a href="#register" className="nav-cta">Reserve Seat</a>
            </div>
          </div>
        </nav>

        <section className="hero-outer">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-left">
                <div className="hero-pretag">
                  <span className="badge badge-sage"><span className="live-dot"></span>Free Live Webinar</span>
                  <span className="hero-pretag-divider"></span>
                  <span className="eyebrow">24 June 2026 &middot; 2:00 PM GMT &middot; 60 Minutes</span>
                </div>
                <h1 className="display display-xl hero-headline">
                  The Revenue<br /><span className="italic-orange">Execution Gap</span>
                </h1>
                <p className="hero-sub-headline">
                  Why CPG &amp; B2B leaders have <strong>the data, the tools</strong> &mdash; and still miss the number. Three senior operators. One live session. A blueprint you can act on the next morning.
                </p>
                <div className="meta-row">
                  <div className="meta-cell"><span className="meta-label">Date</span><span className="meta-val">24 June 2026</span></div>
                  <div className="meta-cell"><span className="meta-label">Time</span><span className="meta-val">2:00 – 3:00 PM GMT</span></div>
                  <div className="meta-cell"><span className="meta-label">Duration</span><span className="meta-val">60 Min + Q&amp;A</span></div>
                  <div className="meta-cell"><span className="meta-label">Format</span><span className="meta-val">Live on Zoom</span></div>
                  <div className="meta-cell"><span className="meta-label">Cost</span><span className="meta-val">Free</span></div>
                </div>
                <div className="stat-row">
                  <div><div className="stat-num">73%</div><div className="stat-lbl">of B2B buyers research before speaking to sales</div></div>
                  <div><div className="stat-num">40m</div><div className="stat-lbl">the gap between strategy and execution where revenue dies</div></div>
                  <div><div className="stat-num">3×</div><div className="stat-lbl">higher reply rates with AI-personalised outbound</div></div>
                </div>
              </div>

              <div className="hero-right" id="register">
                <form
                  name="webinar-registration"
                  method="POST"
                  data-netlify="true"
                  className="form-card"
                >
                  <input type="hidden" name="form-name" value="webinar-registration" />
                  <div className="form-card-top">
                    <p className="form-card-eyebrow">Save Your Seat</p>
                    <h2 className="form-card-title">Register Free</h2>
                    <p className="form-card-sub">30 seconds. Confirmation in your inbox immediately. Recording shared post-event.</p>
                  </div>
                  <div className="spots-row">
                    <div className="spots-bar"><div className="spots-fill"></div></div>
                    <span className="spots-text">71% of seats claimed</span>
                  </div>
                  <div className="form-2col">
                    <div className="form-group"><label>First Name</label><input type="text" name="firstName" placeholder="Sarah" required /></div>
                    <div className="form-group"><label>Last Name</label><input type="text" name="lastName" placeholder="Chen" required /></div>
                  </div>
                  <div className="form-group"><label>Work Email</label><input type="email" name="email" placeholder="sarah@company.com" required /></div>
                  <div className="form-group"><label>Job Title</label><input type="text" name="jobTitle" placeholder="VP Sales" required /></div>
                  <div className="form-group"><label>Company</label><input type="text" name="company" placeholder="Your company" required /></div>
                  <div className="form-group">
                    <label>ARR Stage</label>
                    <select name="arrStage" required>
                      <option value="" disabled selected>Select your stage</option>
                      <option>Pre-revenue</option>
                      <option>$0 – $1M ARR</option>
                      <option>$1M – $5M ARR</option>
                      <option>$5M – $10M ARR</option>
                      <option>$10M+ ARR</option>
                    </select>
                  </div>
                  <button type="submit" className="form-submit">Reserve My Free Seat &rarr;</button>
                  <p className="form-note">No spam &middot; One reminder before the event &middot; One follow-up after &middot; Unsubscribe anytime</p>
                </form>
              </div>
            </div>
          </div>
        </section>

        <div className="tension-strip reveal">
          <div className="tension-inner">
            <div className="tension-cell container" style={{ maxWidth: 'none', padding: '44px 40px' }}>
              <div className="t-num">73%</div>
              <p className="t-text"><strong>of B2B buyers complete their research</strong> before ever speaking to your sales team. Most companies respond in days. Days you do not have.</p>
            </div>
            <div className="tension-cell" style={{ padding: '44px 40px' }}>
              <div className="t-num">Day 1</div>
              <p className="t-text">Growth in CPG and retail does not fail due to a lack of insight. <strong>It fails in execution and speed.</strong> This session shows you exactly where and how to close that gap.</p>
            </div>
            <div className="tension-cell" style={{ padding: '44px 40px' }}>
              <div className="t-num">Live</div>
              <p className="t-text">Not a deck. Not a theory session. <strong>A live product demo</strong> from a logistics leader&apos;s seat — showing the revenue OS running in real time on real accounts.</p>
            </div>
          </div>
        </div>

        <section className="section outcomes-section">
          <div className="container">
            <div className="outcomes-header reveal">
              <div>
                <p className="eyebrow" style={{ marginBottom: '12px' }}>Why Attend</p>
                <h2 className="display display-lg">Three outcomes.<br />One session.</h2>
              </div>
              <div className="outcomes-header-right">
                This is not a webinar about AI. It is a <strong>working session</strong> built for revenue leaders who are done with strategy decks and need to understand what actually closes the gap between knowing and doing.
              </div>
            </div>
            <div className="outcomes-grid">
              <div className="outcome-card reveal">
                <div className="outcome-n">01</div>
                <div className="outcome-title">A sharp operator&apos;s lens on what CPG &amp; B2B leaders actually need</div>
                <div className="outcome-desc">Russell Evans brings a senior commercial perspective from global CPG, retail, and analytics — sharing where traditional approaches fall short and what actionable audience intelligence really looks like in practice.</div>
              </div>
              <div className="outcome-card reveal reveal-delay-1">
                <div className="outcome-n">02</div>
                <div className="outcome-title">A practical AI framework you can begin deploying in 100 days</div>
                <div className="outcome-desc">Zeeshan Idrees maps the pain points AI agents actually solve in the modern revenue stack — and translates it into a 100-day GTM blueprint structured by stage, role, and execution priority.</div>
              </div>
              <div className="outcome-card reveal reveal-delay-2">
                <div className="outcome-n">03</div>
                <div className="outcome-title">A live proof of concept — not slides, the product running</div>
                <div className="outcome-desc">Nikhil Nehra demos ENAI from a logistics leader&apos;s perspective. You will see the full revenue OS operating in real time — signal detection, personalised outreach, and sequence management on a real industry account.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section agenda-section">
          <div className="container">
            <div className="agenda-header reveal">
              <p className="eyebrow" style={{ marginBottom: '12px' }}>Session Agenda</p>
              <h2 className="display display-lg">60 minutes.<br />Every minute earns its place.</h2>
            </div>
            <div className="agenda-sessions">
              <div className="session-card reveal">
                <div className="session-top">
                  <div className="session-time-col"><div className="session-time-num">0:00</div><div className="session-time-label">Open</div><div className="session-time-duration">5 min</div></div>
                  <div className="session-body">
                    <div className="session-tag-row"><span className="badge badge-sage">Welcome</span></div>
                    <div className="session-title">Welcome &amp; Context Setting</div>
                    <div className="session-desc">Setting the frame for the session and why the revenue execution gap is the defining challenge for B2B and CPG leaders in 2026.</div>
                    <div className="session-speaker-row">
                      <div className="speaker-chip">
                        <div className="speaker-avatar-sm"><img src="https://www.industrygeniuses.com/team-zeeshan-idrees.jpg" alt="Zeeshan Idrees" /></div>
                        <div><div className="speaker-chip-name">Zeeshan Idrees</div><div className="speaker-chip-role">CEO, IndustryGeniuses &middot; Co-Founder, ENAI</div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="session-card reveal">
                <div className="session-top">
                  <div className="session-time-col"><div className="session-time-num">0:05</div><div className="session-time-label">Session 1</div><div className="session-time-duration">15 min</div></div>
                  <div className="session-body">
                    <div className="session-tag-row"><span className="badge badge-sage">Keynote</span></div>
                    <div className="session-title">Driving Growth in CPG &amp; Retail: What Leaders Actually Need from Their Partners</div>
                    <div className="session-desc">In today&apos;s data-rich environment, growth in CPG and retail doesn&apos;t fail due to a lack of insight — it fails in execution and speed. Russell Evans brings an operator&apos;s perspective on what it truly takes to build a scalable revenue engine: developing actionable audience intelligence, ensuring flawless in-market execution, and creating the visibility to move faster than the competition.</div>
                    <div className="session-speaker-row">
                      <div className="speaker-chip">
                        <div className="speaker-avatar-sm"><img src="https://media.licdn.com/dms/image/v2/C5103AQHeCzznCdZmFg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516281659867?e=1779926400&v=beta&t=hnq4Zs3P4liBfdU_LvobPkrLsV9VhWr40L02PLwIEdo" alt="Russell Evans" /></div>
                        <div><div className="speaker-chip-name">Russell Evans</div><div className="speaker-chip-role">Affiliate Expert &middot; CMO in Residence</div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="session-card reveal">
                <div className="session-top">
                  <div className="session-time-col"><div className="session-time-num">0:20</div><div className="session-time-label">Session 2</div><div className="session-time-duration">15 min</div></div>
                  <div className="session-body">
                    <div className="session-tag-row"><span className="badge badge-sage">Expert Session</span></div>
                    <div className="session-title">Closing the Gap with AI Agents: Solving Real Revenue Pain Points in 100 Days</div>
                    <div className="session-desc">The AI tools exist. The intent is there. So why is pipeline still the hardest problem in B2B? Zeeshan Idrees maps the specific pain points AI agents solve — and the ones they do not — across the full buyer journey. Drawing on live client engagements across SaaS, FinTech, and Retail, he frames a structured 100-day approach to deploying AI agents across your GTM motion.</div>
                    <div className="session-speaker-row">
                      <div className="speaker-chip">
                        <div className="speaker-avatar-sm"><img src="https://www.industrygeniuses.com/team-zeeshan-idrees.jpg" alt="Zeeshan Idrees" /></div>
                        <div><div className="speaker-chip-name">Zeeshan Idrees</div><div className="speaker-chip-role">CEO, IndustryGeniuses &middot; Co-Founder, ENAI</div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="session-card demo-card reveal">
                <div className="session-top">
                  <div className="session-time-col"><div className="session-time-num">0:35</div><div className="session-time-label">Session 3</div><div className="session-time-duration">15 min</div></div>
                  <div className="session-body">
                    <div className="session-tag-row"><span className="badge badge-amber">&#9654; Live Demo</span></div>
                    <div className="session-title">Running the Revenue OS from a Logistics Leader&apos;s Seat — Live</div>
                    <div className="session-desc">No slides. No pre-recorded clips. Nikhil Nehra opens ENAI live and walks through the platform as a logistics or transportation operator would — from loading a real ICP list, to AI-generated account-level messaging, to a 3-touch LinkedIn + email sequence launching in a single click.</div>
                    <div className="session-speaker-row">
                      <div className="speaker-chip">
                        <div className="speaker-avatar-sm"><img src="https://www.industrygeniuses.com/team-nikhil-nehra.jpg" alt="Nikhil Nehra" /></div>
                        <div><div className="speaker-chip-name">Nikhil Nehra</div><div className="speaker-chip-role">Founder &amp; CEO, ENAI</div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="qa-row reveal">
                <div className="qa-time">0:50</div>
                <div className="qa-body">
                  <span className="badge badge-black">Q&amp;A</span>
                  <div><div className="qa-text">Live Q&amp;A &amp; Closing Remarks &mdash; All Three Speakers</div><div className="qa-sub">10 minutes &middot; Open floor &middot; Questions taken live</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section speakers-section">
          <div className="container">
            <div className="speakers-header reveal">
              <p className="eyebrow" style={{ marginBottom: '12px' }}>The Speakers</p>
              <h2 className="display display-lg">Three operators.<br />One unified perspective.</h2>
            </div>
            <div className="speakers-grid">
              <div className="speaker-card reveal">
                <div className="speaker-photo-wrap"><img src="https://media.licdn.com/dms/image/v2/C5103AQHeCzznCdZmFg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516281659867?e=1779926400&v=beta&t=hnq4Zs3P4liBfdU_LvobPkrLsV9VhWr40L02PLwIEdo" alt="Russell Evans" /></div>
                <div className="speaker-name">Russell Evans</div>
                <div className="speaker-role">Affiliate Expert &middot; CMO in Residence<br />Senior commercial leader, global CPG &amp; retail</div>
                <div className="speaker-session"><div className="speaker-session-label">Session</div>Driving Growth in CPG &amp; Retail: What Leaders Actually Need from Their Partners</div>
              </div>
              <div className="speaker-card reveal reveal-delay-1">
                <div className="speaker-photo-wrap"><img src="https://www.industrygeniuses.com/team-zeeshan-idrees.jpg" alt="Zeeshan Idrees" /></div>
                <div className="speaker-name">Zeeshan Idrees</div>
                <div className="speaker-role">CEO, IndustryGeniuses<br />Co-Founder, ENAI &middot; London</div>
                <div className="speaker-session"><div className="speaker-session-label">Session</div>Closing the Gap with AI Agents: Solving Real Revenue Pain Points in 100 Days</div>
              </div>
              <div className="speaker-card reveal reveal-delay-2">
                <div className="speaker-photo-wrap"><img src="https://www.industrygeniuses.com/team-nikhil-nehra.jpg" alt="Nikhil Nehra" /></div>
                <div className="speaker-name">Nikhil Nehra</div>
                <div className="speaker-role">Founder &amp; CEO, ENAI<br />Top 10 Agentic AI &middot; Web Summit Qatar 2026</div>
                <div className="speaker-session"><div className="speaker-session-label">Session</div>Running the Revenue OS from a Logistics Leader&apos;s Seat &mdash; Live</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section cohosts-section">
          <div className="container">
            <div className="reveal">
              <p className="eyebrow" style={{ marginBottom: '12px' }}>Hosted By</p>
              <h2 className="display display-md" style={{ marginBottom: '8px' }}>Two companies.<br />One shared mission.</h2>
              <p style={{ fontSize: '15px', color: 'var(--gray-2)', fontWeight: 300, maxWidth: '500px', lineHeight: 1.7 }}>Built to solve the same problem from two sides of the stack.</p>
            </div>
            <div className="cohosts-grid">
              <div className="cohost-card reveal">
                <div className="cohost-name">ENAI</div>
                <div className="cohost-tagline">The Revenue Operating System</div>
                <div className="cohost-badge-row">
                  <span className="badge badge-sage">Top 10 Agentic AI</span>
                  <span className="badge badge-sage">Web Summit Qatar 2026</span>
                  <span className="badge badge-sage">London HQ</span>
                </div>
                <p className="cohost-desc">ENAI reads every signal across your GTM stack — inbound, outbound, and intent — and executes your revenue motion automatically, with <strong>full audit lineage on every action</strong>. Not another point tool. An OS layer that sits above your entire stack and makes every tool investment finally pay off.</p>
                <a href="https://enai.ai" target="_blank" rel="noopener noreferrer" className="cohost-link">Visit enai.ai &rarr;</a>
              </div>
              <div className="cohost-card reveal reveal-delay-1">
                <div className="cohost-name">IndustryGeniuses</div>
                <div className="cohost-tagline">AI Growth Engine for B2B Revenue Teams</div>
                <div className="cohost-badge-row">
                  <span className="badge badge-sage">ABM as a Service</span>
                  <span className="badge badge-sage">Pipeline as a Service</span>
                  <span className="badge badge-sage">London</span>
                </div>
                <p className="cohost-desc">IndustryGeniuses deploys <strong>AI agents across the full buyer journey</strong> — from first intent signal to booked meeting — working alongside senior operators to build pipeline in your target accounts.</p>
                <a href="https://www.industrygeniuses.com" target="_blank" rel="noopener noreferrer" className="cohost-link">Visit industrygeniuses.com &rarr;</a>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-inner">
              <div className="cta-left reveal">
                <p className="eyebrow cta-eyebrow" style={{ marginBottom: '14px' }}>One more thing</p>
                <h2 className="cta-title">The gap will not<br />close <em>itself.</em></h2>
                <p className="cta-desc">Sixty minutes. Three operators who have been inside the problem you are trying to solve. A live demo of the system that runs the solution. Register now — seats are genuinely limited and 71% are already gone.</p>
              </div>
              <div className="cta-right reveal reveal-delay-1">
                <div className="cta-checklist">
                  <div className="check-item"><div className="check-icon">&#10003;</div><div className="check-text"><strong>Free to attend</strong> — no credit card, no catch</div></div>
                  <div className="check-item"><div className="check-icon">&#10003;</div><div className="check-text"><strong>Full recording</strong> shared with all registrants post-event</div></div>
                  <div className="check-item"><div className="check-icon">&#10003;</div><div className="check-text"><strong>Exclusive resource pack</strong> for live attendees only</div></div>
                  <div className="check-item"><div className="check-icon">&#10003;</div><div className="check-text"><strong>Live Q&amp;A</strong> with all three speakers — open floor</div></div>
                  <div className="check-item"><div className="check-icon">&#10003;</div><div className="check-text"><strong>No spam</strong> — one reminder, one follow-up, done</div></div>
                </div>
                <a href="#register" className="cta-btn">Reserve My Free Seat <span className="cta-btn-arrow">&rarr;</span></a>
              </div>
            </div>
          </div>
        </section>

        <footer className="w-footer">
          <div className="container">
            <div className="footer-brand">ENAI.AI &times; IndustryGeniuses</div>
            <div className="footer-links">
              <a href="https://enai.ai" target="_blank" rel="noopener noreferrer">enai.ai</a>
              <a href="https://www.industrygeniuses.com" target="_blank" rel="noopener noreferrer">industrygeniuses.com</a>
            </div>
            <div className="footer-copy">&copy; 2026 ENAI &middot; All rights reserved</div>
          </div>
        </footer>
      </div>
    </>
  );
}
