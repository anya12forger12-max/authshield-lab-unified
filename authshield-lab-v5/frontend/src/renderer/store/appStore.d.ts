import type { Theme, UserRole, Notification, AccessibilityPreferences, BreadcrumbItem } from '../types';
export interface AppState {
    theme: Theme;
    sidebarCollapsed: boolean;
    sidebarActivePage: string;
    currentMode: UserRole;
    notifications: Notification[];
    unreadNotificationCount: number;
    searchQuery: string;
    searchOpen: boolean;
    breadcrumbs: BreadcrumbItem[];
    user: {
        id: string;
        username: string;
        displayName: string;
        email: string;
        avatar?: string;
        role: UserRole;
    } | null;
    accessibility: AccessibilityPreferences;
}
export interface AppActions {
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
    toggleSidebar: () => void;
    setSidebarCollapsed: (collapsed: boolean) => void;
    setSidebarActivePage: (page: string) => void;
    setCurrentMode: (mode: UserRole) => void;
    addNotification: (notification: Notification) => void;
    markNotificationRead: (id: string) => void;
    markAllNotificationsRead: () => void;
    clearNotifications: () => void;
    removeNotification: (id: string) => void;
    setSearchQuery: (query: string) => void;
    setSearchOpen: (open: boolean) => void;
    setBreadcrumbs: (breadcrumbs: BreadcrumbItem[]) => void;
    updateUser: (updates: Partial<AppState['user']>) => void;
    updateAccessibility: (updates: Partial<AccessibilityPreferences>) => void;
    reset: () => void;
}
export declare const useAppStore: import("zustand").UseBoundStore<import("zustand").StoreApi<AppState & AppActions>>;
//# sourceMappingURL=appStore.d.ts.map