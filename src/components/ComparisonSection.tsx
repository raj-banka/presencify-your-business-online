import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, X, Minus } from 'lucide-react';

const features = [
  { name: 'Google Search Visibility', website: true, social: false },
  { name: 'Available 24/7', website: true, social: false },
  { name: 'Own Your Platform', website: true, social: false },
  { name: 'Professional Credibility', website: true, social: 'limited' },
  { name: 'Collect Leads', website: true, social: 'limited' },
  { name: 'Show Products/Services', website: true, social: 'limited' },
  { name: 'Rank on Google', website: true, social: false },
];

export default function ComparisonSection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <h2 className="section-heading">Website vs Just Social Media</h2>
        <p className="section-subheading">See why a website gives you the edge.</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto overflow-x-auto"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Feature</th>
                <th className="py-4 px-4 text-center">
                  <span className="inline-block bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">Website</span>
                </th>
                <th className="py-4 px-4 text-center text-sm font-medium text-muted-foreground">Social Media Only</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="py-3.5 px-4 text-sm text-foreground">{f.name}</td>
                  <td className="py-3.5 px-4 text-center">
                    <Check className="w-5 h-5 text-accent mx-auto" />
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    {f.social === false ? (
                      <X className="w-5 h-5 text-destructive mx-auto" />
                    ) : (
                      <Minus className="w-5 h-5 text-muted-foreground mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="text-center mt-10">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">Get Your Website Today</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
