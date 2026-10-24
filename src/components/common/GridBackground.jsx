import { cn } from '../../lib/cn';
export function GridBackground({ variant = 'dark', className, }) {
    const gridClass = {
        dark: 'grid-lines',
        light: 'grid-lines-light',
        mint: 'grid-lines-mint',
        strong: 'grid-lines-strong',
    }[variant];
    return (<div aria-hidden="true" className={cn('pointer-events-none absolute inset-0', gridClass, className)}/>);
}
