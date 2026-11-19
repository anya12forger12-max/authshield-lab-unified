import type React from 'react';
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'success' | 'warning' | 'danger' | 'info' | 'neutral';
    size?: 'sm' | 'md';
}
export declare function Badge({ variant, size, className, ...props }: BadgeProps): React.JSX.Element;
//# sourceMappingURL=Badge.d.ts.map