import Link from 'next/link';
import { Button } from '../ui/Button';

export function Navbar() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Stats', href: '#stats' },
    { name: 'Clients', href: '#clients' },
    { name: 'Accredian Edge', href: '#accredian-edge' },
    { name: 'CAT', href: '#cat' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#030712]/70 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-300">
            A
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-indigo-400 transition-all duration-300">
            Accredian
          </span>
        </Link>

        {/* Middle: Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-300 hover:text-white relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: CTA Buttons */}
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:inline-flex text-gray-300 border-white/10 bg-transparent hover:bg-white/5 hover:text-white hover:border-white/20 transition-all rounded-xl px-6 py-2">
            Log In
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl px-6 py-2 shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] border-none transition-all duration-300">
            Enquire Now
          </Button>
        </div>
        
      </div>
    </header>
  );
}