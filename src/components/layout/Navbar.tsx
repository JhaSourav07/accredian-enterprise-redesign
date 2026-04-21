import Link from 'next/link';
import { Button } from '../ui/Button';

export function Navbar() {
  return (
    // Fixed to top, z-50 keeps it above other content, backdrop-blur creates the glass effect
    <header className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* A simple placeholder logo using a blue dot */}
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className="text-xl font-bold tracking-tight text-primary">Accredian</span>
        </Link>

        {/* Middle: Desktop Navigation Links (Hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#programs" className="text-sm font-medium text-muted hover:text-primary transition-colors">Programs</Link>
          <Link href="#about" className="text-sm font-medium text-muted hover:text-primary transition-colors">About Us</Link>
          <Link href="#enterprise" className="text-sm font-medium text-muted hover:text-primary transition-colors">Enterprise</Link>
        </nav>

        {/* Right: CTA Buttons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex">Log In</Button>
          <Button variant="primary">Contact Sales</Button>
        </div>
        
      </div>
    </header>
  );
}