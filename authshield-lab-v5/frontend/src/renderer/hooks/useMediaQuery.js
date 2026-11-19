import { useCallback, useSyncExternalStore } from 'react';
export function useMediaQuery(query) {
    const subscribe = useCallback((onStoreChange) => {
        if (typeof window === 'undefined')
            return () => { };
        const mediaQuery = window.matchMedia(query);
        mediaQuery.addEventListener('change', onStoreChange);
        return () => mediaQuery.removeEventListener('change', onStoreChange);
    }, [query]);
    const getSnapshot = useCallback(() => {
        if (typeof window === 'undefined')
            return false;
        return window.matchMedia(query).matches;
    }, [query]);
    return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
export function useIsMobile() {
    return useMediaQuery('(max-width: 640px)');
}
export function useIsTablet() {
    return useMediaQuery('(min-width: 641px) and (max-width: 1024px)');
}
export function useIsDesktop() {
    return useMediaQuery('(min-width: 1025px)');
}
export function usePrefersReducedMotion() {
    return useMediaQuery('(prefers-reduced-motion: reduce)');
}
export function usePrefersDarkMode() {
    return useMediaQuery('(prefers-color-scheme: dark)');
}
//# sourceMappingURL=useMediaQuery.js.map