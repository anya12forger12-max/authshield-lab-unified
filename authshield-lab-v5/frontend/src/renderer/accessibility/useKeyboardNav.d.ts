import { type RefObject } from 'react';
interface UseKeyboardNavOptions {
    orientation?: 'horizontal' | 'vertical' | 'both';
    loop?: boolean;
    typeAhead?: boolean;
}
interface UseKeyboardNavReturn {
    handleKeyDown: (e: React.KeyboardEvent) => void;
    focusItem: (index: number) => void;
    focusedIndex: number;
}
export declare function useKeyboardNav(containerRef: RefObject<HTMLElement>, _itemCount: number, options?: UseKeyboardNavOptions): UseKeyboardNavReturn;
export {};
//# sourceMappingURL=useKeyboardNav.d.ts.map