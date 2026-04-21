import React from 'react';

export function LiveBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-transparent">
      {/* Subtle CSS-based grid pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_40%,transparent_100%)] opacity-50"
      />
      
      {/* Orbs */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-accent/10 blur-[120px] animate-pulse" 
        style={{ animationDuration: '4s' }} 
      />
      <div 
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[1000px] max-h-[1000px] rounded-full bg-blue-600/10 blur-[150px] animate-pulse" 
        style={{ animationDuration: '6s', animationDelay: '1s' }} 
      />
    </div>
  );
}
