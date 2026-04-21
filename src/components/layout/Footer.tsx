import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-surface/10 border-t border-border pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Grid: Links and Brand */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">Accredian</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed">
              Empowering enterprise teams with industry-leading programs in Data, AI, and Product.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-primary font-semibold mb-4">Programs</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><Link href="#" className="hover:text-accent transition-colors">Data Science</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">AI & Machine Learning</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Product Management</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><Link href="#" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Contact Sales</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Socials */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>© {new Date().getFullYear()} Accredian Enterprise. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-primary cursor-pointer transition-colors">Twitter</span>
            <span className="hover:text-primary cursor-pointer transition-colors">LinkedIn</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
}