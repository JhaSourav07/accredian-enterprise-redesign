import React from 'react';

// We use placeholder data here that fits the Enterprise Upskilling theme.
const TIMELINE_STEPS = [
  {
    id: '01',
    title: 'Skill Gap Analysis',
    description: 'We assess your team\'s current capabilities to identify strategic areas for growth.',
  },
  {
    id: '02',
    title: 'Custom Curriculum',
    description: 'Tailored learning paths designed to align directly with your specific business goals.',
  },
  {
    id: '03',
    title: 'Expert-Led Training',
    description: 'Interactive sessions led by top-tier practitioners from leading tech giants.',
  },
  {
    id: '04',
    title: 'Capstone Projects',
    description: 'Hands-on execution solving your actual enterprise data and AI challenges.',
  },
  {
    id: '05',
    title: 'Performance Tracking',
    description: 'Continuous monitoring of progress, completion rates, and ROI via our dashboard.',
  }
];

export function Timeline() {
  return (
    <section className="py-24 bg-surface/20 border-t border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            The <span className="text-accent">Accredian</span> Edge
          </h2>
          <p className="text-muted text-lg">
            Our proven end-to-end process for transforming your workforce at scale.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* THE LINE */}
          {/* Desktop: Horizontal Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />
          {/* Mobile: Vertical Line */}
          <div className="block md:hidden absolute left-6 top-0 w-0.5 h-full bg-border z-0" />

          {/* The Steps Grid */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between gap-12 md:gap-4">
            {TIMELINE_STEPS.map((step, index) => (
              <div 
                key={step.id} 
                className="group relative flex md:flex-col items-start md:items-center gap-6 md:gap-8 w-full md:w-1/5"
              >
                
                {/* Node (The Circle) */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-background border-2 border-border flex items-center justify-center text-sm font-bold text-muted group-hover:border-accent group-hover:text-accent group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 relative z-10">
                  {step.id}
                </div>

                {/* Content */}
                <div className="flex flex-col text-left md:text-center mt-1 md:mt-0 pt-2 md:pt-0">
                  <h4 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Alternating connection dot (Desktop only, aesthetic touch) */}
                <div className={`hidden md:block absolute top-[22px] w-2 h-2 rounded-full bg-border transition-colors group-hover:bg-accent ${index % 2 === 0 ? '-bottom-10' : '-top-10'}`} />

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}