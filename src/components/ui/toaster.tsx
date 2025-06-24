'use client';

// Import global from third party libraries.

// Import custom utility classes.
import { useToast } from '@/src/lib/hooks/use-toast';

// Import custom types.

// Import custom components.
import {
    Toast,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport
} from '@/src/components/ui/toast';

// Import styles.

// eslint-disable-next-line import/prefer-default-export
export function Toaster() {
    const { toasts } = useToast();

    return (
        <ToastProvider>
            {toasts.map(({ id, title, description, action, ...props }) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <Toast key={id} {...props}>
                    <div className="grid gap-1">
                        {title && <ToastTitle>{title}</ToastTitle>}
                        {description && (
                            <ToastDescription>{description}</ToastDescription>
                        )}
                    </div>
                    {action}
                    <ToastClose />
                </Toast>
            ))}
            <ToastViewport />
        </ToastProvider>
    );
}
