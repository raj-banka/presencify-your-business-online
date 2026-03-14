import { motion } from 'framer-motion';
import { MessageSquare, Palette, Eye, Rocket, HeadphonesIcon } from 'lucide-react';

const steps = [
  { icon: MessageSquare, title: 'Contact Us', desc: 'Share your requirements' },
  { icon: Palette, title: 'We Design', desc: 'We create your website' },
  { icon: Eye, title: 'Review', desc: 'Review and approve' },
  { icon: Rocket, title: 'Launch', desc: 'Your website goes live' },
  { icon: HeadphonesIcon, title: 'Support', desc: '6 months free support' },
];

export default function HowItWorks() {
  return (
    <section className="section-padding section-alt">
      <div className="container-main">
        <h2 className="section-heading">How It Works</h2>
        <p className="section-subheading">From idea to launch in 5 simple steps.</p>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center flex-1 relative"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 relative z-10">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-border" />
              )}
              <h3 className="font-semibold font-display text-foreground text-sm">{step.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
