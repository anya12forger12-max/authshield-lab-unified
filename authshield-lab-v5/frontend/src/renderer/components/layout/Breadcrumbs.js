import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { navigationConfig } from '../../navigation/navigationConfig';
import { cn } from '../../utils/cn';
function findNavItemByPath(path, items = navigationConfig) {
    for (const item of items) {
        if (item.path === path) {
            return { label: item.label, path: item.path };
        }
        if (item.children) {
            const found = findNavItemByPath(path, item.children);
            if (found)
                return found;
        }
    }
    return null;
}
function generateBreadcrumbs(pathname) {
    if (pathname === '/dashboard') {
        return [{ label: 'Dashboard', path: '/dashboard', isCurrent: true }];
    }
    const segments = pathname.split('/').filter(Boolean);
    const crumbs = [];
    for (let i = 0; i < segments.length; i++) {
        const path = `/${segments.slice(0, i + 1).join('/')}`;
        const navItem = findNavItemByPath(path);
        crumbs.push({
            label: navItem?.label || segments[i].charAt(0).toUpperCase() + segments[i].slice(1).replace(/-/g, ' '),
            path,
            isCurrent: i === segments.length - 1,
        });
    }
    return crumbs;
}
export function Breadcrumbs() {
    const location = useLocation();
    const crumbs = generateBreadcrumbs(location.pathname);
    if (crumbs.length <= 1)
        return null;
    return (_jsx("nav", { "aria-label": "Breadcrumb", className: "min-w-0", children: _jsx("ol", { className: "flex items-center gap-1 text-[var(--font-size-sm)] min-w-0", children: crumbs.map((crumb, index) => {
                const isLast = index === crumbs.length - 1;
                const isMiddle = crumbs.length > 4 && index > 0 && index < crumbs.length - 2 && !isLast;
                if (isMiddle) {
                    if (index === 1) {
                        return (_jsxs(React.Fragment, { children: [_jsx("li", { "aria-hidden": "true", className: "text-[var(--color-text-muted)]", children: _jsxs("svg", { className: "w-4 h-4", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("circle", { cx: "12", cy: "12", r: "1", fill: "currentColor" }), _jsx("circle", { cx: "19", cy: "12", r: "1", fill: "currentColor" }), _jsx("circle", { cx: "5", cy: "12", r: "1", fill: "currentColor" })] }) }), _jsx("li", { children: _jsx("span", { className: "text-[var(--color-text-muted)]", "aria-hidden": "true", children: "..." }) })] }, crumb.path));
                    }
                    return null;
                }
                return (_jsxs("li", { className: "flex items-center gap-1 min-w-0", children: [index > 0 && (_jsx("svg", { className: "w-4 h-4 shrink-0 text-[var(--color-text-muted)]", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: _jsx("polyline", { points: "9 18 15 12 9 6" }) })), isLast ? (_jsx("span", { className: "font-medium text-[var(--color-text-primary)] truncate", "aria-current": "page", children: crumb.label })) : (_jsx(Link, { to: crumb.path, className: cn('text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors truncate', 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-1 rounded'), children: crumb.label }))] }, crumb.path));
            }) }) }));
}
//# sourceMappingURL=Breadcrumbs.js.map