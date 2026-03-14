import { useState } from 'react';
import { X } from 'lucide-react';

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="bg-primary text-primary-foreground text-center text-sm py-2.5 px-4 relative z-[60]">
      <a href="#contact" className="hover:underline font-medium">
        Only 3 slots available this month — Book your free consultation now →
      </a>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-primary-foreground"
        aria-label="Dismiss"
      >
        <X size={16} />
      </button>
    </div>
  );
}
