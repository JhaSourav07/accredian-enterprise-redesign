import React from 'react';

const RESULTS = [
  {
    id: 1,
    title: 'Tailored Solutions',
    description: 'Customized learning paths aligned perfectly with your organization\'s strategic objectives.',
    icon: '🎯'
  },
  {
    id: 2,
    title: 'Measurable ROI',
    description: 'Clear metrics and dashboards to track team progress, completion rates, and skill application.',
    icon: '📊'
  },
  {
    id: 3,
    title: 'Scalable Delivery',
    description: 'Enterprise-grade platform designed to support thousands of learners simultaneously.',
    icon: '🚀'
  }
];

export function Results() {
  return (
    <section className="py-24 bg-background border-t border-border">
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
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-3xl shadow-sm mb-6 border border-border">
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
