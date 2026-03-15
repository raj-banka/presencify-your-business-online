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
      <div className="container-main text-center">
        <h2 className="section-heading mx-auto">How It Works</h2>
        <p className="section-subheading mx-auto mb-16">From idea to launch in 5 simple steps.</p>

        <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4 max-w-5xl mx-auto w-full">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-border z-0" />

          {/* Vertical Line for Mobile */}
          <div className="md:hidden absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-[2px] bg-border z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center flex-1 relative z-10 w-full"
            >
              {/* Desktop backdrop circle so line doesn't bleed through perfectly, and mobile spacing */}
              <div style={{ backgroundColor: 'oklch(var(--section-alt))' }} className="p-2 rounded-full mb-2">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center shadow-sm">
                  <step.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
              </div>

              <h3 className="font-semibold font-display text-foreground text-base md:text-sm">{step.title}</h3>
              <p className="text-sm md:text-xs text-muted-foreground mt-1 px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

