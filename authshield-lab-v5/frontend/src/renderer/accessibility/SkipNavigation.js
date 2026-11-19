import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function SkipNavigation() {
    return (_jsxs("div", { className: "sr-only-focusable", children: [_jsx("a", { href: "#main-content", className: "skip-link", onFocus: (e) => {
                    e.currentTarget.classList.remove('sr-only');
                }, onBlur: (e) => {
                    e.currentTarget.classList.add('sr-only');
                }, children: "Skip to main content" }), _jsx("a", { href: "#main-navigation", className: "skip-link", style: { left: '200px' }, onFocus: (e) => {
                    e.currentTarget.classList.remove('sr-only');
                }, onBlur: (e) => {
                    e.currentTarget.classList.add('sr-only');
                }, children: "Skip to navigation" })] }));
}
//# sourceMappingURL=SkipNavigation.js.map