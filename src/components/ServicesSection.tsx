import { motion } from 'framer-motion';
import { Layout, Wrench, Check } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Basic Business Website',
    features: [
      'Professional design',
      'Product showcase pages',
      'Contact form with email integration',
      'Mobile responsive layout',
      'SEO-friendly structure',
      'Hosting & deployment support',
    ],
  },
  {
    icon: Wrench,
    title: '6 Months Free Maintenance',
    features: [
      'Content updates',
      'Image replacements',
      'Minor text changes',
      'Bug fixes',
      'Security monitoring',
    ],
    note: 'Major redesign changes not included',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding section-alt">
      <div className="container-main">
        <h2 className="section-heading">What We Offer</h2>
        <p className="section-subheading">Everything you need to get online and stay online.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="card-base"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-display text-foreground mb-4">{service.title}</h3>
              <ul className="space-y-3">
                {service.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              {service.note && (
                <p className="text-xs text-muted-foreground mt-4 italic">* {service.note}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
