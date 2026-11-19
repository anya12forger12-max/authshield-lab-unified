import type React from 'react';
interface ScreenReaderContextValue {
    announce: (message: string, priority?: 'polite' | 'assertive') => void;
}
export declare function useScreenReader(): ScreenReaderContextValue;
export declare function ScreenReaderAnnouncer({ children }: {
    children: React.ReactNode;
}): React.JSX.Element;
export {};
//# sourceMappingURL=ScreenReaderAnnouncer.d.ts.map