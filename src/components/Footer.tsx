import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 dark:bg-background text-slate-300 dark:text-foreground py-16 px-4 md:px-8 border-t border-transparent dark:border-border">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <a href="#home" className="inline-block mb-6 h-10">
              <img src="/logo-dark.png" alt="Presencify" className="h-full w-auto object-contain" />
            </a>
            <p className="text-slate-400 dark:text-muted-foreground text-sm leading-relaxed max-w-xs">
              Every business deserves to be online. We are building the web for small businesses worldwide, offering premium experiences at accessible scales.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-6 text-white dark:text-foreground uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="group text-sm text-slate-400 dark:text-muted-foreground hover:text-white dark:hover:text-primary transition-colors flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 dark:bg-muted group-hover:bg-primary transition-colors" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-6 text-white dark:text-foreground uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-4">
              <a href="mailto:rajbanka80@gmail.com" className="group flex items-center gap-3 text-sm text-slate-400 dark:text-muted-foreground hover:text-white dark:hover:text-primary transition-colors">
                <div className="p-2 bg-slate-900 border border-slate-800 dark:border-transparent dark:bg-secondary rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                rajbanka80@gmail.com
                <br />
                prashant.comm@gmail.com
              </a>
              <a href="tel:+919142801457" className="group flex items-center gap-3 text-sm text-slate-400 dark:text-muted-foreground hover:text-white dark:hover:text-primary transition-colors">
                <div className="p-2 bg-slate-900 border border-slate-800 dark:border-transparent dark:bg-secondary rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                +91 9142801457
                <br />
                +91 9681961637
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-400 dark:text-muted-foreground">
                <div className="p-2 bg-slate-900 border border-slate-800 dark:border-transparent dark:bg-secondary rounded-lg">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                India
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 dark:border-border mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-muted-foreground/60">
            © {new Date().getFullYear()} Presencify. All rights reserved.
          </p>
          {/* <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-muted-foreground/60">
            <a href="#" className="hover:text-white dark:hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white dark:hover:text-primary transition-colors">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
