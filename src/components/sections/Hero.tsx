import { Button } from '../ui/Button';

export function Hero() {
  return (
    // 'relative' and 'overflow-hidden' ensure our background glow doesn't break the page width
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      
      {/* Background Glow Effect - This creates a subtle blue spotlight at the top of the page */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-accent/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-sm font-medium text-accent mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          Empowering Enterprise Teams
        </div>

        {/* Headline with Gradient Text */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary max-w-4xl mb-6">
          Upskill your workforce with <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-300">Industry-Leading</span> Programs.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted max-w-2xl mb-10">
          Transform your organization's capabilities with curated learning paths in Data Science, AI, and Product Management designed for scale.
        </p>

        {/* CTAs - flex-col on mobile so they stack, flex-row on larger screens */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            Explore Programs
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Book a Demo
          </Button>
        </div>
        
      </div>
    </section>
  );
}