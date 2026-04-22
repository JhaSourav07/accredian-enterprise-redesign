import React from 'react';
import { Lightbulb, Users, Settings, Globe, ArrowUpRight, Target, Package } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const TIMELINE_STEPS = [
  {
    id: '01',
    title: 'Tailored Solutions',
    description: "Programs customized to your organization's goals and challenges.",
    icon: <Lightbulb size={30} />,
    position: 'top', // label above node
    color: 'from-blue-500 to-indigo-600',
    glow: 'rgba(59,130,246,0.5)',
    iconColor: 'text-blue-400',
  },
  {
    id: '02',
    title: 'Expert Guidance',
    description: 'Learn from industry leaders with real-world success.',
    icon: <Users size={30} />,
    position: 'bottom', // label below node
    color: 'from-indigo-500 to-purple-600',
    glow: 'rgba(99,102,241,0.5)',
    iconColor: 'text-indigo-400',
  },
  {
    id: '03',
    title: 'Innovative Framework',
    description: 'Proprietary methods for impactful, application-driven results.',
    icon: <Settings size={30} />,
    position: 'top',
    color: 'from-purple-500 to-pink-600',
    glow: 'rgba(168,85,247,0.5)',
    iconColor: 'text-purple-400',
  },
  {
    id: '04',
    title: 'Advanced Technology',
    description: 'State-of-the-art LMS for seamless learning experiences.',
    icon: <Globe size={30} />,
    position: 'bottom',
    color: 'from-cyan-500 to-blue-600',
    glow: 'rgba(6,182,212,0.5)',
    iconColor: 'text-cyan-400',
  },
  {
    id: '05',
    title: 'Diverse Offerings',
    description: 'Courses across industries, skill levels, and emerging fields.',
    icon: <ArrowUpRight size={30} />,
    position: 'top',
    color: 'from-blue-500 to-cyan-500',
    glow: 'rgba(59,130,246,0.5)',
    iconColor: 'text-blue-400',
  },
  {
    id: '06',
    title: 'Proven Impact',
    description: 'Trusted by leading organizations for measurable ROI.',
    icon: <Target size={30} />,
    position: 'bottom',
    color: 'from-emerald-500 to-teal-600',
    glow: 'rgba(52,211,153,0.5)',
    iconColor: 'text-emerald-400',
  },
  {
    id: '07',
    title: 'Flexible Delivery',
    description: 'Online and offline options tailored to your needs.',
    icon: <Package size={30} />,
    position: 'top',
    color: 'from-orange-500 to-amber-500',
    glow: 'rgba(251,146,60,0.5)',
    iconColor: 'text-orange-400',
  },
];

export function Timeline() {
  return (
    <section id="how-it-works" className="py-28 bg-[#030712] border-t border-white/5 overflow-hidden relative">

      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />

      {/* Subtle dot grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Vertical light streaks animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes streakDown {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.6; }
          100% { transform: translateY(200%); opacity: 0; }
        }
        .streak { animation: streakDown linear infinite; }
      `}} />
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[
          { left: '8%',  delay: '0s',   dur: '9s',  w: '1px',  color: 'rgba(99,102,241,0.15)' },
          { left: '18%', delay: '2.5s', dur: '12s', w: '2px',  color: 'rgba(59,130,246,0.12)' },
          { left: '30%', delay: '5s',   dur: '10s', w: '1px',  color: 'rgba(168,85,247,0.1)'  },
          { left: '44%', delay: '1s',   dur: '14s', w: '2px',  color: 'rgba(99,102,241,0.08)' },
          { left: '55%', delay: '7s',   dur: '11s', w: '1px',  color: 'rgba(59,130,246,0.15)' },
          { left: '67%', delay: '3.5s', dur: '8s',  w: '1px',  color: 'rgba(168,85,247,0.12)' },
          { left: '78%', delay: '6s',   dur: '13s', w: '2px',  color: 'rgba(99,102,241,0.1)'  },
          { left: '90%', delay: '0.5s', dur: '10s', w: '1px',  color: 'rgba(59,130,246,0.1)'  },
        ].map((s, i) => (
          <div
            key={i}
            className="streak absolute top-0 h-[40%] rounded-full"
            style={{
              left: s.left,
              width: s.w,
              animationDelay: s.delay,
              animationDuration: s.dur,
              background: `linear-gradient(to bottom, transparent, ${s.color}, transparent)`,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-sm font-medium text-indigo-300 tracking-wide">Our Proven Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Accredian</span> Edge
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Our proven end-to-end process for transforming your workforce at scale.
          </p>
        </div>

        {/* Timeline — desktop alternating layout */}
        <div className="hidden lg:block relative">

          {/* Labels on TOP row */}
          <div className="flex justify-between mb-6 px-[3.5%]">
            {TIMELINE_STEPS.map((step) => (
              <div key={`top-${step.id}`} className="w-[13%] min-h-[100px] flex flex-col items-center text-center">
                {step.position === 'top' ? (
                  <div className="group">
                    <h4 className={`font-bold text-sm text-white mb-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${step.color} transition-all duration-300`}>
                      {step.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-snug group-hover:text-gray-400 transition-colors">{step.description}</p>
                    {/* Vertical stem down */}
                    <div className="mx-auto mt-3 w-[2px] h-8 bg-gradient-to-b from-white/20 to-transparent" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          {/* Nodes row with connecting line */}
          <div className="relative flex items-center justify-between px-[3.5%]">

            {/* Horizontal gradient line behind nodes */}
            <div className="absolute top-1/2 left-[3.5%] right-[3.5%] h-[2px] -translate-y-1/2 bg-gradient-to-r from-blue-500/30 via-purple-500/40 to-orange-500/30 z-0" />

            {TIMELINE_STEPS.map((step, index) => (
              <React.Fragment key={step.id}>
                {/* Node */}
                <div
                  className="group relative z-10 flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-110"
                  style={{
                    background: 'radial-gradient(circle at 40% 35%, rgba(255,255,255,0.12), rgba(255,255,255,0.03))',
                    border: '2px solid rgba(255,255,255,0.1)',
                    boxShadow: `0 0 0 6px rgba(255,255,255,0.03)`,
                  }}
                >
                  {/* Inner glow on hover */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: `0 0 25px 6px ${step.glow}` }}
                  />
                  <div className={`relative z-10 ${step.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                </div>

                {/* Chevron connector (not after last) */}
                {index < TIMELINE_STEPS.length - 1 && (
                  <div className="relative z-10 flex-shrink-0 text-white/20">
                    <ChevronRight size={20} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Labels on BOTTOM row */}
          <div className="flex justify-between mt-6 px-[3.5%]">
            {TIMELINE_STEPS.map((step) => (
              <div key={`bottom-${step.id}`} className="w-[13%] min-h-[100px] flex flex-col items-center text-center">
                {step.position === 'bottom' ? (
                  <div className="group">
                    {/* Vertical stem up */}
                    <div className="mx-auto mb-3 w-[2px] h-8 bg-gradient-to-t from-white/20 to-transparent" />
                    <h4 className={`font-bold text-sm text-white mb-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${step.color} transition-all duration-300`}>
                      {step.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-snug group-hover:text-gray-400 transition-colors">{step.description}</p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile — vertical list */}
        <div className="flex lg:hidden flex-col gap-6">
          {TIMELINE_STEPS.map((step, index) => (
            <div key={step.id} className="flex items-start gap-5 group">
              <div
                className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                style={{
                  background: 'radial-gradient(circle at 40% 35%, rgba(255,255,255,0.1), rgba(255,255,255,0.03))',
                  border: '2px solid rgba(255,255,255,0.1)',
                  boxShadow: `0 0 0 4px rgba(255,255,255,0.02)`,
                }}
              >
                <div className={`${step.iconColor}`}>{step.icon}</div>
              </div>
              <div className="pt-1">
                <h4 className="font-bold text-white text-sm mb-1">{step.title}</h4>
                <p className="text-xs text-gray-500 leading-snug">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}