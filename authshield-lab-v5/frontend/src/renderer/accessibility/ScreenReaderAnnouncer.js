import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
const ScreenReaderContext = createContext(null);
export function useScreenReader() {
    const context = useContext(ScreenReaderContext);
    if (!context) {
        throw new Error('useScreenReader must be used within ScreenReaderAnnouncer');
    }
    return context;
}
let nextId = 0;
export function ScreenReaderAnnouncer({ children }) {
    const [announcements, setAnnouncements] = useState([]);
    const timeoutRefs = useRef(new Map());
    const announce = useCallback((message, priority = 'polite') => {
        const id = nextId++;
        const announcement = { id, message, priority };
        setAnnouncements((prev) => {
            if (priority === 'assertive') {
                return [announcement];
            }
            return [...prev, announcement];
        });
        const timeout = setTimeout(() => {
            setAnnouncements((prev) => prev.filter((a) => a.id !== id));
            timeoutRefs.current.delete(id);
        }, 2000);
        timeoutRefs.current.set(id, timeout);
    }, []);
    useEffect(() => {
        return () => {
            timeoutRefs.current.forEach((timeout) => clearTimeout(timeout));
            timeoutRefs.current.clear();
        };
    }, []);
    const value = { announce };
    const politeMessages = announcements.filter((a) => a.priority === 'polite');
    const assertiveMessages = announcements.filter((a) => a.priority === 'assertive');
    return (_jsxs(ScreenReaderContext.Provider, { value: value, children: [children, _jsxs("div", { className: "sr-only", children: [_jsx("div", { role: "log", "aria-live": "polite", "aria-atomic": "true", "data-testid": "sr-polite", children: politeMessages.map((a) => (_jsx("span", { children: a.message }, a.id))) }), _jsx("div", { role: "log", "aria-live": "assertive", "aria-atomic": "true", "data-testid": "sr-assertive", children: assertiveMessages.map((a) => (_jsx("span", { children: a.message }, a.id))) })] })] }));
}
//# sourceMappingURL=ScreenReaderAnnouncer.js.map