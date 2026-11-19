import { useRef, useEffect, useCallback } from 'react';
const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
export function useFocusTrap(isActive = true) {
    const containerRef = useRef(null);
    const previousFocusRef = useRef(null);
    const getFocusableElements = useCallback(() => {
        if (!containerRef.current)
            return [];
        return Array.from(containerRef.current.querySelectorAll(FOCUSABLE_SELECTOR));
    }, []);
    const focusFirst = useCallback(() => {
        const elements = getFocusableElements();
        if (elements.length > 0) {
            elements[0].focus();
        }
    }, [getFocusableElements]);
    const focusLast = useCallback(() => {
        const elements = getFocusableElements();
        if (elements.length > 0) {
            elements[elements.length - 1].focus();
        }
    }, [getFocusableElements]);
    useEffect(() => {
        if (!isActive)
            return;
        previousFocusRef.current = document.activeElement;
        requestAnimationFrame(() => focusFirst());
        return () => {
            if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
                previousFocusRef.current.focus();
            }
        };
    }, [isActive, focusFirst]);
    useEffect(() => {
        if (!isActive)
            return;
        const handleKeyDown = (e) => {
            if (e.key !== 'Tab')
                return;
            const elements = getFocusableElements();
            if (elements.length === 0) {
                e.preventDefault();
                return;
            }
            const first = elements[0];
            const last = elements[elements.length - 1];
            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            }
            else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isActive, getFocusableElements]);
    return { containerRef, focusFirst, focusLast };
}
//# sourceMappingURL=useFocusTrap.js.map