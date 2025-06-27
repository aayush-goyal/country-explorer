'use client';

// Import global from third party libraries.
import { Bookmark } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Import custom components.
import { Button } from '@/src/components/ui/button';

// Import custom utilities.
import { useToast } from '@/src/lib/hooks/use-toast';

// Import custom types.
import { Country } from '@/src/lib/types';

// Import styles.

/**
 * This function renders a list item for a country in the country list.
 */
export default function CountryListItem(props: {
    countryDetails: Country;
    onClick?: () => void;
    // eslint-disable-next-line no-unused-vars
    onBookmarkChange?: (updatedFavorites: Country[]) => void;
}) {
    // SECTION: States and Constants
    const [favorites, setFavorites] = useState<Country[]>([]);
    const { toast } = useToast();
    // !SECTION

    // SECTION: Functions
    const isBookmarked = () =>
        favorites.some(
            (fav: Country) => fav.cca3 === props.countryDetails.cca3
        );
    // !SECTION

    // SECTION: Event Handlers
    const handleBookmark = (countryDetails: Country) => {
        const authDetails = localStorage.getItem('authDetails');
        if (!authDetails) {
            return toast({
                title: 'Authentication Required',
                description: 'Please log in to bookmark countries.',
                variant: 'destructive'
            });
        }

        if (isBookmarked()) {
            // Remove the country from the favorites list
            const updatedFavorites = favorites.filter(
                (country: Country) => country.cca3 !== countryDetails.cca3
            );
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            setFavorites(updatedFavorites);
            if (props.onBookmarkChange)
                props.onBookmarkChange(updatedFavorites);
            return toast({
                title: 'Bookmark Removed',
                description: `${countryDetails.name.common} has been removed from your bookmarks.`,
                variant: 'default'
            });
        }

        // Add the country to the favorites list
        const updatedFavorites = [...favorites, countryDetails];
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites);
        if (props.onBookmarkChange) props.onBookmarkChange(updatedFavorites);
        return toast({
            title: 'Bookmarked Successfully',
            description: `${countryDetails.name.common} has been added to your bookmarks.`,
            variant: 'default'
        });
    };
    // !SECTION

    // SECTION: Side Effects
    useEffect(() => {
        const favoriteCountries = localStorage.getItem('favorites');
        setFavorites(favoriteCountries ? JSON.parse(favoriteCountries) : []);
    }, []);
    // !SECTION

    // SECTION: UI
    return (
        <div className="my-4 grid grid-cols-7 items-center justify-items-center gap-2">
            <Button
                variant="link"
                className="!p-0"
                onClick={() => handleBookmark(props.countryDetails)}
            >
                <Bookmark fill={isBookmarked() ? 'currentColor' : 'none'} />
            </Button>
            <Image
                src={props.countryDetails.flags.svg}
                alt={props.countryDetails.flags.alt}
                className="rounded-md"
                height={32}
                width={64}
            />
            <p className="text-center">{props.countryDetails.name.common}</p>
            <p>{props.countryDetails.capital?.join(', ')}</p>
            <p>{props.countryDetails.region}</p>
            <p>{props.countryDetails.population.toLocaleString()}</p>
            <Button variant="secondary" onClick={props.onClick}>
                CHECKOUT
            </Button>
        </div>
    );
    // !SECTION
}
