import React from 'react';

const statsData = [
  { id: 1, value: "10K+", label: "Professionals Upskilled" },
  { id: 2, value: "10+", label: "Years of Experience" },
  { id: 3, value: "10+", label: "Enterprise Partners" },
  { id: 4, value: "10+", label: "Programs Offered" },
];

export function Stats() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our <span className="text-accent">Track Record</span>
          </h2>
          <p className="text-muted text-lg">
            The impact we have delivered so far
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center relative before:absolute before:top-1/2 before:left-0 before:w-full before:h-px before:bg-border before:-z-10 hidden md:grid">
          {statsData.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center bg-background px-4">
              <div className="w-4 h-4 bg-accent rounded-full mb-4 ring-4 ring-surface" />
              <span className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        
        {/* Mobile stats (no line) */}
        <div className="grid grid-cols-2 gap-8 text-center md:hidden">
          {statsData.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              <span className="text-3xl font-extrabold text-primary mb-2">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}