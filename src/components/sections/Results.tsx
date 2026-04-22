"use client";

import React from 'react';
import { SearchCode, Map, Layers, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    id: 1,
    number: '01',
    title: 'Skill Gap Analysis',
    desc: 'Assess team skill gaps and developmental needs.',
    icon: <SearchCode size={28} />,
    gradient: 'from-blue-500 to-indigo-500',
    glow: 'rgba(59,130,246,0.35)',
    iconBg: 'bg-blue-500/15 border-blue-500/25 text-blue-400',
    lineColor: 'bg-gradient-to-r from-blue-500 to-indigo-500',
  },
  {
    id: 2,
    number: '02',
    title: 'Customized Training Plan',
    desc: 'Create a tailored roadmap addressing organizational goals.',
    icon: <Map size={28} />,
    gradient: 'from-indigo-500 to-violet-500',
    glow: 'rgba(99,102,241,0.35)',
    iconBg: 'bg-indigo-500/15 border-indigo-500/25 text-indigo-400',
    lineColor: 'bg-gradient-to-r from-indigo-500 to-violet-500',
  },
  {
    id: 3,
    number: '03',
    title: 'Flexible Program Delivery',
    desc: 'Deliver adaptable programs aligned with industry and organizational needs.',
    icon: <Layers size={28} />,
    gradient: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.35)',
    iconBg: 'bg-violet-500/15 border-violet-500/25 text-violet-400',
    lineColor: 'bg-gradient-to-r from-violet-500 to-purple-600',
  },
];

export function Results() {
  return (
    <section className="py-28 relative overflow-hidden border-t border-white/5">

      {/* Background */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes resDrift1 { 0%,100%{ transform:translate(0,0) scale(1); } 50%{ transform:translate(35px,-28px) scale(1.07); } }
        @keyframes resDrift2 { 0%,100%{ transform:translate(0,0) scale(1); } 50%{ transform:translate(-28px,22px) scale(0.94); } }
      `}} />
      <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#060c1e] to-[#09051a] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />
      <div className="absolute top-[-5%] left-[-5%] w-[700px] h-[600px] rounded-full blur-[160px] pointer-events-none mix-blend-screen"
        style={{ background: 'rgba(29,78,216,0.20)', animation: 'resDrift1 18s ease-in-out infinite' }} />
      <div className="absolute bottom-[-5%] right-[-5%] w-[650px] h-[500px] rounded-full blur-[150px] pointer-events-none mix-blend-screen"
        style={{ background: 'rgba(109,40,217,0.18)', animation: 'resDrift2 22s ease-in-out infinite' }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_40%,rgba(3,7,18,0.5)_100%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-sm font-medium text-indigo-300 tracking-wide">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            How We Deliver{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">
              Results That Matter
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            A proven three-step process for enterprise transformation.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">

          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(16.66%+32px)] right-[calc(16.66%+32px)] h-[1px] bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-violet-500/30 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {STEPS.map((step, idx) => (
              <div key={step.id} className="group relative flex flex-col items-center text-center lg:text-left lg:items-start">

                {/* Step number + icon row */}
                <div className="flex items-center gap-4 mb-6 w-full justify-center lg:justify-start">
                  {/* Icon badge */}
                  <div
                    className={`relative flex-shrink-0 w-16 h-16 rounded-2xl border flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${step.iconBg}`}
                    style={{ boxShadow: `0 0 0 0 ${step.glow}`, transition: 'box-shadow 0.4s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 24px 4px ${step.glow}`)}
                    onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 0 0 0 ${step.glow}`)}
                  >
                    {step.icon}
                    {/* Subtle number badge */}
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#030712] border border-white/15 flex items-center justify-center text-[10px] font-bold text-gray-400">
                      {idx + 1}
                    </span>
                  </div>

                  {/* Arrow connector between steps (desktop) */}
                  {idx < STEPS.length - 1 && (
                    <div className="hidden lg:flex flex-1 justify-end pr-2">
                      <ArrowRight size={16} className="text-white/10" />
                    </div>
                  )}
                </div>

                {/* Card */}
                <div
                  className="relative w-full rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm p-7 transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-white/[0.06] group-hover:border-white/15 overflow-hidden"
                  style={{ boxShadow: 'none' }}
                >
                  {/* Top accent line on hover */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl`} />

                  {/* Step label */}
                  <p className={`text-xs font-bold tracking-widest uppercase mb-3 text-transparent bg-clip-text bg-gradient-to-r ${step.gradient}`}>
                    Step {step.number}
                  </p>

                  <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
