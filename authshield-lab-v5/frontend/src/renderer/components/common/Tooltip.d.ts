import type React from 'react';
export interface TooltipProps {
    content: React.ReactNode;
    children: React.ReactNode;
    side?: 'top' | 'right' | 'bottom' | 'left';
    align?: 'start' | 'center' | 'end';
    delayDuration?: number;
    sideOffset?: number;
}
export declare function Tooltip({ content, children, side, align, delayDuration, sideOffset, }: TooltipProps): React.JSX.Element;
//# sourceMappingURL=Tooltip.d.ts.map