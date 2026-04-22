"use client";

import React from 'react';
import { ArrowRight, Calendar, Sparkles, Shield, Zap } from 'lucide-react';

const TRUST_BADGES = [
  { icon: <Shield size={14} />, label: 'Enterprise-Grade Security' },
  { icon: <Zap size={14} />, label: 'Rapid Deployment' },
  { icon: <Sparkles size={14} />, label: 'AI-Powered Learning' },
];

export function CTA() {
  return (
    <section className="py-28 relative overflow-hidden border-t border-white/5">

      {/* Background */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ctaPulse1 { 0%,100%{ transform:translate(0,0) scale(1); opacity:0.7; } 50%{ transform:translate(30px,-25px) scale(1.08); opacity:1; } }
        @keyframes ctaPulse2 { 0%,100%{ transform:translate(0,0) scale(1); opacity:0.6; } 50%{ transform:translate(-25px,20px) scale(0.93); opacity:0.9; } }
        @keyframes shimmer   { 0%{ background-position: -200% center; } 100%{ background-position: 200% center; } }
      `}} />
      <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#060c1e] to-[#080416] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />
      <div className="absolute top-[-20%] left-[10%] w-[800px] h-[700px] rounded-full blur-[180px] pointer-events-none mix-blend-screen"
        style={{ background: 'rgba(29,78,216,0.22)', animation: 'ctaPulse1 18s ease-in-out infinite' }} />
      <div className="absolute bottom-[-20%] right-[10%] w-[700px] h-[600px] rounded-full blur-[160px] pointer-events-none mix-blend-screen"
        style={{ background: 'rgba(109,40,217,0.20)', animation: 'ctaPulse2 22s ease-in-out infinite' }} />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-md p-10 md:p-16 text-center">

          {/* Gradient border glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-purple-500/10 pointer-events-none" />
          <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />
          <div className="absolute bottom-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />

          {/* Inner dot grid */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <Calendar size={13} className="text-indigo-400" />
            <span className="text-sm font-medium text-indigo-300 tracking-wide">Book a Free Consultation</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Ready to Transform{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Your Workforce?
            </span>
          </h2>

          <p className="text-xl text-gray-400 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Let us build a customized learning path for your organization.
            Join 200+ enterprise teams already transforming with Accredian.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button className="group relative flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-[15px] transition-all duration-300 hover:scale-[1.03] overflow-hidden"
              style={{ boxShadow: '0 0 30px -4px rgba(79,70,229,0.6)' }}>
              <span className="relative z-10 flex items-center gap-2">
                Schedule a Call
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%] group-hover:[animation:shimmer_1s_ease_forwards]" />
            </button>

            <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/15 text-white font-semibold text-[15px] hover:bg-white/10 hover:border-white/25 transition-all duration-300">
              View Case Studies
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {TRUST_BADGES.map((b, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/8">
                <span className="text-indigo-400">{b.icon}</span>
                <span className="text-xs text-gray-400 font-medium">{b.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}