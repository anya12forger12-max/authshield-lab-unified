import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../../utils/cn';
export function EmptyState({ icon, title, description, action, className }) {
    return (_jsxs("div", { className: cn('flex flex-col items-center justify-center py-12 px-6 text-center', className), children: [icon && (_jsx("div", { className: "mb-4 text-[var(--color-text-muted)] opacity-50", children: icon })), _jsx("h3", { className: "text-[var(--font-size-lg)] font-semibold text-[var(--color-text-primary)] mb-1", children: title }), description && (_jsx("p", { className: "text-[var(--font-size-sm)] text-[var(--color-text-muted)] max-w-md mb-4", children: description })), action && _jsx("div", { children: action })] }));
}
//# sourceMappingURL=EmptyState.js.map