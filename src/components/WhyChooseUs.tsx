import { motion } from 'framer-motion';
import { IndianRupee, Zap, MessageCircle, HeadphonesIcon, HelpCircle } from 'lucide-react';

const reasons = [
  { icon: IndianRupee, title: 'Affordable Pricing', desc: 'No hidden costs — transparent from start to finish.' },
  { icon: Zap, title: 'Fast Delivery', desc: '7 to 10 business days from start to launch.' },
  { icon: MessageCircle, title: 'Simple Communication', desc: 'No tech jargon — we speak your language.' },
  { icon: HeadphonesIcon, title: 'Reliable Support', desc: '6 months of free support after launch.' },
  { icon: HelpCircle, title: 'Beginner-Friendly', desc: 'We guide you through every single step.' },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding section-alt">
      <div className="container-main">
        <h2 className="section-heading">Why Small Businesses Trust Us</h2>
        <p className="section-subheading">We make getting online simple, fast, and affordable.</p>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card-base text-center w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold font-display text-foreground mb-1">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
