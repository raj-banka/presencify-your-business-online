import { motion } from 'framer-motion';
import { Check, AlertCircle } from 'lucide-react';

const promises = [
  'Professional website delivery',
  'On-time project completion',
  'Transparent pricing',
  'Secure hosting guidance',
];

const rules = [
  'Minor content updates are free',
  'Major redesign costs extra',
  'Client must provide content/images',
  'Hosting renewal is client responsibility',
];

export default function CommitmentsSection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <h2 className="section-heading">Our Commitments</h2>
        <p className="section-subheading">What you can expect from us — and what we ask of you.</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <div className="card-base">
            <h3 className="text-lg font-semibold font-display text-foreground mb-4">Our Promises</h3>
            <ul className="space-y-3">
              {promises.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-base">
            <h3 className="text-lg font-semibold font-display text-foreground mb-4">Maintenance Rules</h3>
            <ul className="space-y-3">
              {rules.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <AlertCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {r}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
