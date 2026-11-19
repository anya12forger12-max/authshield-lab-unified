import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useCallback, useRef, useState } from 'react';
import { useAppStore } from '../store/appStore';
const AccessibilityContext = createContext(null);
export function useAccessibility() {
    const context = useContext(AccessibilityContext);
    if (!context) {
        throw new Error('useAccessibility must be used within AccessibilityProvider');
    }
    return context;
}
export function getAccessibilityPrefs() {
    try {
        const stored = localStorage.getItem('authshield-accessibility');
        if (stored) {
            return JSON.parse(stored);
        }
    }
    catch {
        // fall through to defaults
    }
    return {
        highContrast: false,
        reducedMotion: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false,
        fontSize: 'medium',
        keyboardNav: true,
        screenReader: false,
        dyslexiaFont: false,
        spacing: 'normal',
    };
}
export function updateAccessibilityPrefs(prefs) {
    localStorage.setItem('authshield-accessibility', JSON.stringify(prefs));
}
export function AccessibilityProvider({ children }) {
    const storePrefs = useAppStore((s) => s.accessibility);
    const updateStorePrefs = useAppStore((s) => s.updateAccessibility);
    const [preferences, setPreferences] = useState(storePrefs);
    const [announcerMessage, setAnnouncerMessage] = useState('');
    const [announcerPriority, setAnnouncerPriority] = useState('polite');
    const shortcutsRef = useRef(new Map());
    const announceTimeoutRef = useRef(undefined);
    const announce = useCallback((message, priority = 'polite') => {
        if (announceTimeoutRef.current)
            clearTimeout(announceTimeoutRef.current);
        setAnnouncerMessage('');
        setAnnouncerPriority(priority);
        requestAnimationFrame(() => {
            setAnnouncerMessage(message);
            announceTimeoutRef.current = setTimeout(() => setAnnouncerMessage(''), 1500);
        });
    }, []);
    const updatePreferences = useCallback((updates) => {
        setPreferences((prev) => {
            const next = { ...prev, ...updates };
            updateStorePrefs(next);
            updateAccessibilityPrefs(next);
            return next;
        });
    }, [updateStorePrefs]);
    const registerShortcut = useCallback((id, handler, keys) => {
        shortcutsRef.current.set(id, { handler, keys });
    }, []);
    const unregisterShortcut = useCallback((id) => {
        shortcutsRef.current.delete(id);
    }, []);
    useEffect(() => {
        const handleKeyDown = (e) => {
            for (const [, shortcut] of shortcutsRef.current) {
                const keyCombo = [];
                if (e.ctrlKey)
                    keyCombo.push('ctrl');
                if (e.altKey)
                    keyCombo.push('alt');
                if (e.shiftKey)
                    keyCombo.push('shift');
                if (e.metaKey)
                    keyCombo.push('meta');
                keyCombo.push(e.key.toLowerCase());
                const comboStr = keyCombo.join('+');
                if (shortcut.keys.includes(comboStr)) {
                    e.preventDefault();
                    shortcut.handler(e);
                }
            }
        };
        if (preferences.keyboardNav) {
            document.addEventListener('keydown', handleKeyDown);
        }
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [preferences.keyboardNav]);
    useEffect(() => {
        const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
        const handler = (e) => {
            updatePreferences({ reducedMotion: e.matches });
        };
        mql.addEventListener('change', handler);
        return () => mql.removeEventListener('change', handler);
    }, [updatePreferences]);
    useEffect(() => {
        const mql = window.matchMedia('(prefers-contrast: more)');
        const handler = (e) => {
            updatePreferences({ highContrast: e.matches });
        };
        mql.addEventListener('change', handler);
        return () => mql.removeEventListener('change', handler);
    }, [updatePreferences]);
    const value = {
        preferences,
        updatePreferences,
        announce,
        registerShortcut,
        unregisterShortcut,
    };
    return (_jsxs(AccessibilityContext.Provider, { value: value, children: [children, _jsx("div", { role: "status", "aria-live": announcerPriority, "aria-atomic": "true", className: "sr-only", children: announcerMessage })] }));
}
//# sourceMappingURL=AccessibilityProvider.js.map