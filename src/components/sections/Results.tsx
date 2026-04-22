import React from 'react';
import { Target, BarChart, Rocket } from 'lucide-react';

const RESULTS = [
  {
    id: 1,
    title: "Increase Productivity",
    description: "Equip your teams with the frameworks and tools to drastically cut down project turnaround time.",
    icon: <Target size={32} className="text-accent" />
  },
  {
    id: 2,
    title: "Data-Driven Decisions",
    description: "Shift organizational culture to rely on hard data rather than intuition, saving millions.",
    icon: <BarChart size={32} className="text-accent" />
  },
  {
    id: 3,
    title: "Accelerate Innovation",
    description: "Build internal capabilities to launch AI and tech products faster than the competition.",
    icon: <Rocket size={32} className="text-accent" />
  }
];

export function Results() {
  return (
    <section className="py-24 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            How We Deliver <span className="text-accent">Results That Matter</span>
          </h2>
          <p className="text-muted text-lg">
            A proven process for enterprise transformation.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESULTS.map((result) => (
            <div key={result.id} className="p-8 rounded-2xl bg-surface border border-border text-center hover:border-accent/50 transition-colors">
              <div className="w-16 h-16 mx-auto bg-surface/50 rounded-full flex items-center justify-center text-3xl shadow-sm mb-6 border border-border">
                {result.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{result.title}</h3>
              <p className="text-muted leading-relaxed">{result.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
