import type { Theme } from '../types';
export interface ThemeColors {
    primary: string;
    'primary-hover': string;
    'primary-active': string;
    'primary-subtle': string;
    secondary: string;
    'secondary-hover': string;
    'secondary-active': string;
    'secondary-subtle': string;
    success: string;
    'success-subtle': string;
    warning: string;
    'warning-subtle': string;
    danger: string;
    'danger-subtle': string;
    info: string;
    'info-subtle': string;
    background: string;
    surface: string;
    'surface-elevated': string;
    'surface-sunken': string;
    'text-primary': string;
    'text-secondary': string;
    'text-muted': string;
    'text-inverse': string;
    border: string;
    'border-subtle': string;
    'border-strong': string;
    'focus-ring': string;
    overlay: string;
    accent: string;
    'accent-subtle': string;
}
export interface ThemeTypography {
    fontFamily: {
        body: string;
        mono: string;
        display: string;
    };
    fontSize: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    fontWeight: {
        normal: number;
        medium: number;
        semibold: number;
        bold: number;
    };
    lineHeight: {
        tight: string;
        normal: string;
        relaxed: string;
    };
}
export interface ThemeSpacing {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
}
export interface ThemeAnimations {
    duration: {
        fast: string;
        normal: string;
        slow: string;
    };
    easing: {
        default: string;
        in: string;
        out: string;
        inOut: string;
    };
    reduceMotion: boolean;
}
export interface ThemeConfig {
    name: Theme;
    colors: ThemeColors;
    typography: ThemeTypography;
    spacing: ThemeSpacing;
    radius: {
        sm: string;
        md: string;
        lg: string;
        full: string;
    };
    shadows: {
        sm: string;
        md: string;
        lg: string;
        focus: string;
    };
    animations: ThemeAnimations;
}
export declare const lightTheme: ThemeConfig;
export declare const darkTheme: ThemeConfig;
export declare const highContrastDarkTheme: ThemeConfig;
export declare const highContrastLightTheme: ThemeConfig;
declare const themes: Record<Theme, ThemeConfig>;
export declare function getTheme(theme: Theme): ThemeConfig;
export declare function applyTheme(config: ThemeConfig): void;
export declare function customizeAccent(baseTheme: ThemeConfig, accentColor: string): ThemeConfig;
export { themes };
export declare class ThemeProvider {
    private currentTheme;
    private listeners;
    private mediaQuery;
    constructor();
    private handleSystemChange;
    private emitChange;
    getTheme(): Theme;
    setTheme(theme: Theme): void;
    getResolvedTheme(): 'light' | 'dark';
    subscribe(listener: (theme: ThemeConfig) => void): () => void;
    destroy(): void;
}
//# sourceMappingURL=theme-engine.d.ts.map