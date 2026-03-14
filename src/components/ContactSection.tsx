import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', business: '', phone: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding section-alt">
      <div className="container-main">
        <h2 className="section-heading">Start Your Online Journey Today</h2>
        <p className="section-subheading">Fill in the form and we'll get back to you within 24 hours.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="card-base text-center py-12">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-semibold font-display text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground text-sm">We've received your request and will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { key: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                  { key: 'business', label: 'Business Name', type: 'text', placeholder: 'My Business' },
                  { key: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210' },
                  { key: 'email', label: 'Email', type: 'email', placeholder: 'you@email.com' },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="w-full px-4 py-2.5 border border-input rounded-lg text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your business and what you need..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 border border-input rounded-lg text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm resize-none"
                  />
                </div>
                <Button variant="hero" size="lg" type="submit" className="w-full">
                  Request Website
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="space-y-6"
          >
            <div className="card-base">
              <Button variant="whatsapp" size="lg" className="w-full" asChild>
                <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                </a>
              </Button>
            </div>
            <div className="card-base space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground">hello@presencify.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">We reply within 24 hours</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
