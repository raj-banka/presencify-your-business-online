import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'Presencify built our restaurant website in just 8 days. We now get online orders directly!',
    name: 'Rajesh K.',
    role: 'Restaurant Owner',
    initials: 'RK',
  },
  {
    quote: 'Very affordable and professional. My salon bookings doubled in 2 months.',
    name: 'Priya S.',
    role: 'Salon Owner',
    initials: 'PS',
  },
  {
    quote: 'I had no idea about websites. They handled everything and explained every step.',
    name: 'Amit T.',
    role: 'Coaching Institute',
    initials: 'AT',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <h2 className="section-heading">What Our Clients Say</h2>
        <p className="section-subheading">Real results from real business owners.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-base"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-4">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
