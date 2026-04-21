import React from 'react';
import { Button } from '../ui/Button';

// 1. We define our data outside the component so it doesn't re-create on every render.
// In a real app, this might come from a CMS or API.
const programs = [
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    description: 'Master data manipulation, predictive modeling, and advanced analytics to drive strategic business decisions.',
    icon: '📊', // Using emojis for simplicity right now, but you'd use SVGs in production
  },
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence',
    description: 'Build and deploy scalable machine learning models and generative AI solutions for enterprise applications.',
    icon: '🤖',
  },
  {
    id: 'product-mgmt',
    title: 'Product Management',
    description: 'Learn the complete product lifecycle, from user research and agile execution to go-to-market strategy.',
    icon: '🚀',
  },
];

export function Features() {
  return (
    // We add an id="programs" so our Navbar links can scroll smoothly down to this section
    <section id="programs" className="py-24 relative border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Curriculum built for the <span className="text-accent">future</span>
          </h2>
          <p className="text-muted text-lg">
            Our enterprise programs are designed by industry experts to bridge the gap between theoretical knowledge and practical execution.
          </p>
        </div>

        {/* Responsive CSS Grid for the Cards */}
        {/* grid-cols-1 on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program) => (
            // The Card UI
            // bg-surface/50 gives it a slightly transparent look. group allows us to trigger effects on children when hovering the parent.
            <div 
              key={program.id} 
              className="group flex flex-col p-8 rounded-2xl bg-surface/30 border border-border hover:border-accent/50 hover:bg-surface/60 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {program.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-primary mb-3">
                {program.title}
              </h3>
              <p className="text-muted leading-relaxed mb-8 flex-grow">
                {program.description}
              </p>
              
              {/* "Learn More" Link simulating a ghost button */}
              <div className="mt-auto pt-4 border-t border-border/50 flex items-center text-sm font-medium text-accent group-hover:text-primary transition-colors cursor-pointer">
                View Syllabus 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Action under the grid */}
        <div className="mt-16 text-center">
          <Button variant="outline">View All Enterprise Solutions</Button>
        </div>

      </div>
    </section>
  );
}