import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Utensils, Scissors, Monitor, GraduationCap, ArrowRight } from 'lucide-react';

import restaurantImg from '@/assets/portfolio-restaurant.jpg';
import salonImg from '@/assets/portfolio-salon.jpg';
import electronicsImg from '@/assets/portfolio-electronics.jpg';
import coachingImg from '@/assets/portfolio-coaching.jpg';

const portfolio = [
  {
    title: 'Restaurant Website',
    desc: 'A modern menu-driven site with online ordering inquiries. Customers can browse food items, view prices, and place orders — all from their phone.',
    image: restaurantImg,
    icon: Utensils,
    tags: ['Online Menu', 'Order Inquiries', 'Mobile Friendly'],
    color: 'from-orange-500/20 to-red-500/20',
    borderColor: 'hover:border-orange-400/50',
    iconBg: 'bg-orange-100 text-orange-600',
    delivered: '8 days',
  },
  {
    title: 'Salon & Beauty',
    desc: 'Elegant showcase with booking form and stunning photo gallery. Clients can see services, pricing, and book appointments instantly.',
    image: salonImg,
    icon: Scissors,
    tags: ['Booking Form', 'Photo Gallery', 'Service Menu'],
    color: 'from-pink-500/20 to-purple-500/20',
    borderColor: 'hover:border-pink-400/50',
    iconBg: 'bg-pink-100 text-pink-600',
    delivered: '7 days',
  },
  {
    title: 'Electronics Shop',
    desc: 'Product catalog with smart categories and WhatsApp integration. Customers browse products and enquire directly — no complicated cart needed.',
    image: electronicsImg,
    icon: Monitor,
    tags: ['Product Catalog', 'Categories', 'WhatsApp Chat'],
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'hover:border-blue-400/50',
    iconBg: 'bg-blue-100 text-blue-600',
    delivered: '10 days',
  },
  {
    title: 'Coaching Institute',
    desc: 'Course listing with admission inquiry and faculty pages. Parents and students find all info in one place — courses, fees, and contact.',
    image: coachingImg,
    icon: GraduationCap,
    tags: ['Course Listing', 'Admissions', 'Faculty Page'],
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'hover:border-emerald-400/50',
    iconBg: 'bg-emerald-100 text-emerald-600',
    delivered: '9 days',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Real Results, Real Websites
          </span>
          <h2 className="section-heading">See What We've Built</h2>
          <p className="section-subheading">
            Every website below was built for a real small business — just like yours. 
            <span className="text-foreground font-medium"> No templates. 100% custom.</span>
          </p>
        </motion.div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {portfolio.map((item, i) => {
            const Icon = item.icon;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                className={`group relative bg-card rounded-2xl border border-border overflow-hidden transition-all duration-500 hover:shadow-xl ${item.borderColor}`}
              >
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Image Side */}
                  <div className="relative md:w-1/2 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`} />
                    <img
                      src={item.image}
                      alt={`${item.title} preview`}
                      className="w-full h-56 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Delivery badge */}
                    <div className="absolute top-4 left-4 z-20 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-foreground shadow-md">
                      ⚡ Delivered in {item.delivered}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold font-display text-foreground">{item.title}</h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-5">{item.desc}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button variant="outline" size="sm" className="w-fit group/btn" asChild>
                      <a href="#">
                        View Demo
                        <ExternalLink className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-0.5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-muted-foreground mb-4 text-lg">Want something similar for your business?</p>
          <Button size="lg" asChild>
            <a href="#contact">
              Get Your Website Built
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
