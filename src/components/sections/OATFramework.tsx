import React from 'react';

export function OATFramework() {
  return (
    <section className="py-24 bg-surface/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            The <span className="text-accent">OAT Framework</span>
          </h2>
          <p className="text-muted text-lg">
            Our methodology for practical, application-based learning.
          </p>
        </div>

        {/* Framework Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 relative max-w-4xl mx-auto">
          
          {/* Concept */}
          <div className="flex flex-col items-center relative z-10 bg-white p-8 rounded-full w-48 h-48 justify-center border-4 border-accent/20 shadow-lg">
            <span className="text-3xl mb-2">🧠</span>
            <span className="font-bold text-primary text-lg">Concept</span>
            <span className="text-xs text-muted text-center mt-1">Theoretical foundation</span>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex flex-col items-center justify-center text-accent/50 w-12">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>

          {/* Application */}
          <div className="flex flex-col items-center relative z-10 bg-white p-8 rounded-full w-48 h-48 justify-center border-4 border-accent shadow-lg scale-110">
            <span className="text-3xl mb-2">⚙️</span>
            <span className="font-bold text-primary text-lg">Application</span>
            <span className="text-xs text-muted text-center mt-1">Real-world practice</span>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex flex-col items-center justify-center text-accent/50 w-12">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>

          {/* Tools */}
          <div className="flex flex-col items-center relative z-10 bg-white p-8 rounded-full w-48 h-48 justify-center border-4 border-accent/20 shadow-lg">
            <span className="text-3xl mb-2">🔨</span>
            <span className="font-bold text-primary text-lg">Tools</span>
            <span className="text-xs text-muted text-center mt-1">Industry tech stack</span>
          </div>

        </div>

      </div>
    </section>
  );
}
