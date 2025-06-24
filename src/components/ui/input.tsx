// Import global from third party libraries.
import * as React from 'react';

// Import custom utility classes.
import { cn } from '@/src/lib/utils';

// Import custom types.

// Import custom components.

// Import styles.

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
    // eslint-disable-next-line react/prop-types
    ({ className, type, ...props }, ref) => (
        <input
            type={type}
            className={cn(
                'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                className
            )}
            ref={ref}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        />
    )
);
Input.displayName = 'Input';

// eslint-disable-next-line import/prefer-default-export
export { Input };
