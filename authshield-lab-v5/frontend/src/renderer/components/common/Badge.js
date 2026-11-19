import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
const variantStyles = {
    success: 'bg-[var(--color-success-subtle)] text-[var(--color-success)] border border-[var(--color-success)]/20',
    warning: 'bg-[var(--color-warning-subtle)] text-[var(--color-warning)] border border-[var(--color-warning)]/20',
    danger: 'bg-[var(--color-danger-subtle)] text-[var(--color-danger)] border border-[var(--color-danger)]/20',
    info: 'bg-[var(--color-info-subtle)] text-[var(--color-info)] border border-[var(--color-info)]/20',
    neutral: 'bg-[var(--color-secondary-subtle)] text-[var(--color-text-secondary)] border border-[var(--color-border)]',
};
const sizeStyles = {
    sm: 'text-[10px] px-1.5 py-0.5',
    md: 'text-[var(--font-size-xs)] px-2 py-0.5',
};
export function Badge({ variant = 'neutral', size = 'md', className, ...props }) {
    return (_jsx("span", { className: cn('inline-flex items-center rounded-[var(--radius-full)] font-medium leading-none whitespace-nowrap', variantStyles[variant], sizeStyles[size], className), ...props }));
}
//# sourceMappingURL=Badge.js.map