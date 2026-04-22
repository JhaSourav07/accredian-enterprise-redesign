import Link from 'next/link';
import { Mail, ArrowUpRight } from 'lucide-react';

// Brand icons removed from lucide-react in newer versions — use inline SVGs instead

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.261 5.631 5.903-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15} aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);



const LINKS = {
  Programs: [
    { label: 'Gen-AI Mastery', href: '#accredian-edge' },
    { label: 'Data Science', href: '#accredian-edge' },
    { label: 'Product Management', href: '#accredian-edge' },
    { label: 'Leadership Elevation', href: '#accredian-edge' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Case Studies', href: '#clients' },
    { label: 'Careers', href: '#' },
    { label: 'Contact Sales', href: '#' },
  ],
  Resources: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Domain Expertise', href: '#accredian-edge' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Blog', href: '#' },
  ],
};

const SOCIALS = [
  { icon: <XIcon />, href: '#', label: 'X (Twitter)' },
  { icon: <LinkedInIcon />, href: '#', label: 'LinkedIn' },
  { icon: <Mail size={16} />, href: 'mailto:enterprise@accredian.com', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-[#020812]">

      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-[10%] w-[800px] h-[300px] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 py-16 border-b border-white/5">

          {/* Brand col (spans 2) */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <Link href="/" className="inline-flex items-center gap-1">
              <span className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                accredian
              </span>
              <span className="ml-1 text-xs font-bold text-indigo-400/60 uppercase tracking-widest mt-1">enterprise</span>
            </Link>

            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Empowering enterprise teams with industry-leading programs in AI, Data Science, and Leadership — built for the next decade of work.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Contact pill */}
            <a href="mailto:enterprise@accredian.com"
              className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors duration-200 group">
              enterprise@accredian.com
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-500 text-sm hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Accredian Enterprise. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link href="#" className="hover:text-gray-300 transition-colors duration-200">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors duration-200">Terms of Service</Link>
            <div className="flex items-center gap-1.5 text-xs text-gray-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              All systems operational
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}