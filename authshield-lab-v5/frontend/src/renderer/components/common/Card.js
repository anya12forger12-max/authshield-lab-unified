import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
const variantStyles = {
    default: 'bg-[var(--color-surface)] border border-[var(--color-border)] shadow-[var(--shadow-sm)]',
    elevated: 'bg-[var(--color-surface-elevated)] shadow-[var(--shadow-md)]',
    outlined: 'bg-[var(--color-surface)] border-2 border-[var(--color-border)]',
};
export function Card({ variant = 'default', interactive = false, as: Component = 'div', className, children, ...props }) {
    return (_jsx(Component, { className: cn('rounded-[var(--radius-lg)] overflow-hidden', variantStyles[variant], interactive &&
            'cursor-pointer transition-all duration-[var(--transition-fast)] hover:shadow-[var(--shadow-md)] hover:border-[var(--color-primary)] focus-within:ring-2 focus-within:ring-[var(--color-focus-ring)] focus-within:ring-offset-2', className), ...props, children: children }));
}
export function CardHeader({ as: Component = 'div', className, children, ...props }) {
    return (_jsx(Component, { className: cn('px-6 py-4 border-b border-[var(--color-border-subtle)]', className), ...props, children: children }));
}
export function CardTitle({ as: Component = 'h3', className, children, ...props }) {
    return (_jsx(Component, { className: cn('text-[var(--font-size-lg)] font-semibold text-[var(--color-text-primary)]', className), ...props, children: children }));
}
export function CardDescription({ className, children, ...props }) {
    return (_jsx("p", { className: cn('text-[var(--font-size-sm)] text-[var(--color-text-secondary)] mt-1', className), ...props, children: children }));
}
export function CardBody({ className, children, ...props }) {
    return (_jsx("div", { className: cn('px-6 py-4', className), ...props, children: children }));
}
export function CardFooter({ as: Component = 'div', className, children, ...props }) {
    return (_jsx(Component, { className: cn('px-6 py-3 border-t border-[var(--color-border-subtle)] bg-[var(--color-surface-sunken)]/50', className), ...props, children: children }));
}
//# sourceMappingURL=Card.js.map