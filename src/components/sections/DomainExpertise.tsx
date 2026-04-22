import React from 'react';
import { Lightbulb, BarChart, Bot, TrendingUp, Target, Cloud, Lock, Code, Palette } from 'lucide-react';

const DOMAINS = [
  { id: 'pm', title: 'Product Management', icon: <Lightbulb /> },
  { id: 'ds', title: 'Data Science', icon: <BarChart /> },
  { id: 'ai', title: 'Artificial Intelligence', icon: <Bot /> },
  { id: 'ba', title: 'Business Analytics', icon: <TrendingUp /> },
  { id: 'dm', title: 'Digital Marketing', icon: <Target /> },
  { id: 'cc', title: 'Cloud Computing', icon: <Cloud /> },
  { id: 'cs', title: 'Cyber Security', icon: <Lock /> },
  { id: 'se', title: 'Software Engineering', icon: <Code /> },
  { id: 'ux', title: 'UI/UX Design', icon: <Palette /> },
];

export function DomainExpertise() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our <span className="text-accent">Domain Expertise</span>
          </h2>
          <p className="text-muted text-lg">
            Tailored to your industry
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {DOMAINS.map((domain) => (
            <div 
              key={domain.id} 
              className="flex items-center gap-4 p-6 rounded-xl border border-border bg-surface/30 shadow-sm hover:shadow-md hover:border-accent/50 transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-2xl group-hover:bg-accent/10 transition-colors">
                {domain.icon}
              </div>
              <span className="font-semibold text-primary group-hover:text-accent transition-colors">
                {domain.title}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
