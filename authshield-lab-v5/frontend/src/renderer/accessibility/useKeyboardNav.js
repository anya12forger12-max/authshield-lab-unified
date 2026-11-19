import { useCallback, useRef, useEffect, useState } from 'react';
export function useKeyboardNav(containerRef, _itemCount, options = {}) {
    const { orientation = 'vertical', loop = true, typeAhead = true } = options;
    const [focusedIndex, setFocusedIndex] = useState(0);
    const focusedIndexRef = useRef(0);
    const typeAheadBufferRef = useRef('');
    const typeAheadTimeoutRef = useRef(undefined);
    const getFocusableItems = useCallback(() => {
        if (!containerRef.current)
            return [];
        return Array.from(containerRef.current.querySelectorAll('[data-keyboard-item]'));
    }, [containerRef]);
    const focusItem = useCallback((index) => {
        const items = getFocusableItems();
        if (items.length === 0)
            return;
        const clampedIndex = loop
            ? ((index % items.length) + items.length) % items.length
            : Math.max(0, Math.min(index, items.length - 1));
        focusedIndexRef.current = clampedIndex;
        setFocusedIndex(clampedIndex);
        items[clampedIndex]?.focus();
    }, [getFocusableItems, loop]);
    const handleKeyDown = useCallback((e) => {
        const items = getFocusableItems();
        if (items.length === 0)
            return;
        const currentFocus = items.findIndex((item) => item === document.activeElement || item.contains(document.activeElement));
        const currentIndex = currentFocus >= 0 ? currentFocus : focusedIndexRef.current;
        let nextIndex = null;
        switch (e.key) {
            case 'ArrowDown':
                if (orientation === 'vertical' || orientation === 'both') {
                    e.preventDefault();
                    nextIndex = currentIndex + 1;
                }
                break;
            case 'ArrowUp':
                if (orientation === 'vertical' || orientation === 'both') {
                    e.preventDefault();
                    nextIndex = currentIndex - 1;
                }
                break;
            case 'ArrowRight':
                if (orientation === 'horizontal' || orientation === 'both') {
                    e.preventDefault();
                    nextIndex = currentIndex + 1;
                }
                break;
            case 'ArrowLeft':
                if (orientation === 'horizontal' || orientation === 'both') {
                    e.preventDefault();
                    nextIndex = currentIndex - 1;
                }
                break;
            case 'Home':
                e.preventDefault();
                nextIndex = 0;
                break;
            case 'End':
                e.preventDefault();
                nextIndex = items.length - 1;
                break;
            case 'Enter':
            case ' ':
                e.preventDefault();
                items[currentIndex]?.click();
                break;
            default:
                if (typeAhead && e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
                    if (typeAheadTimeoutRef.current)
                        clearTimeout(typeAheadTimeoutRef.current);
                    typeAheadBufferRef.current += e.key.toLowerCase();
                    const matchIndex = items.findIndex((item) => {
                        const text = item.textContent?.toLowerCase().trim() ?? '';
                        return text.startsWith(typeAheadBufferRef.current);
                    });
                    if (matchIndex >= 0) {
                        e.preventDefault();
                        nextIndex = matchIndex;
                    }
                    typeAheadTimeoutRef.current = setTimeout(() => {
                        typeAheadBufferRef.current = '';
                    }, 500);
                }
                break;
        }
        if (nextIndex !== null) {
            focusItem(nextIndex);
        }
    }, [getFocusableItems, focusItem, orientation, typeAhead]);
    useEffect(() => {
        return () => {
            if (typeAheadTimeoutRef.current)
                clearTimeout(typeAheadTimeoutRef.current);
        };
    }, []);
    return {
        handleKeyDown,
        focusItem,
        focusedIndex,
    };
}
//# sourceMappingURL=useKeyboardNav.js.map