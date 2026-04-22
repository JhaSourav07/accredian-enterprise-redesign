import React from 'react';
import { Target, BookOpen, Lightbulb, Rocket, TrendingUp } from 'lucide-react';

const TIMELINE_STEPS = [
  {
    id: '01',
    title: 'Skill Gap Analysis',
    description: 'We assess your team\'s current capabilities to identify strategic areas for growth.',
    icon: <Target size={28} />,
  },
  {
    id: '02',
    title: 'Custom Curriculum',
    description: 'Tailored learning paths designed to align directly with your specific business goals.',
    icon: <BookOpen size={28} />,
  },
  {
    id: '03',
    title: 'Expert-Led Training',
    description: 'Interactive sessions led by top-tier practitioners from leading tech giants.',
    icon: <Lightbulb size={28} />,
  },
  {
    id: '04',
    title: 'Capstone Projects',
    description: 'Hands-on execution solving your actual enterprise data and AI challenges.',
    icon: <Rocket size={28} />,
  },
  {
    id: '05',
    title: 'Performance Tracking',
    description: 'Continuous monitoring of progress, completion rates, and ROI via our dashboard.',
    icon: <TrendingUp size={28} />,
  }
];

export function Timeline() {
  return (
    <section className="py-24 bg-surface/20 border-t border-border overflow-hidden relative">
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
          <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-border -translate-y-1/2 z-0" />
          <div className="block md:hidden absolute left-[31px] top-0 w-1 h-full bg-border z-0" />

          {/* The Steps Grid */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between gap-12 md:gap-4">
            {TIMELINE_STEPS.map((step) => (
              <div 
                key={step.id} 
                className="group relative flex md:flex-col items-start md:items-center gap-6 md:gap-8 w-full md:w-1/5"
              >
                
                {/* Node (The Circle) */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center text-2xl shadow-lg shadow-accent/5 group-hover:border-accent group-hover:scale-110 transition-all duration-300 relative z-10">
                  {step.icon}
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

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}