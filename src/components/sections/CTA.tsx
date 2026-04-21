import React from 'react';
import { Button } from '../ui/Button';

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient - A subtle blue wash behind the CTA box */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-background pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto px-6">
        {/* The CTA Card */}
        <div className="p-10 md:p-16 rounded-3xl bg-surface/40 border border-border flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left shadow-2xl shadow-accent/5 backdrop-blur-sm">
          
          {/* Text Content */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Ready to transform your workforce?
            </h2>
            <p className="text-muted text-lg">
              Join hundreds of enterprise companies upskilling their teams with Accredian's industry-leading programs.
            </p>
          </div>

          {/* Input & Button */}
          <div className="w-full md:w-auto flex flex-col gap-3 sm:flex-row">
            <input 
              type="email" 
              placeholder="Enter your work email" 
              className="h-11 px-4 rounded-lg bg-background border border-border text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent w-full sm:w-64 transition-all"
            />
            <Button variant="primary" className="whitespace-nowrap">
              Get Started
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}