import type React from 'react';
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'info' | 'success' | 'warning' | 'error';
    dismissible?: boolean;
    onDismiss?: () => void;
    title?: string;
}
export declare function Alert({ variant, dismissible, onDismiss, title, className, children, ...props }: AlertProps): React.JSX.Element | null;
//# sourceMappingURL=Alert.d.ts.map