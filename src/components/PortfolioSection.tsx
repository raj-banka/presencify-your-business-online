import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const portfolio = [
  { title: 'Restaurant Website', desc: 'A modern menu-driven site with online ordering inquiries.', gradient: 'from-primary/80 to-primary/40' },
  { title: 'Salon Website', desc: 'Elegant showcase with booking form and photo gallery.', gradient: 'from-accent/80 to-accent/40' },
  { title: 'Electronics Shop Website', desc: 'Product catalog with categories and contact integration.', gradient: 'from-primary/60 to-accent/60' },
  { title: 'Coaching Institute Website', desc: 'Course listing with admission inquiry and faculty pages.', gradient: 'from-accent/60 to-primary/60' },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container-main">
        <h2 className="section-heading">Our Sample Work</h2>
        <p className="section-subheading">See what we can build for your business.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {portfolio.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-base overflow-hidden"
            >
              <div className={`h-48 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4`}>
                <span className="text-primary-foreground font-display font-bold text-lg">{item.title}</span>
              </div>
              <h3 className="text-lg font-semibold font-display text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">{item.desc}</p>
              <Button variant="outline" size="sm" asChild>
                <a href="#">View Demo</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
