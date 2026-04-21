"use client";

import React, { useState } from 'react';
import { Button } from '../ui/Button';

// Enterprise-focused FAQ data
const FAQS = [
  {
    id: 1,
    question: "What is the typical duration of an enterprise program?",
    answer: "Programs generally range from 8 to 24 weeks depending on the curriculum depth and your team's availability. We customize the pacing to ensure it fits seamlessly into your operational schedule without disrupting daily workflows."
  },
  {
    id: 2,
    question: "Can the curriculum be customized for our specific tech stack?",
    answer: "Absolutely. During the 'Skill Gap Analysis' phase, we map our core modules directly to your existing infrastructure, whether your team utilizes AWS, Azure, GCP, or proprietary internal tools."
  },
  {
    id: 3,
    question: "How do you measure the ROI of the training?",
    answer: "We provide enterprise administrators with a comprehensive dashboard that tracks cohort completion rates, capstone project performance, and post-program skill application metrics."
  },
  {
    id: 4,
    question: "Is there support available after the program concludes?",
    answer: "Yes. All enterprise cohorts receive 90 days of post-program mentoring, quarterly curriculum updates, and perpetual access to our enterprise resource library."
  }
];

export function FAQ() {
  // We keep track of which accordion item is currently open. 
  // We start with ID 1 open by default so the user immediately sees how it works.
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    // If clicking the one that's already open, close it. Otherwise, open the new one.
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-background border-t border-border/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Context & CTA */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
            <p className="text-muted mb-8 leading-relaxed">
              Find answers to common questions about our enterprise upskilling programs, deployment, and technical requirements.
            </p>
            <div className="p-6 rounded-2xl bg-surface border border-border w-full">
              <h4 className="text-primary font-medium mb-2">Still have questions?</h4>
              <p className="text-sm text-muted mb-4">Our enterprise team is ready to help you map out your specific needs.</p>
              <Button variant="outline" className="w-full bg-white hover:bg-surface">Contact Support</Button>
            </div>
          </div>

          {/* Right Column: The Accordion List */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              
              return (
                <div 
                  key={faq.id} 
                  className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${
                    isOpen ? 'bg-white border-accent shadow-sm' : 'bg-white border-border hover:border-accent/50'
                  }`}
                >
                  {/* The Clickable Question Header */}
                  <button 
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className={`font-semibold transition-colors ${isOpen ? 'text-accent' : 'text-primary'}`}>
                      {faq.question}
                    </span>
                    
                    {/* Animated Plus/Minus Icon */}
                    <div className={`flex-shrink-0 ml-4 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-accent text-accent bg-accent/10' : 'border-border text-muted'}`}>
                      <svg 
                        className={`w-3 h-3 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                      >
                        {isOpen ? (
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" /> // Minus
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /> // Plus
                        )}
                      </svg>
                    </div>
                  </button>

                  {/* The Expandable Answer Content */}
                  {/* We use a combination of grid-template-rows and opacity for a CSS-only smooth height transition */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="p-6 pt-0 text-muted leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}