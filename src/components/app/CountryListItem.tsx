'use client';

// Import global from third party libraries.
import { Bookmark } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';
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
        <motion.div
            className="my-4 flex flex-col items-center gap-2 rounded-lg bg-white p-4 shadow dark:bg-metal-100 dark:shadow-lg sm:grid sm:grid-cols-7 sm:items-center sm:justify-items-center sm:gap-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
        >
            <Button
                variant="link"
                className="order-1 !p-0 sm:order-none"
                onClick={() => handleBookmark(props.countryDetails)}
            >
                <Bookmark fill={isBookmarked() ? 'currentColor' : 'none'} />
            </Button>
            <Image
                src={props.countryDetails.flags.svg}
                alt={props.countryDetails.flags.alt}
                className="order-2 rounded-md border border-metal-20 dark:border-metal-60 sm:order-none"
                height={32}
                width={64}
            />
            <p className="order-3 w-full break-words text-center text-base font-semibold text-metal-base dark:text-amber-10 sm:order-none sm:w-auto">
                {props.countryDetails.name.common}
            </p>
            <p className="order-4 w-full text-center text-sm text-gray-700 dark:text-amber-30 sm:order-none sm:w-auto">
                {props.countryDetails.capital?.join(', ')}
            </p>
            <p className="order-5 w-full text-center text-sm text-gray-700 dark:text-amber-30 sm:order-none sm:w-auto">
                {props.countryDetails.region}
            </p>
            <p className="order-6 w-full text-center text-sm text-gray-700 dark:text-amber-30 sm:order-none sm:w-auto">
                {props.countryDetails.population.toLocaleString()}
            </p>
            <Button
                variant="secondary"
                onClick={props.onClick}
                className="order-7 mt-2 w-full sm:order-none sm:mt-0 sm:w-auto"
            >
                CHECKOUT
            </Button>
        </motion.div>
    );
    // !SECTION
}
