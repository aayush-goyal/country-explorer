'use client';

// Import global from third party libraries.
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Import custom components.
import { Button } from '@/src/components/ui/button';
import CountryListItem from '@/src/components/app/CountryListItem';
import Loading from '@/src/components/app/Loading';

// Import custom utilities.
import { useIsMobile } from '@/src/lib/hooks/use-mobile';

// Import custom types.
import { Country } from '@/src/lib/types';

// Import styles.

/**
 * This function renders the Favorites page on the UI.
 */
export default function Favorites() {
    // SECTION: States and Constants
    const tableHeadings = [
        'Bookmarked?',
        'Flag',
        'Name',
        'Capital',
        'Region',
        'Population',
        'Know More'
    ];
    const [favorites, setFavorites] = useState<Country[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const isMobile = useIsMobile();
    const router = useRouter();
    // !SECTION

    // SECTION: API Queries
    // !SECTION

    // SECTION: Event Handlers
    const handleCountryClick = (countryCode: string) => {
        // Check if the user is authenticated
        const authDetails = localStorage.getItem('authDetails');
        if (!authDetails) {
            router.push('/login');
        } else {
            // Navigate to the country detail page
            router.push(`/country/${countryCode}`);
        }
    };
    // !SECTION

    // SECTION: Side Effects
    useEffect(() => {
        // Check if the user is authenticated
        const authDetails = localStorage.getItem('authDetails');
        if (!authDetails) {
            setIsLoading(false);
            router.push('/login');
        } else {
            const favoriteCountries = localStorage.getItem('favorites');
            if (favoriteCountries) {
                // Parse the favorites and set them in state
                const parsedFavorites = JSON.parse(favoriteCountries);
                setFavorites(parsedFavorites);
            } else {
                // If no favorites are found, initialize with an empty array
                setFavorites([]);
            }

            setIsLoading(false);
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
                    {favorites.length > 0 ? (
                        <div className="mt-8">
                            <h1 className="mb-8 text-center text-h1 lg:text-left">
                                Your Favorites
                            </h1>
                            {!isMobile && (
                                <div className="grid grid-cols-7 items-center justify-items-center">
                                    {tableHeadings.map((heading) => (
                                        <p
                                            key={heading}
                                            className="font-medium"
                                        >
                                            {heading}
                                        </p>
                                    ))}
                                </div>
                            )}
                            {favorites.map((country) => (
                                <CountryListItem
                                    key={country.cca3}
                                    countryDetails={country}
                                    onClick={() =>
                                        handleCountryClick(country.cca3)
                                    }
                                    onBookmarkChange={setFavorites}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="mt-40 flex flex-col items-center">
                            <h1 className="text-h1">No lands man!</h1>
                            <h4 className="mb-8 mt-4 text-h4">
                                You have no country marked as favorite.
                            </h4>
                            <Button
                                className="mt-4 tracking-[1px]"
                                onClick={() => router.push('/')}
                            >
                                GO TO HOME
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
