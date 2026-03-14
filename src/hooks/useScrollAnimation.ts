import { useEffect, useRef } from 'react';
import { useAnimation, useInView, type Variants } from 'framer-motion';

export function useScrollAnimation() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return { ref, controls, variants };
}
