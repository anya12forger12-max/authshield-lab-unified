import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { SkipNavigation } from '../../accessibility/SkipNavigation';
import { useAppStore } from '../../store/appStore';
import { cn } from '../../utils/cn';
export function AppLayout({ children }) {
    const sidebarCollapsed = useAppStore((s) => s.sidebarCollapsed);
    return (_jsxs("div", { className: "flex h-screen overflow-hidden bg-[var(--color-background)]", children: [_jsx(SkipNavigation, {}), _jsx(Sidebar, {}), _jsxs("div", { className: cn('flex flex-col flex-1 min-w-0 transition-all duration-[var(--transition-normal)]', sidebarCollapsed ? 'ml-16' : 'ml-64'), children: [_jsx(Header, {}), _jsx("main", { id: "main-content", role: "main", className: "flex-1 overflow-y-auto p-6", tabIndex: -1, children: children })] })] }));
}
//# sourceMappingURL=AppLayout.js.map