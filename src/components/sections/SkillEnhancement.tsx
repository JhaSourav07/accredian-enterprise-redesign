"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Code2, Globe, Rocket, Crown, TrendingUp, ArrowRight, CheckCircle2, GraduationCap } from 'lucide-react';

const LEVELS = [
  {
    id: 1,
    number: '01',
    title: 'Tech Professionals',
    subtitle: 'Tech Mastery',
    desc: 'Enhance expertise, embrace cutting-edge technology, and drive innovation at the forefront of your industry.',
    icon: <Code2 size={22} />,
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'rgba(59,130,246,0.4)',
    iconBg: 'bg-blue-500/15 border-blue-500/25 text-blue-400',
    iconColor: 'text-blue-400',
    skills: ['Advanced Engineering', 'AI & ML Integration', 'System Architecture'],
  },
  {
    id: 2,
    number: '02',
    title: 'Non-Tech Professionals',
    subtitle: 'Digital Adaptation',
    desc: 'Adapt digitally, collaborate effectively in tech-driven environments, and bridge the gap between business and technology.',
    icon: <Globe size={22} />,
    gradient: 'from-indigo-500 to-purple-600',
    glow: 'rgba(99,102,241,0.4)',
    iconBg: 'bg-indigo-500/15 border-indigo-500/25 text-indigo-400',
    iconColor: 'text-indigo-400',
    skills: ['Digital Fluency', 'Data-Driven Decisions', 'Tech Collaboration'],
  },
  {
    id: 3,
    number: '03',
    title: 'Emerging Professionals',
    subtitle: 'Career Accelerator',
    desc: 'Develop powerful, in-demand skills that set you apart and fuel rapid career growth in the modern enterprise.',
    icon: <Rocket size={22} />,
    gradient: 'from-violet-500 to-pink-600',
    glow: 'rgba(139,92,246,0.4)',
    iconBg: 'bg-violet-500/15 border-violet-500/25 text-violet-400',
    iconColor: 'text-violet-400',
    skills: ['High-Demand Certifications', 'Project Ownership', 'Cross-Functional Skills'],
  },
  {
    id: 4,
    number: '04',
    title: 'Senior Professionals',
    subtitle: 'Executive Leadership',
    desc: 'Strengthen leadership capabilities, enhance strategic decision-making, and lead enterprise-wide transformation.',
    icon: <Crown size={22} />,
    gradient: 'from-amber-500 to-orange-500',
    glow: 'rgba(245,158,11,0.4)',
    iconBg: 'bg-amber-500/15 border-amber-500/25 text-amber-400',
    iconColor: 'text-amber-400',
    skills: ['Executive Strategy', 'P&L Ownership', 'AI-Led Transformation'],
  },
];

// Small animated stat pill for the visual panel
function StatPill({ value, label, delay = '0s' }: { value: string; label: string; delay?: string }) {
  return (
    <div
      className="flex items-center gap-3 bg-white/[0.06] border border-white/10 backdrop-blur-md rounded-2xl px-5 py-3"
      style={{ animation: `skillFloat 6s ease-in-out infinite ${delay}` }}
    >
      <TrendingUp size={16} className="text-blue-400 flex-shrink-0" />
      <div>
        <p className="text-white font-extrabold text-lg leading-none">{value}</p>
        <p className="text-gray-500 text-xs mt-0.5">{label}</p>
      </div>
    </div>
  );
}

export function SkillEnhancement() {
  const [activeId, setActiveId] = useState(1);
  const active = LEVELS.find(l => l.id === activeId)!;

  // Parallax refs
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  const PARALLAX = [
    { speed: 0.010, scrollFactor: 0.06 },
    { speed: 0.022, scrollFactor: 0.10 },
    { speed: 0.036, scrollFactor: 0.14 },
    { speed: 0.050, scrollFactor: 0.20 },
  ];

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const tick = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.05;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.05;
      const scrollY = window.scrollY;

      PARALLAX.forEach((p, i) => {
        const el = blobRefs.current[i];
        if (!el) return;
        const dx = smooth.current.x * p.speed * window.innerWidth;
        const dy = smooth.current.y * p.speed * window.innerHeight + scrollY * p.scrollFactor;
        el.style.transform = `translate(${dx}px, ${dy}px)`;
      });

      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 relative overflow-hidden border-t border-white/5"
    >
      {/* ── PARALLAX BACKGROUND ── */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes skillFloat  { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-8px); } }
        @keyframes slowRotate  { 0%{ transform:rotate(0deg) scale(1); } 100%{ transform:rotate(360deg) scale(1.05); } }
        @keyframes sklDrift1   { 0%,100%{ transform:translate(0,0) scale(1); }    50%{ transform:translate(45px,-35px) scale(1.09); } }
        @keyframes sklDrift2   { 0%,100%{ transform:translate(0,0) scale(1); }    50%{ transform:translate(-35px,28px) scale(0.93); } }
        @keyframes sklDrift3   { 0%,100%{ transform:translate(0,0) scale(1); }    50%{ transform:translate(22px,38px) scale(1.06); } }
        @keyframes sklDrift4   { 0%,100%{ transform:translate(0,0) scale(1); }    50%{ transform:translate(-18px,-28px) scale(1.04); } }
      `}} />

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-[#030712] via-[#050c1f] to-[#0a0618] pointer-events-none" />

      {/* Dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />

      {/* Parallax blobs — cursor + scroll reactive + ambient CSS drift */}
      {/* Layer 1 — large navy base, slowest cursor, slow drift */}
      <div ref={el => { blobRefs.current[0] = el; }}
        className="absolute top-[-10%] left-[-5%] w-[850px] h-[700px] rounded-full blur-[170px] pointer-events-none will-change-transform mix-blend-screen"
        style={{ background: 'rgba(29,78,216,0.22)', animation: 'sklDrift1 20s ease-in-out infinite' }} />
      {/* Layer 2 — indigo mid, medium cursor */}
      <div ref={el => { blobRefs.current[1] = el; }}
        className="absolute top-[25%] right-[-8%] w-[650px] h-[580px] rounded-full blur-[150px] pointer-events-none will-change-transform mix-blend-screen"
        style={{ background: 'rgba(67,56,202,0.28)', animation: 'sklDrift2 16s ease-in-out infinite' }} />
      {/* Layer 3 — violet, slightly faster cursor */}
      <div ref={el => { blobRefs.current[2] = el; }}
        className="absolute bottom-[-5%] left-[15%] w-[580px] h-[500px] rounded-full blur-[130px] pointer-events-none will-change-transform mix-blend-screen"
        style={{ background: 'rgba(109,40,217,0.22)', animation: 'sklDrift3 13s ease-in-out infinite' }} />
      {/* Layer 4 — wide violet wash, fastest */}
      <div ref={el => { blobRefs.current[3] = el; }}
        className="absolute top-[45%] left-[35%] w-[950px] h-[380px] rounded-full blur-[190px] pointer-events-none will-change-transform mix-blend-screen"
        style={{ background: 'rgba(124,58,237,0.14)', animation: 'sklDrift4 24s ease-in-out infinite' }} />

      {/* Soft vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_50%,transparent_35%,rgba(3,7,18,0.5)_100%)] pointer-events-none" />
      {/* ── END BACKGROUND ── */}

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-sm font-medium text-purple-300 tracking-wide">Workforce Transformation</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Strategic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Skill Enhancement
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            A structured journey from foundational skills to executive mastery.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT — Visual Panel */}
          <div className="relative h-[520px] rounded-3xl overflow-hidden border border-white/8 bg-white/[0.03] backdrop-blur-sm flex items-center justify-center">
            {/* Inner ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20" />
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:28px_28px]" />

            {/* Slow rotating ring */}
            <div className="absolute w-80 h-80 rounded-full border border-indigo-500/10"
              style={{ animation: 'slowRotate 40s linear infinite' }}>
              <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-indigo-400/50 -translate-x-1/2" />
            </div>
            <div className="absolute w-52 h-52 rounded-full border border-purple-500/10"
              style={{ animation: 'slowRotate 28s linear infinite reverse' }}>
              <div className="absolute -top-1 left-1/2 w-1.5 h-1.5 rounded-full bg-purple-400/40 -translate-x-1/2" />
            </div>

            {/* Center icon */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(99,102,241,0.25)]">
                <GraduationCap size={44} className="text-indigo-300" />
              </div>
              <p className="text-white font-bold text-lg">Skill Mastery Journey</p>
              <p className="text-gray-500 text-sm mt-1">3 progressive career tracks</p>
            </div>

            {/* Floating stat pills */}
            <div className="absolute top-8 left-6">
              <StatPill value="94%" label="Completion Rate" delay="0s" />
            </div>
            <div className="absolute bottom-8 right-6">
              <StatPill value="3.2×" label="Faster Promotion" delay="1.5s" />
            </div>
            <div className="absolute bottom-24 left-6">
              <StatPill value="10K+" label="Certified Professionals" delay="0.8s" />
            </div>
          </div>

          {/* RIGHT — Level Selector + Detail */}
          <div className="flex flex-col gap-5">

            {/* Level tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {LEVELS.map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setActiveId(lvl.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 text-center ${
                    activeId === lvl.id
                      ? `bg-gradient-to-r ${lvl.gradient} text-white shadow-lg`
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                  style={activeId === lvl.id ? { boxShadow: `0 0 20px -4px ${lvl.glow}` } : {}}
                >
                  {lvl.subtitle}
                </button>
              ))}
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-4">
              {LEVELS.map((lvl) => {
                const isActive = lvl.id === activeId;
                return (
                  <div
                    key={lvl.id}
                    onClick={() => setActiveId(lvl.id)}
                    className={`group cursor-pointer relative rounded-2xl border p-6 backdrop-blur-sm transition-all duration-500 overflow-hidden ${
                      isActive
                        ? 'bg-white/[0.07] border-white/15 -translate-y-0.5'
                        : 'bg-white/[0.025] border-white/8 hover:bg-white/[0.05] hover:border-white/12'
                    }`}
                    style={isActive ? { boxShadow: `0 0 40px -10px ${lvl.glow}` } : {}}
                  >
                    {/* Top gradient bar */}
                    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${lvl.gradient} transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'}`} />

                    <div className="flex items-start gap-5">
                      {/* Number + Icon */}
                      <div className="flex flex-col items-center gap-2 flex-shrink-0">
                        <div
                          className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-500 ${lvl.iconBg} ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}
                          style={isActive ? { boxShadow: `0 0 20px 2px ${lvl.glow}` } : {}}
                        >
                          {lvl.icon}
                        </div>
                        <span className="text-xs font-bold text-gray-600">{lvl.number}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className={`text-base font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                            {lvl.title}
                          </h3>
                          <span className="text-xs text-gray-600 font-medium">· {lvl.subtitle}</span>
                        </div>
                        <p className={`text-sm leading-relaxed mb-3 transition-colors duration-300 ${isActive ? 'text-gray-300' : 'text-gray-500 group-hover:text-gray-400'}`}>
                          {lvl.desc}
                        </p>

                        {/* Skill tags — only show when active */}
                        <div className={`flex flex-wrap gap-2 transition-all duration-500 overflow-hidden ${isActive ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                          {lvl.skills.map((skill, i) => (
                            <div key={i} className="flex items-center gap-1.5">
                              <CheckCircle2 size={12} className={lvl.iconColor} />
                              <span className="text-xs text-gray-400">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <button className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold self-start shadow-lg transition-all duration-300 hover:scale-[1.03]"
              style={{ boxShadow: '0 0 24px -4px rgba(99,102,241,0.5)' }}>
              Explore All Skill Tracks
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
