import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';
const base = 'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-paper';
const variants = {
    primary: 'bg-coral text-paper hover:bg-[#e85a3b] hover:-translate-y-0.5',
    dark: 'bg-ink text-paper hover:bg-deep hover:-translate-y-0.5',
    outline: 'border border-ink/15 text-ink hover:border-ink hover:bg-ink hover:text-paper',
    ghost: 'text-ink hover:bg-ink/5',
    mint: 'bg-mint text-deep hover:bg-[#ccdccf] hover:-translate-y-0.5',
    light: 'border border-paper/20 text-paper hover:bg-paper/10',
};
const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-sm',
    lg: 'h-[3.25rem] px-8 text-base',
};
export function Button({ children, variant = 'primary', size = 'md', to, href, onClick, className, type = 'button', ariaLabel, }) {
    const classes = cn(base, variants[variant], sizes[size], className);
    if (to) {
        return (<Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>);
    }
    if (href) {
        return (<a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>);
    }
    return (<button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>);
}
