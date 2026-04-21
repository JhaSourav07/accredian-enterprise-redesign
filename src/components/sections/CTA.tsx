import React from 'react';
import { Button } from '../ui/Button';

export function CTA() {
  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="p-8 md:p-12 rounded-2xl border border-accent bg-accent/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
             <div className="w-16 h-16 shrink-0 bg-surface rounded-full flex items-center justify-center text-accent text-3xl shadow-sm border border-accent/20">
               🎧
             </div>
             <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  Want to Learn More About Our Training Solutions?
                </h2>
                <p className="text-muted">
                  Let us build a customized training path for your team.
                </p>
             </div>
          </div>

          <Button variant="primary" size="lg" className="whitespace-nowrap px-8 rounded bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20">
            Schedule a Call <span className="ml-2">→</span>
          </Button>

        </div>
      </div>
    </section>
  );
}