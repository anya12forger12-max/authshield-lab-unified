import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
export declare const Modal: React.FC<DialogPrimitive.DialogProps>;
export declare const ModalTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export declare const ModalClose: React.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
export declare const ModalPortal: React.FC<DialogPrimitive.DialogPortalProps>;
export type ModalOverlayProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>;
export declare const ModalOverlay: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export interface ModalContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}
export declare const ModalContent: React.ForwardRefExoticComponent<ModalContentProps & React.RefAttributes<HTMLDivElement>>;
export type ModalHeaderProps = React.HTMLAttributes<HTMLDivElement>;
export declare function ModalHeader({ className, ...props }: ModalHeaderProps): React.JSX.Element;
export type ModalTitleProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;
export declare const ModalTitle: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
export type ModalDescriptionProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;
export declare const ModalDescription: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
export declare function ModalFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
//# sourceMappingURL=Modal.d.ts.map