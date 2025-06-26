'use client';

// Import global from third party libraries.
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Import custom components.
import Loading from '@/src/components/app/Loading';

// Import custom utilities.

// Import custom types.

// Import styles.

/**
 * This function renders the Favorites page on the UI.
 */
export default function Favorites() {
    // SECTION: States and Constants
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const router = useRouter();
    // !SECTION

    // SECTION: API Queries
    // !SECTION

    // SECTION: Event Handlers
    // !SECTION

    // SECTION: Side Effects
    useEffect(() => {
        // Check if the user is authenticated
        const authDetails = localStorage.getItem('authDetails');
        if (!authDetails) {
            setIsLoading(false);
            router.push('/login');
        } else {
            // TODO: Fetch favorite countries from local storage
        }
    }, []);
    // !SECTION

    // SECTION: UI
    // !SECTION
    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <div>
                    <p>Favorites</p>
                </div>
            )}
        </div>
    );
}
