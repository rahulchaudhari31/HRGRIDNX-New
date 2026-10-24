import { motion } from 'framer-motion';
import { cn } from '../../../lib/cn';
const easing = [0.16, 1, 0.3, 1];
export function PricingToggle({ annual, setAnnual }) {
    return (
      <div className="relative inline-flex items-center rounded-full border border-ink/10 bg-paper/80 p-1">
        {(['monthly', 'yearly']).map((cadence) => (
          <button
            key={cadence}
            type="button"
            onClick={() => setAnnual(cadence === 'yearly')}
            className={cn(
              'relative rounded-full px-6 py-2 text-sm font-medium transition-colors',
              (cadence === 'yearly') === annual
                ? 'text-paper'
                : 'text-ink/60 hover:text-ink',
            )}
          >
            {((cadence === 'yearly') === annual) && (
              <motion.span
                layoutId="billing-pill"
                transition={{ duration: 0.35, ease: easing }}
                className="absolute inset-0 rounded-full bg-ink"
              />
            )}
            <span className="relative capitalize">{cadence}</span>
          </button>
        ))}
        <span
          className={cn(
            'hidden rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wider transition-colors sm:inline',
            annual ? 'bg-coral text-paper' : 'bg-coral/10 text-coral',
          )}
        >
          2 months free
        </span>
      </div>
    );
}
