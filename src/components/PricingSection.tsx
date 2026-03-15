import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const features = [
  '5–7 pages website',
  'Product gallery',
  'Contact form',
  'Domain setup guidance',
  'Deployment & hosting setup',
  '6 months free maintenance',
];

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding section-alt">
      <div className="container-main">
        <h2 className="section-heading">Simple & Transparent Pricing</h2>
        <p className="section-subheading">No hidden costs. No surprises.</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto card-base text-center border-2 border-primary/20"
        >
          <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Most Popular
          </div>
          <h3 className="text-xl font-semibold font-display text-foreground">Starter Business Website</h3>
          <div className="mt-4">
            <span className="text-4xl font-bold font-display text-foreground">₹10,000</span>
            <span className="text-muted-foreground ml-2">starting from</span>
          </div>
          <ul className="space-y-3 mt-8 text-left">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {f}
              </li>
            ))}
          </ul>
          <Button variant="hero" size="lg" className="w-full mt-8" asChild>
            <a href="#contact">Request Your Website</a>
          </Button>
        </motion.div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          Need something bigger?{' '}
          <a href="#contact" className="text-primary font-medium hover:underline">Contact us for a custom quote.</a>
        </p>
      </div>
    </section>
  );
}
