/**
 * This file defines TypeScript types for the application.
 */

interface LayoutProps {
    children: React.ReactNode;
}

interface MarqueeProps {
    children: React.ReactNode;
    speed?: number; // in seconds
    className?: string;
    direction?: 'left' | 'right';
    start?: 'start' | 'center';
}

interface Country {
    capital: string[];
    flags: {
        alt: string;
        png: string;
        svg: string;
    };
    name: {
        common: string;
    };
    population: number;
    region: string;
}

export type { Country, LayoutProps, MarqueeProps };
