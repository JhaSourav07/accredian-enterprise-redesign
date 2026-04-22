"use client";

import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, CheckCircle2, Loader2, Building, User, Mail, Phone, Users, Sparkles } from 'lucide-react';
import { useLeadModal } from '@/context/LeadModalContext';

const INTERESTS = [
  'Gen-AI Mastery',
  'Data Science & Analytics',
  'Product Management',
  'Leadership Elevation',
  'Tech & Data Insights',
  'Operations Excellence',
  'Other',
];

const TEAM_SIZES = ['1–10', '11–50', '51–200', '201–500', '500+'];

type Status = 'idle' | 'loading' | 'success' | 'error';

export function LeadCaptureModal() {
  const { isOpen, close } = useLeadModal();
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const overlayRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', teamSize: '', interest: '',
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => { setForm({ name: '', email: '', phone: '', company: '', teamSize: '', interest: '' }); setStatus('idle'); setMessage(''); }, 400);
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) { setStatus('success'); setMessage(data.message); }
      else { setStatus('error'); setMessage(data.message); }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === overlayRef.current) close(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#030712]/80 backdrop-blur-md" />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#080d20] shadow-[0_0_80px_-10px_rgba(79,70,229,0.4)] animate-in fade-in slide-in-from-bottom-4 duration-300">

        {/* Backgrounds (overflow-hidden to prevent absolute blobs from causing scrollbars) */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl pointer-events-none bg-gradient-to-br from-[#080d20] to-[#0a0618]">
          {/* Top gradient line */}
          <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent rounded-full" />
          {/* Inner dot grid */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:28px_28px]" />
          {/* Ambient glow blobs */}
          <div className="absolute top-[-20%] left-[-10%] w-64 h-64 rounded-full bg-blue-600/10 blur-[80px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 rounded-full bg-violet-600/10 blur-[80px]" />
        </div>

        <div className="relative z-10 p-6 sm:p-8 md:p-10">

          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
            aria-label="Close"
          >
            <X size={15} />
          </button>

          {/* ── SUCCESS STATE ── */}
          {status === 'success' ? (
            <div className="flex flex-col items-center text-center py-10 gap-6">
              <div className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                <CheckCircle2 size={40} className="text-emerald-400" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white mb-3">You're all set! 🎉</h3>
                <p className="text-gray-400 leading-relaxed max-w-sm">{message}</p>
              </div>
              <button
                onClick={close}
                className="mt-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm hover:scale-[1.03] transition-all duration-300"
                style={{ boxShadow: '0 0 20px -4px rgba(79,70,229,0.5)' }}
              >
                Done
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5">
                  <Sparkles size={12} className="text-indigo-400" />
                  <span className="text-xs font-medium text-indigo-300 tracking-wide">Enterprise Enquiry</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
                  Let's Build Your{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                    Learning Strategy
                  </span>
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Fill in your details and our enterprise team will reach out within 24 hours.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                {/* Name + Company row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    <input
                      name="name" required value={form.name} onChange={handleChange}
                      placeholder="Full Name *"
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all duration-200"
                    />
                  </div>
                  <div className="relative">
                    <Building size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    <input
                      name="company" required value={form.company} onChange={handleChange}
                      placeholder="Company Name *"
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Email + Phone row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    <input
                      type="email" name="email" required value={form.email} onChange={handleChange}
                      placeholder="Work Email *"
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all duration-200"
                    />
                  </div>
                  <div className="relative">
                    <Phone size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    <input
                      type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Team Size + Interest row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Users size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    <select
                      name="teamSize" value={form.teamSize} onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all duration-200 appearance-none cursor-pointer text-gray-400"
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="" disabled className="bg-[#080d20]">Team Size</option>
                      {TEAM_SIZES.map(s => <option key={s} value={s} className="bg-[#080d20] text-white">{s} employees</option>)}
                    </select>
                  </div>
                  <div className="relative">
                    <Sparkles size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    <select
                      name="interest" value={form.interest} onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all duration-200 appearance-none cursor-pointer text-gray-400"
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="" disabled className="bg-[#080d20]">Area of Interest</option>
                      {INTERESTS.map(i => <option key={i} value={i} className="bg-[#080d20] text-white">{i}</option>)}
                    </select>
                  </div>
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">{message}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group mt-2 w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ boxShadow: '0 0 24px -4px rgba(79,70,229,0.5)' }}
                >
                  {status === 'loading' ? (
                    <><Loader2 size={16} className="animate-spin" /> Submitting...</>
                  ) : (
                    <>Submit Enquiry <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" /></>
                  )}
                </button>

                <p className="text-center text-xs text-gray-600 mt-1">
                  By submitting, you agree to our Privacy Policy. No spam, ever.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
