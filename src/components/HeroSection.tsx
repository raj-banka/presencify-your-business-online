import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useCountUp } from '@/hooks/useCountUp';
import { Star, Clock, CheckCircle, Globe } from 'lucide-react';

const stats = [
  { end: 10, suffix: '+', label: 'Websites Delivered', icon: Globe },
  { end: 4.7, suffix: '★', label: 'Average Rating', icon: Star, decimal: true },
  { end: 10, suffix: '-Day', label: 'Avg Delivery', icon: Clock },
  { end: 100, suffix: '%', label: 'Client Satisfaction', icon: CheckCircle },
];

function StatItem({ end, suffix, label, decimal }: { end: number; suffix: string; label: string; decimal?: boolean }) {
  const { count, ref } = useCountUp(decimal ? 49 : end, 2000);
  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl md:text-3xl font-bold font-display text-primary">
        {decimal ? (count / 10).toFixed(1) : count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="section-padding pt-16 md:pt-24">
      <div className="container-main text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-foreground leading-tight max-w-4xl mx-auto"
        >
          Get Your Business Online — Starting from{' '}
          <span className="text-primary">₹10,000</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto"
        >
          We build professional websites for small businesses. Launch in 7–10 days, not months.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Button variant="hero" size="xl" asChild>
            <a href="#contact">Get Your Website Now</a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#portfolio">View Our Work</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto"
        >
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
