"use client"; // This tells Next.js to render this component with client-side JavaScript

import React, { useState } from 'react';
import { Button } from '../ui/Button';

export function CTA() {
  // State management for our form
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the page from reloading
    
    if (!email) return;
    
    setStatus('loading');
    
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setMessage(data.message);
      setEmail(''); // Clear the input
      
    } catch (err: any) {
      setStatus('error');
      setMessage(err.message);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-background pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="p-10 md:p-16 rounded-3xl bg-surface/40 border border-border flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left shadow-2xl shadow-accent/5 backdrop-blur-sm">
          
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Ready to transform your workforce?
            </h2>
            <p className="text-muted text-lg">
              Join hundreds of enterprise companies upskilling their teams with Accredian's industry-leading programs.
            </p>
          </div>

          {/* Form wrapper added here */}
          <form onSubmit={handleSubmit} className="w-full md:w-auto flex flex-col items-center md:items-start gap-2">
            <div className="w-full flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading' || status === 'success'}
                placeholder="Enter your work email" 
                required
                className="h-11 px-4 rounded-lg bg-background border border-border text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent w-full sm:w-64 transition-all disabled:opacity-50"
              />
              <Button 
                variant="primary" 
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="whitespace-nowrap min-w-[140px]"
              >
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Joined!' : 'Get Started'}
              </Button>
            </div>
            
            {/* Feedback Message (Success/Error) */}
            {message && (
              <p className={`text-sm font-medium ${status === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                {message}
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}