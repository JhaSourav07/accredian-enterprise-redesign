"use client";

import React, { useState } from 'react';
import { Laptop, Building, Briefcase, TrendingUp } from 'lucide-react';

const TABS = [
  "Program Specific",
  "Industry Specific",
  "Role Specific",
  "Level Specific"
];

const CARDS = [
  { id: 1, title: 'Program Specific', desc: 'Curriculum tailored for specific programs like AI, Data Science, etc.', emoji: <Laptop size={48} className="text-accent" /> },
  { id: 2, title: 'Industry Specific', desc: 'Specialized content for healthcare, finance, retail, and more.', emoji: <Building size={48} className="text-accent" /> },
  { id: 3, title: 'Role Specific', desc: 'Focused training for Product Managers, Engineers, Analysts.', emoji: <Briefcase size={48} className="text-accent" /> },
  { id: 4, title: 'Level Specific', desc: 'From entry-level basics to advanced executive leadership.', emoji: <TrendingUp size={48} className="text-accent" /> },
];

export function CourseSegmentation() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <section className="py-24 bg-surface/20 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            <span className="text-accent">Tailored</span> Course Segmentation
          </h2>
          <p className="text-muted text-lg">
            Choose the right path for your workforce needs
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab 
                  ? 'bg-accent text-white shadow-md' 
                  : 'bg-surface text-muted hover:text-primary hover:bg-surface/80 border border-border'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((card) => (
            <div key={card.id} className="bg-surface/30 rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow group">
              <div className="h-40 bg-gradient-to-br from-accent/10 to-surface flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                {card.emoji}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
