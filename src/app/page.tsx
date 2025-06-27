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
import { Input } from '../components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger
} from '../components/ui/select';

// Import styles.

/**
 * This function renders the landing page of the app.
 *
 */
export default function HomePage() {
    // SECTION: States and Constants
    const allRegions = [
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania',
        'Antarctica'
    ];
    const [countries, setCountries] = useState<Country[]>([]);
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
    const [fields, setFields] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    // const [regions, setRegions] = useState<string[]>([]);
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
    const handleSearch = (query: string) => {
        setSearchQuery(query);
        if (query.trim() === '') {
            setFilteredCountries(countries);
        } else {
            const lowerCaseQuery = query.toLowerCase();
            const filtered = countries.filter((country) =>
                country.name.common.toLowerCase().includes(lowerCaseQuery)
            );
            setFilteredCountries(filtered);
        }
    };
    // !SECTION

    // SECTION: Side Effects
    useEffect(() => {
        setFields(['name', 'capital', 'flags', 'population', 'region', 'cca3']);
    }, []);

    useEffect(() => {
        if (isFetched) {
            console.log(data);
            const countriesData = data.data.sort((a: Country, b: Country) =>
                a.name.common.localeCompare(b.name.common)
            );
            setCountries(countriesData);
            setFilteredCountries(countriesData);
        }
    }, [isFetched]);

    useEffect(() => {
        let handler: NodeJS.Timeout;

        if (searchQuery.trim() === '') {
            setFilteredCountries(countries);
        } else {
            handler = setTimeout(() => {
                handleSearch(searchQuery);
            }, 500);
        }
        return () => clearTimeout(handler);
    }, [searchQuery]);
    // !SECTION

    // SECTION: UI
    // !SECTION
    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-h1">Countries</h1>
                <div className="flex items-center">
                    <Input
                        type="text"
                        className="ml-4 rounded-lg border px-3 py-2"
                        placeholder="Search countries..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        aria-label="Search countries"
                    />
                    <span className="ml-2 text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                            />
                        </svg>
                    </span>
                    <Select
                    // value={regions}
                    // onValueChange={(selected: string[]) =>
                    //     setRegions(selected)
                    // }
                    >
                        <SelectTrigger
                            className="ml-4 rounded-lg border px-3 py-2"
                            aria-label="Filter by region"
                        >
                            <SelectContent>
                                {allRegions.map((region) => (
                                    <SelectItem key={region} value={region}>
                                        <div className="flex items-center">
                                            {/* <input
                                                type="checkbox"
                                                checked={regions.includes(
                                                    region
                                                )}
                                                readOnly
                                                className="mr-2"
                                            /> */}
                                            {region}
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </SelectTrigger>
                    </Select>
                </div>
            </div>
            {isLoading && <Loading />}
            {isError && <p>Error: {error.message}</p>}
            {isFetched && <CountryTable countries={filteredCountries} />}
        </div>
    );
}
