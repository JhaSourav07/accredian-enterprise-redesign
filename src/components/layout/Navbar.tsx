import Link from 'next/link';
import { Button } from '../ui/Button';

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold tracking-tight text-accent">accredian</span>
        </Link>

        {/* Middle: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#programs" className="text-sm font-medium text-muted hover:text-primary transition-colors">Programs</Link>
          <Link href="#about" className="text-sm font-medium text-muted hover:text-primary transition-colors">About Us</Link>
          <Link href="#contact" className="text-sm font-medium text-muted hover:text-primary transition-colors">Contact Us</Link>
        </nav>

        {/* Right: CTA Buttons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex text-muted hover:text-primary hover:bg-surface">Login</Button>
          <Button variant="primary" className="bg-accent text-white hover:bg-accent-hover rounded px-6 py-2">Sign Up</Button>
        </div>
        
      </div>
    </header>
  );
}