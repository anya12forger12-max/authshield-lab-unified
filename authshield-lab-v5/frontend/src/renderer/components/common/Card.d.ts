import type React from 'react';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'elevated' | 'outlined';
    interactive?: boolean;
    as?: 'div' | 'article' | 'section';
}
export declare function Card({ variant, interactive, as: Component, className, children, ...props }: CardProps): React.JSX.Element;
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: 'div' | 'header';
}
export declare function CardHeader({ as: Component, className, children, ...props }: CardHeaderProps): React.JSX.Element;
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: 'h1' | 'h2' | 'h3' | 'h4';
}
export declare function CardTitle({ as: Component, className, children, ...props }: CardTitleProps): React.JSX.Element;
export type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
export declare function CardDescription({ className, children, ...props }: CardDescriptionProps): React.JSX.Element;
export declare function CardBody({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: 'div' | 'footer';
}
export declare function CardFooter({ as: Component, className, children, ...props }: CardFooterProps): React.JSX.Element;
//# sourceMappingURL=Card.d.ts.map