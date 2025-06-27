'use client';

// Import global from third party libraries.
import { useRouter } from 'next/navigation';

// Import custom components.
import CountryListItem from '@/src/components/app/CountryListItem';

// Import custom utilities.
import { useIsMobile } from '@/src/lib/hooks/use-mobile';

// Import custom types.
import { Country } from '@/src/lib/types';

// Import styles.

/**
 * This function renders a table of countries with their details.
 */
export default function CountryTable(props: { countries: Country[] }) {
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
    // !SECTION

    // SECTION: UI
    // !SECTION
    return (
        <div>
            {!isMobile && (
                <div className="grid grid-cols-7 items-center justify-items-center">
                    {tableHeadings.map((heading) => (
                        <p key={heading} className="font-medium">
                            {heading}
                        </p>
                    ))}
                </div>
            )}
            {props.countries.length > 0 &&
                props.countries.map((country) => (
                    <CountryListItem
                        key={country.name.common}
                        countryDetails={country}
                        onClick={() => handleCountryClick(country.cca3)}
                    />
                ))}
        </div>
    );
}
