import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-foreground text-background py-16 px-4 md:px-8">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display font-bold text-xl mb-2">Presencify</h3>
            <p className="text-background/60 text-sm">Every business deserves to be online.</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-background/60 hover:text-background transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Contact</h4>
            <p className="text-sm text-background/60">hello@presencify.com</p>
            <p className="text-sm text-background/60 mt-1">Location: India</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-background/60 hover:text-background"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-background/60 hover:text-background"><Linkedin className="w-5 h-5" /></a>
              <a href="https://wa.me/91XXXXXXXXXX" className="text-background/60 hover:text-background"><MessageCircle className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-sm text-background/40">© 2025 Presencify. All rights reserved.</p>
          <p className="text-xs text-background/30 mt-1">Building the web for small businesses worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
