import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Search, ShieldOff, Share2, Clock } from 'lucide-react';

const cards = [
  { icon: Search, text: '97% of consumers search online before visiting a shop' },
  { icon: ShieldOff, text: 'Without a website, you lose credibility instantly' },
  { icon: Share2, text: "Social media alone is not enough — you don't own it" },
  { icon: Clock, text: 'A website works 24/7 even when your shop is closed' },
];

export default function ProblemSection() {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <section className="section-padding section-alt">
      <div className="container-main">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
          <h2 className="section-heading">Your Customers Are Online — Is Your Business?</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-base text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-foreground font-medium">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
