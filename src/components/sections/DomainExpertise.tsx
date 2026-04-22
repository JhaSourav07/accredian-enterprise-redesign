import React from 'react';
import { Lightbulb, Bot, TrendingUp, BarChart, Settings, Globe, Landmark } from 'lucide-react';

const DOMAINS = [
  {
    id: 'pi', title: 'Product & Innovation Hub',
    icon: <Lightbulb size={28} />,
    gradient: 'from-yellow-400 to-orange-400',
    glow: 'rgba(251,191,36,0.3)',
    bg: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
    hoverBorder: 'hover:border-yellow-500/40',
    hoverShadow: 'group-hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]',
    desc: 'Drive disruptive innovation from ideation to scalable product launches.',
  },
  {
    id: 'ga', title: 'Gen-AI Mastery',
    icon: <Bot size={28} />,
    gradient: 'from-purple-400 to-indigo-400',
    glow: 'rgba(168,85,247,0.3)',
    bg: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    hoverBorder: 'hover:border-purple-500/40',
    hoverShadow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
    desc: 'Harness the power of generative AI to automate, create, and lead.',
  },
  {
    id: 'le', title: 'Leadership Elevation',
    icon: <TrendingUp size={28} />,
    gradient: 'from-blue-400 to-cyan-400',
    glow: 'rgba(59,130,246,0.3)',
    bg: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    hoverBorder: 'hover:border-blue-500/40',
    hoverShadow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
    desc: 'Cultivate next-generation leaders who inspire and drive transformation.',
  },
  {
    id: 'tdi', title: 'Tech & Data Insights',
    icon: <BarChart size={28} />,
    gradient: 'from-green-400 to-emerald-400',
    glow: 'rgba(52,211,153,0.3)',
    bg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    hoverBorder: 'hover:border-emerald-500/40',
    hoverShadow: 'group-hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]',
    desc: 'Unlock the intelligence in your data to make smarter, faster decisions.',
  },
  {
    id: 'oe', title: 'Operations Excellence',
    icon: <Settings size={28} />,
    gradient: 'from-sky-400 to-blue-400',
    glow: 'rgba(14,165,233,0.3)',
    bg: 'bg-sky-500/10 border-sky-500/20 text-sky-400',
    hoverBorder: 'hover:border-sky-500/40',
    hoverShadow: 'group-hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]',
    desc: 'Streamline processes, eliminate waste, and boost organizational efficiency.',
  },
  {
    id: 'de', title: 'Digital Enterprise',
    icon: <Globe size={28} />,
    gradient: 'from-indigo-400 to-violet-400',
    glow: 'rgba(99,102,241,0.3)',
    bg: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
    hoverBorder: 'hover:border-indigo-500/40',
    hoverShadow: 'group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]',
    desc: 'Build future-ready digital ecosystems that scale with your ambitions.',
  },
  {
    id: 'fi', title: 'Fintech Innovation Lab',
    icon: <Landmark size={28} />,
    gradient: 'from-rose-400 to-pink-400',
    glow: 'rgba(244,63,94,0.3)',
    bg: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
    hoverBorder: 'hover:border-rose-500/40',
    hoverShadow: 'group-hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]',
    desc: 'Navigate financial transformation with cutting-edge fintech capabilities.',
  },
];

export function DomainExpertise() {
  return (
    <section id="accredian-edge" className="py-28 bg-[#030712] border-t border-white/5 overflow-hidden relative">

      {/* Background glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      {/* Dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Multi-speed parallax background layers */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes driftSlow   { 0%,100%{ transform:translate(0,0) scale(1); }   50%{ transform:translate(40px,-30px) scale(1.08); } }
        @keyframes driftMed    { 0%,100%{ transform:translate(0,0) scale(1); }   50%{ transform:translate(-35px,25px) scale(0.95); } }
        @keyframes driftFast   { 0%,100%{ transform:translate(0,0) scale(1); }   50%{ transform:translate(20px,35px) scale(1.06); } }
        @keyframes driftXSlow  { 0%,100%{ transform:translate(0,0) rotate(0deg); } 50%{ transform:translate(-25px,-20px) rotate(4deg); } }
      `}} />
      {/* Layer 1 — slowest, large blob, top-center */}
      <div className="absolute top-[5%] left-[25%] w-[600px] h-[400px] rounded-full bg-blue-600/20 blur-[100px] pointer-events-none mix-blend-screen"
        style={{ animation: 'driftXSlow 22s ease-in-out infinite' }} />
      {/* Layer 2 — medium speed, mid-left */}
      <div className="absolute top-[35%] left-[0%] w-[400px] h-[400px] rounded-full bg-purple-600/20 blur-[80px] pointer-events-none mix-blend-screen"
        style={{ animation: 'driftMed 16s ease-in-out infinite' }} />
      {/* Layer 3 — faster, bottom-right */}
      <div className="absolute bottom-[5%] right-[5%] w-[500px] h-[300px] rounded-full bg-indigo-500/20 blur-[100px] pointer-events-none mix-blend-screen"
        style={{ animation: 'driftFast 12s ease-in-out infinite' }} />
      {/* Layer 4 — slowest, top-right accent */}
      <div className="absolute top-[0%] right-[15%] w-[300px] h-[300px] rounded-full bg-cyan-500/15 blur-[70px] pointer-events-none mix-blend-screen"
        style={{ animation: 'driftSlow 20s ease-in-out infinite' }} />
      {/* Layer 5 — medium, bottom-center */}
      <div className="absolute bottom-[10%] left-[35%] w-[400px] h-[250px] rounded-full bg-violet-600/15 blur-[90px] pointer-events-none mix-blend-screen"
        style={{ animation: 'driftMed 14s ease-in-out infinite 3s' }} />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-sm font-medium text-purple-300 tracking-wide">What We Cover</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Domain Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Specialized Programs Designed to Fuel Innovation
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {DOMAINS.map((domain) => (
            <div
              key={domain.id}
              className={`group relative flex items-start gap-5 p-7 rounded-2xl bg-white/[0.03] border border-white/8 backdrop-blur-sm cursor-pointer transition-all duration-500 hover:-translate-y-1 ${domain.hoverBorder} ${domain.hoverShadow} hover:bg-white/[0.06]`}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r ${domain.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-full`} />

              {/* Icon */}
              <div
                className={`flex-shrink-0 w-14 h-14 rounded-xl border flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${domain.bg}`}
                style={{ boxShadow: `0 0 0 0 ${domain.glow}` }}
              >
                <div className="relative">
                  {domain.icon}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-[6px]"
                    style={{ background: domain.glow }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col pt-1">
                <span className={`font-bold text-base text-white mb-1.5 transition-all duration-300`}>
                  {domain.title}
                </span>
                <p className="text-sm text-gray-500 leading-snug group-hover:text-gray-400 transition-colors duration-300">
                  {domain.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
