'use client';

// Import global from third party libraries.
// eslint-disable-next-line camelcase
import localFont from 'next/font/local';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// Import custom styles.

// Import custom utility classes.
import RQProviders from '@/src/lib/providers';

// Import custom types.
import LayoutProps from '@/src/lib/types';

// Import custom components.
import Header from '@/src/components/app/Header';
import { Toaster } from '@/src/components/ui/toaster';

// Import styles.
import './globals.css';

const clashGrotesk = localFont({
    src: [
        {
            path: './../../public/fonts/clash_grotesk/ClashGrotesk-ExtraLight.otf',
            weight: '200',
            style: 'normal'
        },
        {
            path: './../../public/fonts/clash_grotesk/ClashGrotesk-Light.otf',
            weight: '300',
            style: 'normal'
        },
        {
            path: './../../public/fonts/clash_grotesk/ClashGrotesk-Regular.otf',
            weight: '400',
            style: 'normal'
        },
        {
            path: './../../public/fonts/clash_grotesk/ClashGrotesk-Medium.otf',
            weight: '500',
            style: 'normal'
        },
        {
            path: './../../public/fonts/clash_grotesk/ClashGrotesk-Semibold.otf',
            weight: '600',
            style: 'normal'
        },
        {
            path: './../../public/fonts/clash_grotesk/ClashGrotesk-Bold.otf',
            weight: '700',
            style: 'normal'
        }
    ]
});

/**
 */
export default function RootLayout(props: LayoutProps) {
    // SECTION: States and Constants
    const [showHeader, setShowHeader] = useState<boolean>(false);
    const pathname = usePathname();
    // !SECTION

    // SECTION: Side Effects

    useEffect(() => {
        if (pathname !== '/login') {
            setShowHeader(true);
        }
    }, []);
    // !SECTION

    // SECTION: UI
    return (
        <html lang="en" className={clashGrotesk.className}>
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Where Next?</title>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className="h-screen max-h-screen bg-amber-10 dark:bg-metal-100">
                <RQProviders>
                    {showHeader && <Header />}
                    <div className="mx-8">{props.children}</div>
                </RQProviders>
                <Toaster />
            </body>
        </html>
    );
    //! SECTION
}
