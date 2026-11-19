import { type RefObject } from 'react';
interface UseFocusTrapReturn {
    containerRef: RefObject<HTMLDivElement | null>;
    focusFirst: () => void;
    focusLast: () => void;
}
export declare function useFocusTrap(isActive?: boolean): UseFocusTrapReturn;
export {};
//# sourceMappingURL=useFocusTrap.d.ts.map