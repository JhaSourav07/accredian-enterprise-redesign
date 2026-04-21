import React from 'react';

// Hardcoded testimonial data.
const testimonials = [
  {
    id: 1,
    quote: "The AI integration program completely transformed how our engineering team approaches problem-solving. The ROI was visible within the first quarter.",
    name: "Sarah Jenkins",
    role: "VP of Engineering, TechFlow",
    avatar: "SJ" // Using initials as a placeholder for actual image URLs
  },
  {
    id: 2,
    quote: "Finding an enterprise upskilling platform that actually understands the complexities of scalable data infrastructure was tough until we found Accredian.",
    name: "Marcus Thorne",
    role: "Lead Data Scientist, GlobalCorp",
    avatar: "MT"
  },
  {
    id: 3,
    quote: "The product management track provided our junior PMs with the exact frameworks they needed to lead cross-functional teams effectively.",
    name: "Elena Rodriguez",
    role: "Director of Product, InnovateInc",
    avatar: "ER"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 relative bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Testimonials from <span className="text-accent">Our Partners</span>
          </h2>
          <p className="text-muted text-lg">
            See how top-tier organizations are leveraging our programs to build future-ready teams.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="flex flex-col p-8 rounded-2xl bg-white border border-border hover:border-accent/50 shadow-sm transition-colors"
            >
              {/* Quote Icon (Using a simple SVG path for a modern look) */}
              <div className="mb-6 text-accent/50">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              
              {/* The Quote */}
              <p className="text-primary leading-relaxed flex-grow mb-8 italic">
                &quot;{testimonial.quote}&quot;
              </p>
              
              {/* User Profile */}
              <div className="flex items-center gap-4 mt-auto">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center text-accent font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-primary font-medium">{testimonial.name}</h4>
                  <p className="text-muted text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}