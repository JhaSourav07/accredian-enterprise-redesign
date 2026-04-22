"use client";

import React, { useState } from 'react';
import { Laptop, Building, Briefcase, TrendingUp, CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react';

const SEGMENTS = [
  {
    id: 1,
    title: 'Program Specific',
    tag: 'Core Programs',
    desc: 'Curriculum meticulously tailored for high-demand programs like Generative AI, Data Science, Product Management, and more — aligned with the real skills your organization needs.',
    icon: <Laptop size={26} />,
    gradient: 'from-blue-500 to-indigo-600',
    gradientLight: 'from-blue-500/20 to-indigo-600/10',
    glow: 'rgba(59,130,246,0.4)',
    border: 'border-blue-500/30',
    iconBg: 'bg-blue-500/15 border-blue-500/25 text-blue-400',
    tagColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    features: [
      'AI & Machine Learning tracks',
      'Data Science & Analytics',
      'Product Management pathways',
      'Software Engineering excellence',
    ],
  },
  {
    id: 2,
    title: 'Industry Specific',
    tag: 'Vertical Focus',
    desc: 'Deeply specialized content built for the nuances of your industry — from healthcare compliance to fintech innovation and retail analytics — every module is contextualized to your sector.',
    icon: <Building size={26} />,
    gradient: 'from-violet-500 to-purple-600',
    gradientLight: 'from-violet-500/20 to-purple-600/10',
    glow: 'rgba(139,92,246,0.4)',
    border: 'border-violet-500/30',
    iconBg: 'bg-violet-500/15 border-violet-500/25 text-violet-400',
    tagColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    features: [
      'Healthcare & Life Sciences',
      'BFSI & Fintech',
      'Retail & e-Commerce',
      'Manufacturing & Supply Chain',
    ],
  },
  {
    id: 3,
    title: 'Role Specific',
    tag: 'Job-Ready Skills',
    desc: 'Precision training designed for every function — equipping Product Managers, Data Engineers, Business Analysts, and C-Suite executives with exactly the competencies their role demands.',
    icon: <Briefcase size={26} />,
    gradient: 'from-indigo-500 to-blue-600',
    gradientLight: 'from-indigo-500/20 to-blue-600/10',
    glow: 'rgba(99,102,241,0.4)',
    border: 'border-indigo-500/30',
    iconBg: 'bg-indigo-500/15 border-indigo-500/25 text-indigo-400',
    tagColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    features: [
      'Individual Contributor paths',
      'Manager & Team Lead programs',
      'Director & VP acceleration',
      'C-Suite executive modules',
    ],
  },
  {
    id: 4,
    title: 'Level Specific',
    tag: 'Adaptive Learning',
    desc: "Intelligent progression from foundational basics to advanced leadership — our adaptive system ensures every employee learns at the right pace, from fresh graduates to seasoned executives.",
    icon: <TrendingUp size={26} />,
    gradient: 'from-cyan-500 to-teal-600',
    gradientLight: 'from-cyan-500/20 to-teal-600/10',
    glow: 'rgba(6,182,212,0.4)',
    border: 'border-cyan-500/30',
    iconBg: 'bg-cyan-500/15 border-cyan-500/25 text-cyan-400',
    tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    features: [
      'Beginner onboarding tracks',
      'Intermediate skill-building',
      'Advanced practitioner paths',
      'Executive leadership mastery',
    ],
  },
];

export function CourseSegmentation() {
  const [activeId, setActiveId] = useState(1);
  const active = SEGMENTS.find(s => s.id === activeId)!;

  return (
    <section id="cat" className="py-28 relative overflow-hidden border-t border-white/5">

      {/* ── AMBIENT BACKGROUND ── */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ambientFloat1 { 0%,100%{ transform:translate(0,0) scale(1); }   50%{ transform:translate(30px,-25px) scale(1.06); } }
        @keyframes ambientFloat2 { 0%,100%{ transform:translate(0,0) scale(1); }   50%{ transform:translate(-25px,20px) scale(0.96); } }
        @keyframes ambientFloat3 { 0%,100%{ transform:translate(0,0) scale(1); }   50%{ transform:translate(15px,30px) scale(1.04); } }
        @keyframes segPulse      { 0%,100%{ opacity:0.04; box-shadow: none; }
                                    50%{ opacity:0.12; box-shadow: 0 0 40px 10px rgba(99,102,241,0.08); } }
      `}} />
      <div className="absolute inset-0 bg-gradient-to-br from-[#020818] via-[#060d22] to-[#0d0520] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-[5%] left-[15%] w-[700px] h-[500px] rounded-full bg-blue-700/20 blur-[130px] pointer-events-none mix-blend-screen" style={{ animation: 'ambientFloat1 18s ease-in-out infinite' }} />
      <div className="absolute bottom-[5%] right-[10%] w-[600px] h-[400px] rounded-full bg-purple-700/20 blur-[120px] pointer-events-none mix-blend-screen" style={{ animation: 'ambientFloat2 22s ease-in-out infinite' }} />
      <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-indigo-600/15 blur-[100px] pointer-events-none mix-blend-screen" style={{ animation: 'ambientFloat3 14s ease-in-out infinite' }} />
      {/* Segmentation zone shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[12%] left-[4%] w-48 h-48 rounded-2xl border border-blue-500/8 bg-blue-500/[0.02]" style={{ animation: 'segPulse 8s ease-in-out infinite 0s' }} />
        <div className="absolute bottom-[8%] right-[4%] w-56 h-56 rounded-2xl border border-purple-500/8 bg-purple-500/[0.02]" style={{ animation: 'segPulse 10s ease-in-out infinite 1.5s' }} />
        <div className="absolute top-[8%] right-[3%] w-36 h-36 rounded-2xl border border-cyan-500/8 bg-cyan-500/[0.02]" style={{ animation: 'segPulse 12s ease-in-out infinite 0.5s' }} />
      </div>
      {/* ── END BACKGROUND ── */}

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-sm font-medium text-blue-300 tracking-wide">Intelligent Personalization</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Tailored</span>{' '}
            Course Segmentation
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Every learner gets exactly the right content — no fluff, no gaps.
          </p>
        </div>

        {/* Main Layout: Selector left + Detail panel right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">

          {/* Left — Segment Selector */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {SEGMENTS.map((seg) => {
              const isActive = seg.id === activeId;
              return (
                <button
                  key={seg.id}
                  onClick={() => setActiveId(seg.id)}
                  className={`group relative w-full text-left p-5 rounded-2xl border transition-all duration-400 overflow-hidden ${
                    isActive
                      ? `bg-white/[0.08] ${seg.border} shadow-[0_0_30px_rgba(0,0,0,0.4)]`
                      : 'bg-white/[0.025] border-white/8 hover:bg-white/[0.05] hover:border-white/15'
                  }`}
                  style={isActive ? { boxShadow: `0 0 40px -8px ${seg.glow}` } : {}}
                >
                  {/* Active left accent bar */}
                  <div className={`absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full bg-gradient-to-b ${seg.gradient} transition-opacity duration-400 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

                  <div className="flex items-center gap-4 pl-2">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-400 ${seg.iconBg} ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}
                      style={isActive ? { boxShadow: `0 0 16px 2px ${seg.glow}` } : {}}>
                      {seg.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className={`font-bold text-base leading-tight transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                        {seg.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">{seg.tag}</p>
                    </div>

                    <ChevronRight size={16} className={`flex-shrink-0 transition-all duration-400 ${isActive ? 'text-white rotate-90' : 'text-gray-600 group-hover:text-gray-400'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right — Active Detail Panel */}
          <div
            key={active.id}
            className={`lg:col-span-3 relative rounded-3xl border overflow-hidden backdrop-blur-sm transition-all duration-500 ${active.border}`}
            style={{ boxShadow: `0 0 60px -10px ${active.glow}` }}
          >
            {/* Gradient header area */}
            <div className={`relative h-52 bg-gradient-to-br ${active.gradientLight} flex items-center justify-center overflow-hidden`}>
              {/* Background pattern in header */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
              {/* Large ghost icon */}
              <div className="absolute right-8 bottom-4 opacity-[0.06] scale-[3] origin-bottom-right">
                {active.icon}
              </div>
              {/* Content */}
              <div className="relative z-10 text-center px-8">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold mb-4 ${active.tagColor}`}>
                  {active.tag}
                </div>
                <div className={`w-16 h-16 mx-auto rounded-2xl border flex items-center justify-center ${active.iconBg}`}
                  style={{ boxShadow: `0 0 30px 4px ${active.glow}` }}>
                  {active.icon}
                </div>
              </div>
              {/* Gradient top bar */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${active.gradient}`} />
            </div>

            {/* Body */}
            <div className="p-8 bg-white/[0.03]">
              <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight">
                {active.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8 text-[15px]">
                {active.desc}
              </p>

              {/* Feature checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {active.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className={`flex-shrink-0 mt-0.5 ${active.iconBg.includes('blue') ? 'text-blue-400' : active.iconBg.includes('violet') ? 'text-violet-400' : active.iconBg.includes('indigo') ? 'text-indigo-400' : 'text-cyan-400'}`} />
                    <span className="text-sm text-gray-300">{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className={`group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${active.gradient} text-white text-sm font-bold shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl`}
                style={{ boxShadow: `0 0 20px -4px ${active.glow}` }}>
                Explore {active.title} Programs
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
