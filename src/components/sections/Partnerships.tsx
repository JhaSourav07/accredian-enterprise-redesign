import React from 'react';

// Updated with the exact partners from the Accredian reference image.
// We use typography that roughly matches the brand identity of each company 
// while keeping it clean and dependency-free.
const PARTNERS = [
  { 
    id: 'reliance',
    element: (
      <div className="flex flex-col items-center justify-center leading-none">
        <span className="font-serif text-2xl mb-1">Reliance</span>
        <span className="font-serif text-[10px] tracking-widest uppercase">Industries Limited</span>
      </div>
    )
  },
  { 
    id: 'hcl',
    element: <span className="font-black italic text-3xl tracking-widest">HCL</span> 
  },
  { 
    id: 'ibm',
    element: <span className="font-black text-4xl tracking-tighter">IBM</span> 
  },
  { 
    id: 'crif',
    element: (
      <div className="flex flex-col items-center justify-center leading-none">
        <span className="font-black italic text-3xl tracking-wider">CRIF</span>
        <span className="text-[8px] font-bold italic tracking-widest mt-1">Together to the next level</span>
      </div>
    )
  },
  { 
    id: 'adp',
    element: <span className="font-black text-4xl tracking-tighter">ADP</span> 
  },
  { 
    id: 'bayer',
    element: (
      <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-current">
        <span className="font-bold text-lg tracking-widest">BAYER</span>
      </div>
    )
  },
];

export function Partnerships() {
  return (
    <section className="py-16 bg-background border-t border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <p className="text-center text-sm font-semibold text-accent tracking-widest uppercase mb-10">
          Our Proven Partnerships
        </p>

        {/* The Marquee Container */}
        <div 
          className="relative flex overflow-hidden w-full"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          {/* The Animated Track */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            
            {/* First Set of Logos */}
            <div className="flex items-center justify-around min-w-full gap-16 md:gap-24 px-8">
              {PARTNERS.map((partner) => (
                <div 
                  key={`set1-${partner.id}`} 
                  className="text-muted opacity-40 hover:opacity-100 hover:text-primary hover:scale-110 transition-all duration-300 cursor-default whitespace-nowrap flex items-center justify-center"
                >
                  {partner.element}
                </div>
              ))}
            </div>

            {/* Second Set of Logos (Identical duplicate for the seamless loop) */}
            <div className="flex items-center justify-around min-w-full gap-16 md:gap-24 px-8" aria-hidden="true">
              {PARTNERS.map((partner) => (
                <div 
                  key={`set2-${partner.id}`} 
                  className="text-muted opacity-40 hover:opacity-100 hover:text-primary hover:scale-110 transition-all duration-300 cursor-default whitespace-nowrap flex items-center justify-center"
                >
                  {partner.element}
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}