// Import global from third party libraries.
import React from 'react';

// Import types.
import { MarqueeProps } from '@/src/lib/types';

/**
 * Marquee component for horizontal scrolling text or elements.
 */
export default function Marquee({
    children,
    speed = 20,
    className = '',
    direction = 'left',
    start = 'start'
}: MarqueeProps) {
    let animationClass = 'animate-marquee';
    if (direction === 'right') animationClass = 'animate-marquee-right';
    if (start === 'center' && direction === 'left')
        animationClass = 'animate-marquee-center-left';
    if (start === 'center' && direction === 'right')
        animationClass = 'animate-marquee-center-right';

    return (
        <div
            className={`w-full overflow-hidden whitespace-nowrap ${className}`}
        >
            <div
                className={`inline-block will-change-transform ${animationClass}`}
                style={{ animationDuration: `${speed}s` }}
            >
                <span className="mx-8 inline-block" aria-hidden="true">
                    {children}
                </span>
            </div>
        </div>
    );
}
