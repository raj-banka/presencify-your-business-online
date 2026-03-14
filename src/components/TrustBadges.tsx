import { Shield, Smartphone, Zap, Search, Flag } from 'lucide-react';

const badges = [
  { icon: Shield, label: 'SSL Secured' },
  { icon: Smartphone, label: 'Mobile Friendly' },
  { icon: Zap, label: 'Fast Loading' },
  { icon: Search, label: 'SEO Optimized' },
  { icon: Flag, label: 'Made in India 🇮🇳' },
];

export default function TrustBadges() {
  return (
    <section className="py-12 px-4 border-y border-border">
      <div className="container-main flex flex-wrap justify-center gap-8 md:gap-16">
        {badges.map((b, i) => (
          <div key={i} className="flex items-center gap-2 text-muted-foreground">
            <b.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{b.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
