import type React from 'react';
export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md' | 'lg';
    label?: string;
}
export declare function Spinner({ size, label, className, ...props }: SpinnerProps): React.JSX.Element;
//# sourceMappingURL=Spinner.d.ts.map