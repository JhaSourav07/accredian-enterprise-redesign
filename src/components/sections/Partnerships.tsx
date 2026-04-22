import React from 'react';

// Updated with the exact partners from the Accredian reference image.
// We use typography that roughly matches the brand identity of each company 
// while keeping it clean and dependency-free.
const PARTNERS = [
  { 
    id: 'reliance',
    element: (
      <div className="flex flex-col items-center justify-center leading-none">
        <span className="font-serif text-3xl mb-1">Reliance</span>
        <span className="font-serif text-[10px] tracking-widest uppercase text-gray-500 group-hover:text-gray-300 transition-colors">Industries Limited</span>
      </div>
    )
  },
  { 
    id: 'hcl',
    element: <span className="font-black italic text-4xl tracking-widest">HCL</span> 
  },
  { 
    id: 'ibm',
    element: <span className="font-black text-5xl tracking-tighter">IBM</span> 
  },
  { 
    id: 'crif',
    element: (
      <div className="flex flex-col items-center justify-center leading-none">
        <span className="font-black italic text-4xl tracking-wider">CRIF</span>
        <span className="text-[8px] font-bold italic tracking-widest mt-1 text-gray-500 group-hover:text-gray-300 transition-colors">Together to the next level</span>
      </div>
    )
  },
  { 
    id: 'adp',
    element: <span className="font-black text-5xl tracking-tighter">ADP</span> 
  },
  { 
    id: 'bayer',
    element: (
      <div className="flex items-center justify-center w-16 h-16 rounded-full border-[3px] border-current">
        <span className="font-bold text-lg tracking-widest">BAYER</span>
      </div>
    )
  },
];

export function Partnerships() {
  return (
    <section id="clients" className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-sm">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Empowering the world's most innovative enterprises.
          </p>
        </div>

        {/* The Marquee Container */}
        <div 
          className="relative flex overflow-hidden w-full py-10"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          {/* The Animated Track */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            
            {/* First Set of Logos */}
            <div className="flex items-center justify-around min-w-full gap-20 md:gap-32 px-10">
              {PARTNERS.map((partner) => (
                <div 
                  key={`set1-${partner.id}`} 
                  className="group relative text-gray-500 opacity-50 hover:opacity-100 hover:text-white hover:scale-110 transition-all duration-500 cursor-default whitespace-nowrap flex items-center justify-center"
                >
                  {/* Soft Spotlight Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(99,102,241,0.25)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 blur-[8px] transition-opacity duration-500 pointer-events-none mix-blend-screen" />
                  
                  {/* Logo Element */}
                  <div className="relative z-10 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-all duration-500">
                    {partner.element}
                  </div>
                </div>
              ))}
            </div>

            {/* Second Set of Logos (Identical duplicate for the seamless loop) */}
            <div className="flex items-center justify-around min-w-full gap-20 md:gap-32 px-10" aria-hidden="true">
              {PARTNERS.map((partner) => (
                <div 
                  key={`set2-${partner.id}`} 
                  className="group relative text-gray-500 opacity-50 hover:opacity-100 hover:text-white hover:scale-110 transition-all duration-500 cursor-default whitespace-nowrap flex items-center justify-center"
                >
                  {/* Soft Spotlight Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(99,102,241,0.25)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 blur-[8px] transition-opacity duration-500 pointer-events-none mix-blend-screen" />
                  
                  {/* Logo Element */}
                  <div className="relative z-10 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-all duration-500">
                    {partner.element}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}