import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { UtensilsCrossed, Scissors, FileCode2, GraduationCap, ShoppingBag, Briefcase } from 'lucide-react';

const packages = [
  {
    icon: UtensilsCrossed,
    name: 'Restaurant Website',
    features: ['Online menu display', 'Location & hours', 'Order inquiry form'],
  },
  {
    icon: Scissors,
    name: 'Salon & Beauty',
    features: ['Service showcase', 'Booking inquiry', 'Photo gallery'],
  },
  {
    icon: FileCode2,
    name: 'Personal Portfolio',
    features: ['Project showcase', 'Resume download', 'Contact form'],
  },
  {
    icon: GraduationCap,
    name: 'Coaching Institute',
    features: ['Course catalog', 'Admission inquiry', 'Faculty profiles'],
  },
  {
    icon: ShoppingBag,
    name: 'Retail Shop',
    features: ['Product showcase', 'Contact & location', 'Special offers page'],
  },
  {
    icon: Briefcase,
    name: 'Professional Services',
    features: ['Service breakdown', 'Client testimonials', 'Consultation form'],
  },
];

export default function IndustryPackages() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <h2 className="section-heading">Built for Your Industry</h2>
        <p className="section-subheading">Tailored website packages designed for your specific business needs.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card-base flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <pkg.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-display text-foreground mb-3">{pkg.name}</h3>
              <ul className="space-y-2 mb-6 flex-1">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="default" className="w-full" asChild>
                <a href="#contact">Get This Package</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
