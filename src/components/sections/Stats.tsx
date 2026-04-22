import React from 'react';
import { Users, PlayCircle, GraduationCap } from 'lucide-react';

const statsData = [
  { 
    id: 1, 
    value: "10K+", 
    label: "Professionals trained for exceptional career success",
    icon: <Users size={28} className="text-blue-400" />,
    gradient: "from-blue-400 to-indigo-400",
    glow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] hover:border-blue-500/30"
  },
  { 
    id: 2, 
    value: "200+", 
    label: "Sessions delivered with unmatched learning excellence",
    icon: <PlayCircle size={28} className="text-purple-400" />,
    gradient: "from-purple-400 to-pink-400",
    glow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] hover:border-purple-500/30"
  },
  { 
    id: 3, 
    value: "5K+", 
    label: "Active learners engaged in dynamic courses",
    icon: <GraduationCap size={28} className="text-indigo-400" />,
    gradient: "from-indigo-400 to-blue-400",
    glow: "hover:shadow-[0_0_40px_rgba(99,102,241,0.2)] hover:border-indigo-500/30"
  },
];

export function Stats() {
  return (
    <section id="stats" className="py-24 relative overflow-hidden bg-[#030712] border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none mix-blend-screen" />

      {/* Animated Network Graph Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes float1 { 0%, 100% { transform: translateY(0px) translateX(0px); } 50% { transform: translateY(-20px) translateX(10px); } }
          @keyframes float2 { 0%, 100% { transform: translateY(0px) translateX(0px); } 50% { transform: translateY(20px) translateX(-15px); } }
          @keyframes float3 { 0%, 100% { transform: translateY(0px) translateX(0px); } 50% { transform: translateY(-15px) translateX(-15px); } }
        `}} />
        <svg viewBox="0 0 1000 600" className="w-full h-full drop-shadow-[0_0_15px_rgba(99,102,241,0.4)]">
          
          {/* Constellation 1 */}
          <g style={{ animation: 'float1 12s ease-in-out infinite' }} stroke="rgba(99,102,241,0.3)" strokeWidth="1" fill="#818cf8">
            <line x1="150" y1="150" x2="250" y2="100" />
            <line x1="250" y1="100" x2="300" y2="200" />
            <line x1="300" y1="200" x2="150" y2="150" />
            <circle cx="150" cy="150" r="4" className="animate-pulse" />
            <circle cx="250" cy="100" r="3" />
            <circle cx="300" cy="200" r="5" className="animate-pulse" />
          </g>

          {/* Constellation 2 */}
          <g style={{ animation: 'float2 15s ease-in-out infinite' }} stroke="rgba(168,85,247,0.3)" strokeWidth="1" fill="#c084fc">
            <line x1="750" y1="200" x2="850" y2="150" />
            <line x1="850" y1="150" x2="900" y2="300" />
            <line x1="900" y1="300" x2="700" y2="350" />
            <line x1="700" y1="350" x2="750" y2="200" />
            <line x1="750" y1="200" x2="900" y2="300" />
            <circle cx="750" cy="200" r="4" />
            <circle cx="850" cy="150" r="5" className="animate-pulse" />
            <circle cx="900" cy="300" r="3" />
            <circle cx="700" cy="350" r="4" className="animate-pulse" />
          </g>

          {/* Constellation 3 */}
          <g style={{ animation: 'float3 18s ease-in-out infinite' }} stroke="rgba(59,130,246,0.3)" strokeWidth="1" fill="#60a5fa">
            <line x1="400" y1="450" x2="550" y2="400" />
            <line x1="550" y1="400" x2="600" y2="500" />
            <line x1="600" y1="500" x2="450" y2="550" />
            <line x1="450" y1="550" x2="400" y2="450" />
            <circle cx="400" cy="450" r="5" className="animate-pulse" />
            <circle cx="550" cy="400" r="3" />
            <circle cx="600" cy="500" r="4" className="animate-pulse" />
            <circle cx="450" cy="550" r="3" />
          </g>
          
          {/* Floating standalone particles */}
          <circle cx="500" cy="200" r="2" fill="#818cf8" style={{ animation: 'float2 10s ease-in-out infinite' }} />
          <circle cx="200" cy="400" r="2" fill="#c084fc" style={{ animation: 'float3 14s ease-in-out infinite' }} />
          <circle cx="800" cy="500" r="3" fill="#60a5fa" style={{ animation: 'float1 16s ease-in-out infinite' }} />

        </svg>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-sm">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Track Record</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
            The Numbers Behind Our Success
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {statsData.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`flex flex-col items-center text-center p-10 lg:p-14 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-3 group ${stat.glow}`}
            >
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-inner">
                {stat.icon}
              </div>
              <span className={`text-6xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} drop-shadow-sm`}>
                {stat.value}
              </span>
              <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-[280px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}