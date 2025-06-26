/**
 * This file defines TypeScript types for the application.
 */

interface LayoutProps {
    children: React.ReactNode;
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
}

export type { Country };

export default LayoutProps;
