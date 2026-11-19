import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import { useAppStore } from '../store/appStore';
import { getTheme, applyTheme } from '../themes/theme-engine';
const AppContext = createContext(null);
export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within AppProvider');
    }
    return context;
}
export function AppProvider({ children }) {
    const { theme, accessibility } = useAppStore();
    const [announcer, setAnnouncer] = useState({
        message: '',
        priority: 'polite',
    });
    const announceTimeoutRef = useRef(undefined);
    const announce = useCallback((message, priority = 'polite') => {
        if (announceTimeoutRef.current) {
            clearTimeout(announceTimeoutRef.current);
        }
        setAnnouncer({ message: '', priority });
        requestAnimationFrame(() => {
            setAnnouncer({ message, priority });
            announceTimeoutRef.current = setTimeout(() => {
                setAnnouncer({ message: '', priority });
            }, 1000);
        });
    }, []);
    useEffect(() => {
        const config = getTheme(theme);
        applyTheme(config);
    }, [theme]);
    useEffect(() => {
        const root = document.documentElement;
        if (accessibility.reducedMotion) {
            root.style.setProperty('--duration-fast', '0ms');
            root.style.setProperty('--duration-normal', '0ms');
            root.style.setProperty('--duration-slow', '0ms');
        }
        else {
            root.style.removeProperty('--duration-fast');
            root.style.removeProperty('--duration-normal');
            root.style.removeProperty('--duration-slow');
        }
    }, [accessibility.reducedMotion]);
    useEffect(() => {
        const fontSizeMap = {
            small: '14px',
            medium: '16px',
            large: '18px',
            'extra-large': '20px',
        };
        document.documentElement.style.fontSize = fontSizeMap[accessibility.fontSize] || '16px';
    }, [accessibility.fontSize]);
    useEffect(() => {
        const spacingMap = {
            compact: '0.85',
            normal: '1',
            relaxed: '1.15',
        };
        document.documentElement.style.lineHeight = spacingMap[accessibility.spacing] || '1';
    }, [accessibility.spacing]);
    const value = { announce, accessibility };
    return (_jsxs(AppContext.Provider, { value: value, children: [children, _jsx("div", { role: "status", "aria-live": announcer.priority, "aria-atomic": "true", className: "sr-only", children: announcer.message })] }));
}
//# sourceMappingURL=AppContext.js.map