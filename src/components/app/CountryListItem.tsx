'use client';

// Import global from third party libraries.
import { Bookmark } from 'lucide-react';
import Image from 'next/image';

// Import custom components.
import { Button } from '@/src/components/ui/button';

// Import custom utilities.

// Import custom types.
import { Country } from '@/src/lib/types';

// Import styles.

/**
 * This function renders a list item for a country in the country list.
 */
export default function CountryListItem(props: {
    countryDetails: Country;
    onClick?: () => void;
}) {
    // SECTION: States and Constants
    // !SECTION

    // SECTION: API Queries
    // !SECTION

    // SECTION: Event Handlers
    const handleBookmark = (countryDetails: Country) => {
        // TODO: handle bookmarking a country
    };
    // !SECTION

    // SECTION: Side Effects
    // !SECTION

    // SECTION: UI
    return (
        <div className="my-4 grid grid-cols-8 items-center justify-items-center gap-2">
            <Bookmark />
            <Image
                src={props.countryDetails.flags.svg}
                alt={props.countryDetails.flags.alt}
                className="rounded-md"
                height={32}
                width={64}
            />
            <Button
                variant="link"
                className="!p-0"
                onClick={() => handleBookmark(props.countryDetails)}
            >
                BOOKMARK
            </Button>
            <p className="text-center">{props.countryDetails.name.common}</p>
            <p>{props.countryDetails.capital.join(', ')}</p>
            <p>{props.countryDetails.region}</p>
            <p>{props.countryDetails.population.toLocaleString()}</p>
            <Button variant="secondary" onClick={props.onClick}>
                CHECKOUT
            </Button>
        </div>
    );
    // !SECTION
}
