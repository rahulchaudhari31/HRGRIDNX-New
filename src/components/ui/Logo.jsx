import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';

export function Logo({ className }) {
  return (
    <Link to="/" className={cn('inline-flex items-center', className)} aria-label="HRGRIDNX home">
      <img src="/logo.png" alt="HRGRIDNX" className="h-14 w-auto object-contain" />
    </Link>
  );
}
