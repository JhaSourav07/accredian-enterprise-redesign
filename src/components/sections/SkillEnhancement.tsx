import React from 'react';
import { GraduationCap } from 'lucide-react';

export function SkillEnhancement() {
  return (
    <section className="py-24 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image Placeholder */}
          <div className="relative w-full aspect-square md:aspect-[4/5] bg-surface rounded-2xl overflow-hidden border border-border shadow-lg flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent" />
            <div className="text-center p-8 relative z-10">
              <div className="w-24 h-24 mx-auto bg-accent/20 rounded-full mb-4 flex items-center justify-center text-accent">
                 <GraduationCap size={48} />
              </div>
              <p className="text-primary font-medium">Team Training</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">
              Strategic <span className="text-accent">Skill Enhancement</span>
            </h2>

            <div className="space-y-10">
              
              {/* Item 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded bg-accent/10 text-accent flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Early Professionals</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Build foundational skills in data analysis and AI tools to accelerate career growth and increase early-stage productivity.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded bg-accent/10 text-accent flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Emerging Professionals</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Master advanced concepts and practical application to lead projects and drive data-driven decision making.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded bg-accent/10 text-accent flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Senior Professionals</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Develop strategic oversight and architectural understanding to manage AI/Data teams and enterprise transformations.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
