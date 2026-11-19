import type { NavItem } from '../types';
export declare const navigationConfig: NavItem[];
export declare const navigationGroups: {
    id: string;
    label: string;
}[];
export declare function getNavItemsByGroup(items: NavItem[]): Record<string, NavItem[]>;
export declare function getNavItemsByRole(items: NavItem[], role: string): NavItem[];
//# sourceMappingURL=navigationConfig.d.ts.map