import type React from 'react';
import type { AccessibilityPreferences } from '../types';
interface AccessibilityContextValue {
    preferences: AccessibilityPreferences;
    updatePreferences: (updates: Partial<AccessibilityPreferences>) => void;
    announce: (message: string, priority?: 'polite' | 'assertive') => void;
    registerShortcut: (id: string, handler: (e: KeyboardEvent) => void, keys: string[]) => void;
    unregisterShortcut: (id: string) => void;
}
export declare function useAccessibility(): AccessibilityContextValue;
export declare function getAccessibilityPrefs(): AccessibilityPreferences;
export declare function updateAccessibilityPrefs(prefs: AccessibilityPreferences): void;
export declare function AccessibilityProvider({ children }: {
    children: React.ReactNode;
}): React.JSX.Element;
export {};
//# sourceMappingURL=AccessibilityProvider.d.ts.map