import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ROICalculator() {
  const [customers, setCustomers] = useState(5);
  const [orderValue, setOrderValue] = useState(500);

  const monthlyRevenue = customers * orderValue;
  const paybackDays = monthlyRevenue > 0 ? Math.ceil(10000 / (monthlyRevenue / 30)) : 999;

  return (
    <section className="section-padding">
      <div className="container-main">
        <h2 className="section-heading">See If a Website Is Worth It for You</h2>
        <p className="section-subheading">A simple calculator to see your potential return.</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto card-base"
        >
          <div className="mb-8">
            <label className="block text-sm font-medium text-foreground mb-2">
              New customers per month from your website: <span className="text-primary font-bold">{customers}</span>
            </label>
            <input
              type="range"
              min={1}
              max={50}
              value={customers}
              onChange={(e) => setCustomers(Number(e.target.value))}
              className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-foreground mb-2">
              Average order value (₹)
            </label>
            <input
              type="number"
              min={100}
              max={100000}
              value={orderValue}
              onChange={(e) => setOrderValue(Number(e.target.value))}
              className="w-full px-4 py-2.5 border border-input rounded-lg text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div className="bg-section-alt rounded-lg p-6 text-center">
            <div className="text-sm text-muted-foreground mb-1">Estimated Monthly Revenue Gain</div>
            <div className="text-3xl font-bold font-display text-accent">
              ₹{monthlyRevenue.toLocaleString('en-IN')}
            </div>
            <div className="text-sm text-muted-foreground mt-1">vs ₹10,000 one-time website cost</div>

            {paybackDays <= 365 && (
              <p className="mt-4 text-primary font-semibold text-sm">
                🎉 Your website pays for itself in {paybackDays} days!
              </p>
            )}
            <p className="mt-2 text-xs text-muted-foreground">And your website works 24/7 forever.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
