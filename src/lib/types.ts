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
    cca2?: string;
    cca3: string;
    capital: string[];
    flags: {
        alt: string;
        png: string;
        svg: string;
    };
    name: {
        common: string;
        official: string;
        nativeName?: any;
    };
    population: number;
    region: string;
    subregion?: string;
    tld?: string[];
    ccn3?: string;
    cioc?: string;
    independent?: boolean;
    status?: string;
    currencies?: {
        [key: string]: {
            symbol: string;
            name: string;
        };
    };
    languages?: {
        [key: string]: string;
    };
    latlng: number[];
    landlocked?: boolean;
    borders?: string[];
    timezones?: string[];
    continents?: string[];
}

export type { Country, LayoutProps, MarqueeProps };
