import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-background">
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col items-start text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary leading-tight mb-6">
            Next-Gen <span className="text-accent">Expertise</span><br />
            For Your Enterprise
          </h1>

          <p className="text-lg text-muted mb-10 max-w-lg">
            Transform your organization with tailored learning paths in Data Science, AI, and Product Management designed for scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto rounded px-8">
              Explore Solutions
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded px-8 border-accent text-accent hover:bg-accent/5">
              Talk to an Expert
            </Button>
          </div>
        </div>

        {/* Right Content - Image Placeholder */}
        <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl bg-surface border border-border flex items-center justify-center overflow-hidden shadow-xl shadow-accent/5">
          {/* We use a simple placeholder structure to represent the image of professionals */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent"></div>
          <div className="text-center p-8 relative z-10">
            <div className="w-32 h-32 mx-auto bg-accent/20 rounded-full mb-4 flex items-center justify-center">
               <span className="text-4xl">👥</span>
            </div>
            <p className="text-primary font-medium text-sm">Professional Team</p>
            <p className="text-xs text-muted mt-2">Placeholder for Hero Image</p>
          </div>
        </div>
        
      </div>
    </section>
  );
}