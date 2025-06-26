'use client';

// Import global from third party libraries.
import { useRouter } from 'next/navigation';

// Import custom components.
import CountryListItem from '@/src/components/app/CountryListItem';

// Import custom utilities.

// Import custom types.
import { Country } from '@/src/lib/types';

// Import styles.

/**
 * This function renders a table of countries with their details.
 */
export default function ComponentName(props: { countries: Country[] }) {
    // SECTION: States and Constants
    const router = useRouter();
    // !SECTION

    // SECTION: API Queries
    // !SECTION

    // SECTION: Event Handlers
    const handleCountryClick = (countryName: string) => {
        // Check if the user is authenticated
        const authDetails = localStorage.getItem('authDetails');
        if (!authDetails) {
            router.push('/login');
        } else {
            // Navigate to the country detail page
            router.push(`/country/${countryName}`);
        }
    };
    // !SECTION

    // SECTION: Side Effects
    // !SECTION

    // SECTION: UI
    // !SECTION
    return (
        <div>
            <div className="grid grid-cols-8 items-center">
                <p>Bookmarked?</p>
                <p>Flag</p>
                <p>Bookmark</p>
                <p>Name</p>
                <p>Capital</p>
                <p>Region</p>
                <p>Population</p>
                <p>Know More</p>
            </div>
            {props.countries.length > 0 &&
                props.countries.map((country) => (
                    <CountryListItem
                        key={country.name.common}
                        countryDetails={country}
                        onClick={() => handleCountryClick(country.name.common)}
                    />
                ))}
        </div>
    );
}
