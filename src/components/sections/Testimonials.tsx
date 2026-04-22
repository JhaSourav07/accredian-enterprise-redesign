"use client";

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    company: 'ADP',
    initials: 'ADP',
    gradient: 'from-blue-500 to-indigo-600',
    glow: 'rgba(59,130,246,0.30)',
    iconBg: 'bg-blue-500/15 border-blue-500/30 text-blue-300',
    quote: 'We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.',
    stars: 5,
  },
  {
    id: 2,
    company: 'Bayer',
    initials: 'BY',
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16,185,129,0.30)',
    iconBg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
    quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    stars: 5,
  },
  {
    id: 3,
    company: 'Reliance',
    initials: 'RL',
    gradient: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.30)',
    iconBg: 'bg-violet-500/15 border-violet-500/30 text-violet-300',
    quote: 'Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.',
    stars: 5,
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);
  const t = TESTIMONIALS[active];

  return (
    <section id="testimonials" className="py-28 relative overflow-hidden border-t border-white/5">

      {/* Background */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes tmDrift1 { 0%,100%{ transform:translate(0,0) scale(1); } 50%{ transform:translate(35px,-28px) scale(1.06); } }
        @keyframes tmDrift2 { 0%,100%{ transform:translate(0,0) scale(1); } 50%{ transform:translate(-28px,22px) scale(0.95); } }
      `}} />
      <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#060c1e] to-[#080416] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />
      <div className="absolute top-[-10%] left-[10%] w-[700px] h-[600px] rounded-full blur-[160px] pointer-events-none mix-blend-screen"
        style={{ background: 'rgba(29,78,216,0.18)', animation: 'tmDrift1 20s ease-in-out infinite' }} />
      <div className="absolute bottom-[-10%] right-[10%] w-[650px] h-[550px] rounded-full blur-[150px] pointer-events-none mix-blend-screen"
        style={{ background: 'rgba(109,40,217,0.16)', animation: 'tmDrift2 24s ease-in-out infinite' }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_40%,rgba(3,7,18,0.5)_100%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-sm font-medium text-yellow-300 tracking-wide">Trusted by Industry Leaders</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Partners Say
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            See how top-tier organizations are building future-ready teams with Accredian.
          </p>
        </div>

        {/* Testimonials — grid on desktop, carousel on mobile */}

        {/* Desktop: all 3 cards */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {TESTIMONIALS.map((tm, idx) => (
            <div
              key={tm.id}
              className="group relative rounded-3xl border border-white/8 bg-white/[0.03] backdrop-blur-sm p-8 flex flex-col transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06] hover:border-white/15 overflow-hidden cursor-default"
              style={{ boxShadow: idx === 1 ? `0 0 50px -10px ${tm.glow}` : 'none' }}
            >
              {/* Top accent */}
              <div className={`absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r ${tm.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-full`} />

              {/* Quote icon */}
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 flex-shrink-0 ${tm.iconBg}`}>
                <Quote size={20} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: tm.stars }).map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[15px] text-gray-300 leading-relaxed flex-grow mb-8">
                "{tm.quote}"
              </p>

              {/* Company */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/8">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center font-extrabold text-sm bg-gradient-to-br ${tm.gradient} text-white flex-shrink-0`}
                  style={{ boxShadow: `0 0 16px -4px ${tm.glow}` }}>
                  {tm.initials}
                </div>
                <div>
                  <p className="text-white font-bold text-base">{tm.company}</p>
                  <p className="text-gray-500 text-xs mt-0.5">Enterprise Partner</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="lg:hidden">
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 overflow-hidden"
            style={{ boxShadow: `0 0 60px -10px ${t.glow}` }}>
            <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${t.gradient}`} />

            <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${t.iconBg}`}>
              <Quote size={20} />
            </div>

            <div className="flex gap-1 mb-5">
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <p className="text-[15px] text-gray-300 leading-relaxed mb-8">"{t.quote}"</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center font-extrabold text-sm bg-gradient-to-br ${t.gradient} text-white`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-bold">{t.company}</p>
                  <p className="text-gray-500 text-xs">Enterprise Partner</p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button onClick={prev} className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200">
                  <ChevronLeft size={16} />
                </button>
                <button onClick={next} className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${i === active ? 'w-6 h-2 bg-indigo-400' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}