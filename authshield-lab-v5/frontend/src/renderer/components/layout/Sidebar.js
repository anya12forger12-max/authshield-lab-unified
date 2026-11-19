import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { navigationConfig, navigationGroups, getNavItemsByGroup, getNavItemsByRole } from '../../navigation/navigationConfig';
import { useAppStore } from '../../store/appStore';
import { cn } from '../../utils/cn';
function NavIcon({ icon }) {
    const icons = {
        LayoutDashboard: (_jsxs("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("rect", { x: "3", y: "3", width: "7", height: "9", rx: "1" }), _jsx("rect", { x: "14", y: "3", width: "7", height: "5", rx: "1" }), _jsx("rect", { x: "14", y: "12", width: "7", height: "9", rx: "1" }), _jsx("rect", { x: "3", y: "16", width: "7", height: "5", rx: "1" })] })),
        Lock: (_jsxs("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }), _jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })] })),
        Users: (_jsxs("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }), _jsx("circle", { cx: "9", cy: "7", r: "4" }), _jsx("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }), _jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })] })),
        Monitor: (_jsxs("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("rect", { x: "2", y: "3", width: "20", height: "14", rx: "2", ry: "2" }), _jsx("line", { x1: "8", y1: "21", x2: "16", y2: "21" }), _jsx("line", { x1: "12", y1: "17", x2: "12", y2: "21" })] })),
        Swords: (_jsxs("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5" }), _jsx("line", { x1: "13", y1: "19", x2: "19", y2: "13" }), _jsx("line", { x1: "16", y1: "16", x2: "20", y2: "20" }), _jsx("line", { x1: "19", y1: "21", x2: "21", y2: "19" }), _jsx("polyline", { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5" }), _jsx("line", { x1: "5", y1: "14", x2: "9", y2: "18" }), _jsx("line", { x1: "7", y1: "17", x2: "4", y2: "20" }), _jsx("line", { x1: "3", y1: "19", x2: "5", y2: "21" })] })),
        Shield: (_jsx("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) })),
        BarChart3: (_jsxs("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("path", { d: "M18 20V10" }), _jsx("path", { d: "M12 20V4" }), _jsx("path", { d: "M6 20v-6" })] })),
        FileText: (_jsxs("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }), _jsx("polyline", { points: "14 2 14 8 20 8" }), _jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }), _jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }), _jsx("polyline", { points: "10 9 9 9 8 9" })] })),
        Clock: (_jsxs("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("polyline", { points: "12 6 12 12 16 14" })] })),
        FileBarChart: (_jsxs("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }), _jsx("polyline", { points: "14 2 14 8 20 8" }), _jsx("path", { d: "M8 13h2" }), _jsx("path", { d: "M8 17h2" }), _jsx("path", { d: "M14 13h2" }), _jsx("path", { d: "M14 17h2" })] })),
        GraduationCap: (_jsxs("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("path", { d: "M22 10v6M2 10l10-5 10 5-10 5z" }), _jsx("path", { d: "M6 12v5c3 3 6 3 6 3s3 0 6-3v-5" })] })),
        Settings: (_jsxs("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("circle", { cx: "12", cy: "12", r: "3" }), _jsx("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" })] })),
        HelpCircle: (_jsxs("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }), _jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })] })),
        Key: (_jsx("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) })),
    };
    return icons[icon] || icons.LayoutDashboard;
}
function SidebarItem({ item, collapsed }) {
    const location = useLocation();
    const navigate = useNavigate();
    const setSidebarActivePage = useAppStore((s) => s.setSidebarActivePage);
    const isActive = location.pathname === item.path || location.pathname.startsWith(`${item.path}/`);
    const handleClick = useCallback(() => {
        navigate(item.path);
        setSidebarActivePage(item.path);
    }, [item.path, navigate, setSidebarActivePage]);
    if (item.children && !collapsed) {
        return _jsx(SidebarGroup, { item: item, collapsed: collapsed });
    }
    return (_jsx("li", { children: _jsxs("button", { onClick: handleClick, className: cn('w-full flex items-center gap-3 px-3 py-2 rounded-[var(--radius-md)] text-[var(--font-size-sm)] font-medium transition-all duration-[var(--transition-fast)]', 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-1', isActive
                ? 'bg-[var(--color-primary-subtle)] text-[var(--color-primary)]'
                : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-text-primary)]'), "aria-current": isActive ? 'page' : undefined, title: collapsed ? item.label : undefined, children: [_jsx(NavIcon, { icon: item.icon }), !collapsed && _jsx("span", { className: "flex-1 text-left truncate", children: item.label }), !collapsed && item.badge !== undefined && (_jsx("span", { className: "bg-[var(--color-danger)] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center", children: item.badge }))] }) }));
}
function SidebarGroup({ item, collapsed }) {
    const [expanded, setExpanded] = useState(false);
    const location = useLocation();
    const hasActiveChild = item.children?.some((child) => location.pathname.startsWith(child.path));
    if (collapsed) {
        return (_jsx("li", { children: _jsx(SidebarItemCollapsed, { item: item }) }));
    }
    return (_jsxs("li", { children: [_jsxs("button", { onClick: () => setExpanded(!expanded), className: cn('w-full flex items-center gap-3 px-3 py-2 rounded-[var(--radius-md)] text-[var(--font-size-sm)] font-medium transition-all duration-[var(--transition-fast)]', 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-1', hasActiveChild
                    ? 'bg-[var(--color-primary-subtle)] text-[var(--color-primary)]'
                    : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-text-primary)]'), "aria-expanded": expanded, children: [_jsx(NavIcon, { icon: item.icon }), _jsx("span", { className: "flex-1 text-left truncate", children: item.label }), _jsx("svg", { className: cn('w-4 h-4 transition-transform', expanded && 'rotate-90'), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: _jsx("polyline", { points: "9 18 15 12 9 6" }) })] }), expanded && item.children && (_jsx("ul", { className: "ml-5 mt-1 space-y-0.5 border-l border-[var(--color-border)] pl-3", children: item.children.map((child) => (_jsx(SidebarItem, { item: child, collapsed: false }, child.id))) }))] }));
}
function SidebarItemCollapsed({ item }) {
    const location = useLocation();
    const navigate = useNavigate();
    const isActive = location.pathname === item.path || (item.children?.some((c) => location.pathname.startsWith(c.path)) ?? false);
    return (_jsxs("div", { className: "relative group", children: [_jsx("button", { onClick: () => navigate(item.path), className: cn('w-full flex items-center justify-center px-3 py-2 rounded-[var(--radius-md)] transition-all duration-[var(--transition-fast)]', 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-1', isActive
                    ? 'bg-[var(--color-primary-subtle)] text-[var(--color-primary)]'
                    : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-text-primary)]'), "aria-current": isActive ? 'page' : undefined, title: item.label, children: _jsx(NavIcon, { icon: item.icon }) }), _jsx("div", { className: "absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-[var(--color-text-primary)] text-[var(--color-text-inverse)] text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50", children: item.label })] }));
}
export function Sidebar() {
    const sidebarCollapsed = useAppStore((s) => s.sidebarCollapsed);
    const toggleSidebar = useAppStore((s) => s.toggleSidebar);
    const currentMode = useAppStore((s) => s.currentMode);
    const user = useAppStore((s) => s.user);
    const filteredItems = useMemo(() => {
        return getNavItemsByRole(navigationConfig, currentMode);
    }, [currentMode]);
    const groupedItems = useMemo(() => {
        return getNavItemsByGroup(filteredItems);
    }, [filteredItems]);
    return (_jsxs("aside", { id: "main-navigation", "aria-label": "Main navigation", className: cn('fixed top-0 left-0 h-screen bg-[var(--color-surface)] border-r border-[var(--color-border)] flex flex-col z-40 transition-all duration-[var(--transition-normal)]', sidebarCollapsed ? 'w-16' : 'w-64'), children: [_jsx("div", { className: cn('flex items-center h-16 border-b border-[var(--color-border-subtle)]', sidebarCollapsed ? 'justify-center px-2' : 'px-4'), children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-8 h-8 rounded-[var(--radius-md)] bg-[var(--color-primary)] flex items-center justify-center", children: _jsx(Shield, { className: "w-5 h-5 text-white" }) }), !sidebarCollapsed && (_jsx("span", { className: "text-[var(--font-size-lg)] font-bold text-[var(--color-text-primary)] truncate", children: "AuthShield" }))] }) }), _jsx("nav", { className: "flex-1 overflow-y-auto py-3 px-2", "aria-label": "Sidebar navigation", children: navigationGroups.map((group) => {
                    const groupItems = groupedItems[group.id];
                    if (!groupItems || groupItems.length === 0)
                        return null;
                    return (_jsxs("div", { className: "mb-4", children: [!sidebarCollapsed && (_jsx("h3", { className: "px-3 mb-1 text-[var(--font-size-2xs)] font-semibold uppercase tracking-wider text-[var(--color-text-muted)]", children: group.label })), _jsx("ul", { className: "space-y-0.5", role: "list", children: groupItems.map((item) => (_jsx(SidebarItem, { item: item, collapsed: sidebarCollapsed }, item.id))) })] }, group.id));
                }) }), _jsxs("div", { className: cn('border-t border-[var(--color-border-subtle)] p-2', sidebarCollapsed && 'px-1'), children: [_jsxs("button", { onClick: toggleSidebar, className: "w-full flex items-center justify-center gap-2 px-3 py-2 rounded-[var(--radius-md)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-text-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]", "aria-label": sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar', children: [_jsxs("svg", { className: cn('w-5 h-5 transition-transform', sidebarCollapsed && 'rotate-180'), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: [_jsx("polyline", { points: "11 17 6 12 11 7" }), _jsx("polyline", { points: "18 17 13 12 18 7" })] }), !sidebarCollapsed && _jsx("span", { className: "text-sm", children: "Collapse" })] }), user && !sidebarCollapsed && (_jsxs("div", { className: "flex items-center gap-3 px-3 py-2 mt-1", children: [_jsx("div", { className: "w-8 h-8 rounded-full bg-[var(--color-primary-subtle)] flex items-center justify-center", children: _jsx("span", { className: "text-[var(--font-size-sm)] font-semibold text-[var(--color-primary)]", children: user.displayName.charAt(0).toUpperCase() }) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("p", { className: "text-[var(--font-size-sm)] font-medium text-[var(--color-text-primary)] truncate", children: user.displayName }), _jsx("p", { className: "text-[var(--font-size-xs)] text-[var(--color-text-muted)] capitalize", children: currentMode })] })] }))] })] }));
}
function Shield({ className }) {
    return (_jsx("svg", { className: className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }));
}
//# sourceMappingURL=Sidebar.js.map