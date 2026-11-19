import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../utils/cn';
const variantStyles = {
    primary: 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)] shadow-sm',
    secondary: 'bg-[var(--color-surface)] text-[var(--color-text-primary)] border border-[var(--color-border)] hover:bg-[var(--color-surface-elevated)] active:bg-[var(--color-surface-sunken)] shadow-sm',
    ghost: 'bg-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-text-primary)] active:bg-[var(--color-border-subtle)]',
    danger: 'bg-[var(--color-danger)] text-white hover:bg-[color:var(--color-danger)]/90 active:bg-[color:var(--color-danger)]/80 shadow-sm',
};
const sizeStyles = {
    sm: 'h-8 px-3 text-[var(--font-size-sm)] gap-1.5 rounded-[var(--radius-sm)]',
    md: 'h-10 px-4 text-[var(--font-size-base)] gap-2 rounded-[var(--radius-md)]',
    lg: 'h-12 px-6 text-[var(--font-size-lg)] gap-2.5 rounded-[var(--radius-md)]',
};
export const Button = forwardRef(({ variant = 'primary', size = 'md', loading = false, icon, iconRight, asChild = false, disabled, className, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const isDisabled = disabled || loading;
    return (_jsxs(Comp, { ref: ref, disabled: asChild ? undefined : isDisabled, "aria-disabled": isDisabled || undefined, "aria-busy": loading || undefined, className: cn('inline-flex items-center justify-center font-medium transition-all duration-[var(--transition-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50', variantStyles[variant], sizeStyles[size], className), ...props, children: [loading ? (_jsxs("svg", { className: "animate-spin h-4 w-4 shrink-0", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] })) : icon ? (_jsx("span", { className: "shrink-0", children: icon })) : null, children, iconRight && !loading && _jsx("span", { className: "shrink-0", children: iconRight })] }));
});
Button.displayName = 'Button';
//# sourceMappingURL=Button.js.map