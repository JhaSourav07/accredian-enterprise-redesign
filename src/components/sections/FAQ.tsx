"use client";

import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react';

const FAQS = [
  {
    id: 1,
    question: "What is the typical duration of an enterprise program?",
    answer: "Programs generally range from 8 to 24 weeks depending on curriculum depth and your team's availability. We customize the pacing to fit seamlessly into your operational schedule without disrupting daily workflows.",
  },
  {
    id: 2,
    question: "Can the curriculum be customized for our specific tech stack?",
    answer: "Absolutely. During the Skill Gap Analysis phase, we map our core modules directly to your existing infrastructure — whether your team uses AWS, Azure, GCP, or proprietary internal tools.",
  },
  {
    id: 3,
    question: "How do you measure the ROI of the training?",
    answer: "We provide enterprise administrators with a comprehensive dashboard tracking cohort completion rates, capstone project performance, and post-program skill application metrics.",
  },
  {
    id: 4,
    question: "Is there support available after the program concludes?",
    answer: "Yes. All enterprise cohorts receive 90 days of post-program mentoring, quarterly curriculum updates, and perpetual access to our enterprise resource library.",
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section id="faqs" className="py-28 relative overflow-hidden border-t border-white/5">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#06091c] to-[#080416] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />
      <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[rgba(49,46,129,0.18)] blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[rgba(29,78,216,0.14)] blur-[140px] pointer-events-none mix-blend-screen" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_40%,rgba(3,7,18,0.5)_100%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-sm font-medium text-blue-300 tracking-wide">Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Questions
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed">
            Everything you need to know about our enterprise upskilling programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left — context + CTA card */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-8">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400 mb-5">
                <MessageCircle size={22} />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">Still have questions?</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Our enterprise team is ready to help you map out your specific needs and build a customized learning plan.
              </p>
              <button className="group w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold transition-all duration-300 hover:scale-[1.02]"
                style={{ boxShadow: '0 0 20px -4px rgba(79,70,229,0.5)' }}>
                Contact Enterprise Team
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: '200+', label: 'Enterprises Served' },
                { value: '94%', label: 'Satisfaction Rate' },
                { value: '90 days', label: 'Post Support' },
                { value: '24/7', label: 'Help Available' },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-white/8 bg-white/[0.03] p-4 text-center">
                  <p className="text-white font-extrabold text-xl">{s.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white/[0.06] border-indigo-500/25 shadow-[0_0_30px_-8px_rgba(99,102,241,0.3)]'
                      : 'bg-white/[0.025] border-white/8 hover:bg-white/[0.04] hover:border-white/15'
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none gap-4"
                  >
                    <span className={`font-semibold text-sm sm:text-base transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-300'}`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'border-indigo-400 text-indigo-400 bg-indigo-500/15'
                        : 'border-white/15 text-gray-500'
                    }`}>
                      {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                    </div>
                  </button>

                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
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