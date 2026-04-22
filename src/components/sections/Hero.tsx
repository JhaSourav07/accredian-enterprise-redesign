"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { Sparkles, Users, BarChart2, Award, ArrowRight, PlayCircle, TrendingUp } from 'lucide-react';
import { useLeadModal } from '@/context/LeadModalContext';

export function Hero() {
  const { open: openLead } = useLeadModal();
  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-[#030712]">
      {/* 1. BACKGROUND: Layered Gradients, Glows & Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Very low opacity grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Soft glowing abstract gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
        
        {/* Center radial glow behind hero content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-purple-900/5 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center z-10 pt-6 md:pt-0">
        
        {/* LEFT CONTENT (Spans 7 columns) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10 shadow-[0_0_15px_rgba(59,130,246,0.1)] backdrop-blur-md">
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-xs md:text-sm font-medium text-blue-100 tracking-wide">Enterprise Learning that Drives Real Impact</span>
          </div>

          {/* Headline - Tighter line height, gradient keywords */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6rem] font-extrabold tracking-tight text-white leading-[1.05] mb-6 md:mb-8 drop-shadow-sm">
            Next-Gen <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Expertise</span> For <br />
            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Enterprise</span>
          </h1>

          {/* Supporting Paragraph - Better contrast */}
          <p className="text-lg md:text-xl text-gray-300 mb-14 max-w-2xl leading-relaxed font-light">
            Empower your teams with future-ready skills, measurable outcomes, and a learning partner trusted by industry leaders.
          </p>

          {/* Feature Highlights Grid - Cleaned up spacing and hover */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-14 w-full max-w-3xl">
            {/* Feature 1 */}
            <div className="flex gap-5 items-start group">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-300 shadow-lg">
                <Users size={20} className="text-blue-400" />
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-gray-100 font-semibold text-sm mb-1.5 group-hover:text-blue-300 transition-colors">Tailored Solutions</span>
                <span className="text-gray-400 text-xs leading-snug">Built around your<br/>business goals</span>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex gap-5 items-start group">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all duration-300 shadow-lg">
                <BarChart2 size={20} className="text-indigo-400" />
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-gray-100 font-semibold text-sm mb-1.5 group-hover:text-indigo-300 transition-colors">Industry Insights</span>
                <span className="text-gray-400 text-xs leading-snug">Stay ahead with<br/>expert perspectives</span>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex gap-5 items-start group">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:border-purple-500/30 transition-all duration-300 shadow-lg">
                <Award size={20} className="text-purple-400" />
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-gray-100 font-semibold text-sm mb-1.5 group-hover:text-purple-300 transition-colors">Expert Guidance</span>
                <span className="text-gray-400 text-xs leading-snug">Learn from practitioners<br/>who've led change</span>
              </div>
            </div>
          </div>

          {/* CTAs - Expensive feel */}
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Button 
              onClick={openLead}
              className="w-full sm:w-auto rounded-xl px-10 py-7 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 border-none flex items-center justify-center gap-3 text-white font-semibold text-lg shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_40px_rgba(79,70,229,0.5)] hover:scale-[1.02] transition-all duration-300">
              Enquire Now <ArrowRight size={22} />
            </Button>
            <Button variant="outline" className="w-full sm:w-auto rounded-xl px-10 py-7 border-white/20 text-gray-200 bg-white/5 hover:bg-white/10 backdrop-blur-md flex items-center justify-center gap-3 font-semibold text-lg transition-all duration-300 hover:border-white/30">
              Explore Solutions <PlayCircle size={22} />
            </Button>
          </div>
        </div>

        {/* RIGHT CONTENT - Visual & Stat Cards (Spans 5 columns) */}
        <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[480px] md:h-[560px] lg:h-[800px] mt-8 lg:mt-0 flex items-center justify-center animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
          
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes drawGraph {
              0% { stroke-dashoffset: 1500; }
              100% { stroke-dashoffset: 0; }
            }
            .graph-line-1 {
              stroke-dasharray: 1500;
              animation: drawGraph 6s ease-in-out infinite alternate;
            }
            .graph-line-2 {
              stroke-dasharray: 1500;
              animation: drawGraph 8s ease-in-out infinite alternate-reverse;
            }
          `}} />

          {/* Gradient glow behind people image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/20 rounded-full blur-[100px] z-0" />
          
          {/* Animated Graph Background */}
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-60">
            <svg viewBox="0 0 800 600" className="w-full h-full text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
              <defs>
                <linearGradient id="graphGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="graphGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <path 
                d="M -50 500 Q 150 500, 300 350 T 600 200 T 850 100" 
                fill="none" 
                stroke="url(#graphGradient)" 
                strokeWidth="8" 
                strokeLinecap="round" 
                className="graph-line-1"
              />
              <path 
                d="M -50 550 Q 200 550, 350 400 T 650 250 T 850 150" 
                fill="none" 
                stroke="url(#graphGradient2)" 
                strokeWidth="5" 
                strokeLinecap="round" 
                className="graph-line-2"
                opacity="0.7"
              />
              
              {/* Nodes/Dots on the graph */}
              <circle cx="300" cy="350" r="8" fill="#8b5cf6" className="animate-pulse" style={{ animationDelay: '0s' }} />
              <circle cx="600" cy="200" r="10" fill="#3b82f6" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
              <circle cx="850" cy="100" r="12" fill="#a855f7" className="animate-pulse" style={{ animationDelay: '1s' }} />
            </svg>
          </div>

          {/* Main Visual Image - Stable (removed bounce to prevent clipping) */}
          <div className="absolute bottom-8 lg:bottom-24 w-full h-[95%] z-10">
             <Image 
               src="/hero-professionals.png" 
               alt="Professional Team" 
               fill
               className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
               priority
             />
             {/* Soft blur shadow beneath image to blend edges */}
             <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#030712] to-transparent z-20 pointer-events-none" />
          </div>

          {/* Floating Stat Card 1 (Top Left) - Premium Glassmorphism */}
          <div className="absolute left-2 lg:-left-12 top-16 sm:top-24 lg:top-32 z-30 animate-[bounce_6s_infinite] hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(59,130,246,0.2)] hover:border-blue-500/30 transition-all min-w-[130px] sm:min-w-[170px] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-3 text-blue-400 group-hover:scale-110 transition-transform">
                <Users size={16} strokeWidth={2} />
              </div>
              <p className="text-2xl sm:text-4xl font-extrabold text-white mb-1 drop-shadow-sm">1500+</p>
              <p className="text-xs sm:text-sm text-gray-400 font-medium leading-snug">Enterprises<br/>Trust Us</p>
            </div>
          </div>

          {/* Floating Stat Card 2 (Top Right) - Premium Glassmorphism */}
          <div className="absolute right-2 lg:-right-24 xl:-right-32 top-36 sm:top-44 lg:top-52 z-30 animate-[bounce_7s_infinite] [animation-delay:1s] hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(99,102,241,0.2)] hover:border-indigo-500/30 transition-all min-w-[130px] sm:min-w-[170px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-indigo-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-3 text-indigo-400 group-hover:scale-110 transition-transform">
                <TrendingUp size={16} strokeWidth={2} />
              </div>
              <p className="text-2xl sm:text-4xl font-extrabold text-white mb-1 drop-shadow-sm">95%</p>
              <p className="text-xs sm:text-sm text-gray-400 font-medium leading-snug">Learning Impact<br/>Achieved</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}