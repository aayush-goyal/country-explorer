'use client';

// Import global from third party libraries.
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';

// Import custom components.
import CountryTable from '@/src/components/app/CountryTable';
import Loading from '@/src/components/app/Loading';

// Import custom utilities.

// Import custom types.
import { Country } from '@/src/lib/types';

// Import styles.

/**
 * This function renders the landing page of the app.
 *
 */
export default function HomePage() {
    // SECTION: States and Constants
    const [countries, setCountries] = useState<Country[]>([]);
    const [fields, setFields] = useState<string[]>([]);
    // !SECTION

    // SECTION: API Queries
    const { data, error, isError, isLoading, isFetched } = useQuery({
        queryKey: ['is-username-available'],
        queryFn: () =>
            axios.get(
                `https://restcountries.com/v3.1/all?fields=${fields.join(',')}`
            ),
        enabled: fields.length !== 0,
        retry: false
    });

    // !SECTION

    // SECTION: Event Handlers

    // !SECTION

    // SECTION: Side Effects
    useEffect(() => {
        setFields(['name', 'capital', 'flags', 'population', 'region']);
    }, []);

    useEffect(() => {
        if (isFetched) {
            setCountries(data.data);
        }
    }, [isFetched]);
    // !SECTION

    // SECTION: UI
    // !SECTION
    return (
        <div>
            <h1 className="text-h1">Countries</h1>
            {isLoading && <Loading />}
            {isError && <p>Error: {error.message}</p>}
            {isFetched && <CountryTable countries={countries} />}
        </div>
    );
}
