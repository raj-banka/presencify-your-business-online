import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { q: 'Will my website show on Google?', a: 'Yes, all our websites are SEO-optimized and submitted to Google Search Console.' },
  { q: 'Do I need to know coding?', a: 'Not at all. We handle everything technical for you.' },
  { q: 'What if I want changes after launch?', a: 'You get 6 months of free minor content updates after launch.' },
  { q: 'How long does it take?', a: 'Typically 7–10 business days from content collection to launch.' },
  { q: 'What do I need to provide?', a: "Just your business info, logo, product photos, and any text. We help if you don't have these." },
  { q: 'Is hosting included?', a: 'We guide you on the best hosting options. Hosting renewal is the client\'s responsibility after setup.' },
];

export default function FAQSection() {
  return (
    <section className="section-padding section-alt">
      <div className="container-main">
        <h2 className="section-heading">Frequently Asked Questions</h2>
        <p className="section-subheading">Got questions? We have answers.</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-5">
                <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
