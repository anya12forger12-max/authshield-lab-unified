import type React from 'react';
import type { AccessibilityPreferences } from '../types';
interface AnnounceFunction {
    (message: string, priority?: 'polite' | 'assertive'): void;
}
interface AppContextValue {
    announce: AnnounceFunction;
    accessibility: AccessibilityPreferences;
}
export declare function useAppContext(): AppContextValue;
export declare function AppProvider({ children }: {
    children: React.ReactNode;
}): React.JSX.Element;
export {};
//# sourceMappingURL=AppContext.d.ts.map