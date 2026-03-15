import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = navLinks.map(l => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`w-full transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-background'}`}>
      <div className="container-main flex items-center justify-between h-16 px-4 md:px-8">
        <a href="#home" className="flex items-center shrink-0 h-12  ">
          <img src="/logo-light.png" alt="Presencify" className="h-full w-auto object-contain dark:hidden" />
          <img src="/logo-dark.png" alt="Presencify" className="h-full w-auto object-contain hidden dark:block" />
        </a>

        {/* Desktop Container */}
        <div className="hidden md:flex items-center w-full ml-16 mr-6 justify-end gap-12">

          {/* Nav Items */}
          <div className="flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === link.href.slice(1) ? 'text-primary' : 'text-muted-foreground'}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <ThemeToggle />
        </div>

        {/* CTA Button explicitly on the far right */}
        <div className="hidden md:block shrink-0">
          <Button variant="hero" size="default" asChild>
            <a href="#contact">Get Your Website</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button className="text-foreground p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-medium text-foreground hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="default" className="w-full mt-2" asChild>
            <a href="#contact">Get Your Website</a>
          </Button>
        </div>
      )}
    </nav>
  );
}
