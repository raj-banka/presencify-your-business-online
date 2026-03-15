import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', business: '', phone: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (form.phone && !/^\+?[0-9\s\-()]{7,15}$/.test(form.phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Use environment variable for production, fallback to localhost for development if not set
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        toast.success("Message sent successfully!");
        setTimeout(() => {
          setSubmitted(false);
          setForm({ name: '', business: '', phone: '', email: '', message: '' });
        }, 10000);
      } else {
        toast.error("Failed to send message: " + (data.error || "Unknown error"));
      }
    } catch (e) {
      toast.error("Could not connect to the email server. Please make sure the backend is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding section-alt">
      <div className="container-main">
        <h2 className="section-heading">Start Your Online Journey Today</h2>
        <p className="section-subheading">Fill in the form and we'll get back to you within 24 hours.</p>

        <div className="max-w-xl mx-auto">
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
                  { key: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe', isRequired: true },
                  { key: 'business', label: 'Business Name', type: 'text', placeholder: 'My Business', isRequired: false },
                  { key: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210', isRequired: form.email.trim() === '' },
                  { key: 'email', label: 'Email', type: 'email', placeholder: 'you@email.com', isRequired: form.phone.trim() === '' },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      {field.label} {field.isRequired && <span className="text-destructive">*</span>}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.isRequired}
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
                <Button variant="hero" size="lg" type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending Request...' : 'Request Website'}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
