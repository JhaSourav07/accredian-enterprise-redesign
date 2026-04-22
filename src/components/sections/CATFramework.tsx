import React from 'react';
import { Brain, Settings, Wrench, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    icon: <Brain size={32} />,
    label: 'Concept',
    sub: 'Theoretical foundation',
    gradient: 'from-blue-500 to-indigo-600',
    glow: 'rgba(59,130,246,0.4)',
    iconColor: 'text-blue-400',
    active: false,
  },
  {
    icon: <Settings size={32} />,
    label: 'Application',
    sub: 'Real-world practice',
    gradient: 'from-indigo-500 to-purple-600',
    glow: 'rgba(99,102,241,0.5)',
    iconColor: 'text-indigo-400',
    active: true,
  },
  {
    icon: <Wrench size={32} />,
    label: 'Tools',
    sub: 'Industry tech stack',
    gradient: 'from-violet-500 to-pink-600',
    glow: 'rgba(139,92,246,0.4)',
    iconColor: 'text-violet-400',
    active: false,
  },
];

export function OATFramework() {
  return (
    <section className="py-28 relative overflow-hidden border-t border-white/5">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#060c1e] to-[#09051a] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[700px] h-[400px] rounded-full bg-[rgba(49,46,129,0.16)] blur-[160px] pointer-events-none mix-blend-screen" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-sm font-medium text-indigo-300 tracking-wide">Our Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              CAT Framework
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed">
            Our proven methodology for practical, application-based enterprise learning.
          </p>
        </div>

        {/* Framework diagram */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 max-w-3xl mx-auto">
          {STEPS.map((step, i) => (
            <React.Fragment key={step.label}>
              {/* Step circle */}
              <div className="flex flex-col items-center group">
                <div
                  className={`relative w-36 h-36 sm:w-44 sm:h-44 rounded-full flex flex-col items-center justify-center border-2 transition-all duration-500 ${
                    step.active ? 'scale-110 border-white/20' : 'border-white/8'
                  }`}
                  style={{
                    background: step.active
                      ? `radial-gradient(circle at 35% 35%, rgba(99,102,241,0.15), rgba(99,102,241,0.04))`
                      : `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.05), rgba(255,255,255,0.02))`,
                    boxShadow: step.active ? `0 0 40px -8px ${step.glow}` : 'none',
                  }}
                >
                  {step.active && (
                    <div className={`absolute top-0 inset-x-[30%] h-[2px] rounded-full bg-gradient-to-r ${step.gradient}`} />
                  )}
                  <div className={`${step.iconColor} mb-2 transition-transform duration-500 group-hover:scale-110`}>
                    {step.icon}
                  </div>
                  <span className="text-white font-bold text-sm">{step.label}</span>
                  <span className="text-gray-500 text-xs mt-0.5 text-center px-4">{step.sub}</span>
                </div>
              </div>

              {/* Arrow between steps */}
              {i < STEPS.length - 1 && (
                <div className="sm:mx-3 text-white/20 rotate-90 sm:rotate-0">
                  <ArrowRight size={22} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
