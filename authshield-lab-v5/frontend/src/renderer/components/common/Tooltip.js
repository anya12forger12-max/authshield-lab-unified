import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '../../utils/cn';
export function Tooltip({ content, children, side = 'top', align = 'center', delayDuration = 300, sideOffset = 4, }) {
    return (_jsx(TooltipPrimitive.Provider, { delayDuration: delayDuration, children: _jsxs(TooltipPrimitive.Root, { children: [_jsx(TooltipPrimitive.Trigger, { asChild: true, children: children }), _jsx(TooltipPrimitive.Portal, { children: _jsxs(TooltipPrimitive.Content, { side: side, align: align, sideOffset: sideOffset, className: cn('z-50 rounded-[var(--radius-md)] px-3 py-1.5 text-[var(--font-size-sm)]', 'bg-[var(--color-text-primary)] text-[var(--color-text-inverse)]', 'shadow-[var(--shadow-md)]', 'animate-fade-in', 'data-[state=closed]:animate-fade-out', 'select-none'), children: [content, _jsx(TooltipPrimitive.Arrow, { className: "fill-[var(--color-text-primary)]" })] }) })] }) }));
}
//# sourceMappingURL=Tooltip.js.map