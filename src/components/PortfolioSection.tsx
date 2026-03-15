import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { UtensilsCrossed, Scissors, Briefcase, GraduationCap, ExternalLink, Zap } from 'lucide-react';

const portfolio = [
  {
    title: 'Restaurant Website',
    desc: 'A modern menu-driven site with online ordering inquiries. Customers can browse food items, view prices, and place orders — all from their phone.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
    link: 'https://www.mealzee.in/',
    delivery: '8 days',
    icon: UtensilsCrossed,
    features: ['Online Menu', 'Order Inquiries', 'Mobile Friendly'],
    color: 'bg-orange-50/50 dark:bg-orange-500/10',
    iconColor: 'text-orange-500 bg-orange-100 dark:bg-orange-900/50 dark:text-orange-400',
  },
  {
    title: 'Developer Portfolio',
    desc: 'A sleek, professional personal brand website showcasing skills, experience, and complete project portfolios for freelancers and tech professionals.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    link: 'https://arjun-mehta-showcase.vercel.app/',
    delivery: '5 days',
    icon: Briefcase,
    features: ['Resume Display', 'Project Showcase', 'Contact Forms'],
    color: 'bg-blue-50/50 dark:bg-blue-500/10',
    iconColor: 'text-blue-500 bg-blue-100 dark:bg-blue-900/50 dark:text-blue-400',
  },
  {
    title: 'Salon & Beauty',
    desc: 'Elegant showcase with booking form and stunning photo gallery. Clients can see services, pricing, and book appointments instantly.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
    link: 'https://glamour-salon-demo-kappa.vercel.app/',
    delivery: '7 days',
    icon: Scissors,
    features: ['Booking Form', 'Photo Gallery', 'Service Menu'],
    color: 'bg-pink-50/50 dark:bg-pink-500/10',
    iconColor: 'text-pink-500 bg-pink-100 dark:bg-pink-900/50 dark:text-pink-400',
  },
  {
    title: 'Educational Institute',
    desc: 'Educational portal for showcasing courses, sharing faculty profiles, and capturing student admission inquiries easily online.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
    link: 'https://brightminds-academy-demo.vercel.app/',
    delivery: '10 days',
    icon: GraduationCap,
    features: ['Course Listings', 'Admissions', 'Faculty Profiles'],
    color: 'bg-emerald-50/50 dark:bg-emerald-500/10',
    iconColor: 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/50 dark:text-emerald-400',
  },
];

export default function PortfolioSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedPortfolio = showAll ? portfolio : portfolio.slice(0, 2);

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container-main">
        <h2 className="section-heading text-center mb-4">See What We've Built</h2>
        <p className="section-subheading text-center mb-16 mx-auto max-w-2xl">
          Every website below was built for a real small business — just like yours. <strong>No templates. 100% custom.</strong>
        </p>

        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {displayedPortfolio.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`bg-card border border-border rounded-[2rem] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
            >
              {/* Image Side */}
              <div className={`w-full md:w-1/2 relative min-h-[300px] flex items-center justify-center p-8 md:p-12 ${item.color}`}>
                <div className="absolute top-6 left-6 bg-background rounded-full px-3 py-1.5 shadow-sm flex items-center gap-1.5 text-xs font-semibold text-foreground border border-border">
                  <Zap className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                  Delivered in {item.delivery}
                </div>

                <div className="w-full relative rounded-xl overflow-hidden shadow-2xl border border-border/10">
                  <div className="bg-slate-200 dark:bg-slate-800 h-6 w-full flex items-center px-3 gap-1.5 border-b border-border/10">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconColor}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-foreground">{item.title}</h3>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {item.features.map((feature, j) => (
                    <span
                      key={j}
                      className="px-3 py-1.5 bg-muted text-muted-foreground rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-auto md:mt-0">
                  <Button variant="outline" className="rounded-full text-primary border-primary hover:bg-primary/5 dark:hover:bg-primary/20 hover:text-primary transition-all font-semibold" asChild>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      View Demo <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {portfolio.length > 2 && (
          <div className="mt-16 text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="rounded-full px-8 font-semibold border-primary/20 text-foreground hover:bg-primary/5 hover:text-primary"
            >
              {showAll ? 'View Less Works' : 'View All Works'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
