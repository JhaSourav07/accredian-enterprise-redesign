import React from 'react';

// Hardcoded stats. In a real app, these might come from a database.
const statsData = [
  { id: 1, value: "10,000+", label: "Professionals Upskilled" },
  { id: 2, value: "95%", label: "Completion Rate" },
  { id: 3, value: "500+", label: "Enterprise Partners" },
  { id: 4, value: "3x", label: "Average ROI" },
];

export function Stats() {
  return (
    // We use a very subtle bg-surface/20 just to separate it slightly from the Features section
    <section className="py-20 border-t border-border/50 bg-surface/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Half: The Numbers */}
        {/* grid-cols-2 on mobile so they don't get too squished, grid-cols-4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {statsData.map((stat) => (
            <div key={stat.id} className="flex flex-col space-y-2">
              <span className="text-4xl md:text-5xl font-extrabold text-primary drop-shadow-sm">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm font-medium text-muted uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Half: Trust Badges (Logos) */}
        <div className="mt-20 pt-10 border-t border-border/30">
          <p className="text-center text-sm font-medium text-muted mb-8 tracking-widest uppercase">
            Trusted by industry leaders
          </p>
          
          {/* We use text to simulate company logos for this build.
            The trick here is 'opacity-50 grayscale hover:opacity-100 hover:grayscale-0'.
            This makes all logos look uniform and faded, but they pop into full focus when the user interacts!
          */}
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 text-muted transition-all duration-500">
            <span className="text-2xl font-bold font-serif opacity-50 hover:opacity-100 transition-opacity cursor-default">Acme Corp</span>
            <span className="text-2xl font-black tracking-tighter opacity-50 hover:opacity-100 transition-opacity cursor-default">GLOBEX</span>
            <span className="text-2xl font-semibold italic opacity-50 hover:opacity-100 transition-opacity cursor-default">Stark Ind.</span>
            <span className="text-2xl font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity cursor-default">Initech</span>
            <span className="text-2xl font-medium opacity-50 hover:opacity-100 transition-opacity cursor-default hidden md:block">Soylent</span>
          </div>
        </div>

      </div>
    </section>
  );
}