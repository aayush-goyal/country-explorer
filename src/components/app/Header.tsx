'use client';

// Import global from third party libraries.
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Import custom components.
import { Button } from '@/src/components/ui/button';

// Import custom utilities.

// Import custom types.

// Import styles.

/**
 * Description
 */
export default function Header() {
    // SECTION: States and Constants
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const router = useRouter();
    // !SECTION

    // SECTION: API Queries
    // !SECTION

    // SECTION: Event Handlers
    const handleLogout = () => {
        // Clear authentication details from local storage
        localStorage.removeItem('authDetails');
        // Clear favorites from local storage
        localStorage.removeItem('favorites');
        // Redirect to login page
        router.push('/login');
    };
    // !SECTION

    // SECTION: Side Effects
    useEffect(() => {
        // Check if user is authenticated
        const authDetails = localStorage.getItem('authDetails');
        if (authDetails) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);
    // !SECTION

    // SECTION: UI
    // !SECTION
    return (
        <div className="flex w-full items-center justify-between bg-ash-gray-light px-8 py-2">
            <div className="flex items-center space-x-8">
                <Link href="/">
                    <p className="group relative">
                        Home
                        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
                    </p>
                </Link>
                <Link href="/favorites">
                    <p className="group relative">
                        Favorites
                        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
                    </p>
                </Link>
            </div>
            {isAuthenticated && (
                <Button
                    variant="link"
                    onClick={() => handleLogout()}
                    className="tracking-[1px]"
                >
                    LOGOUT
                </Button>
            )}
        </div>
    );
}
