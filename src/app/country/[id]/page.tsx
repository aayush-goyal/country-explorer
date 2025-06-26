'use client';

// Import global from third party libraries.
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Import custom components.

// Import custom utilities.

// Import custom types.
import Image from 'next/image';
import Link from 'next/link';
import { Country } from '@/src/lib/types';
import Loading from '@/src/components/app/Loading';

// Import styles.

/**
 * This function renders the landing page of the app.
 *
 */
export default function CountryDetailsPage() {
    // ○ Create a dynamic route to display detailed information for a single country (e.g., /country/US or /country/DE).
    // ○ Fetch data for the specic country using its unique code (e.g., cca2) from an endpoint like hps://restcountries.com/v3.1/alpha/{code}.
    // ○ Display the following information:

    // SECTION: States and Constants
    const [countryDetails, setCountryDetails] = useState<Country>({
        name: {
            common: '',
            nativeName: {},
            official: ''
        },
        flags: {
            png: '',
            svg: '',
            alt: ''
        },
        population: 0,
        region: '',
        subregion: '',
        cca3: '',
        capital: [],
        latlng: [0, 0],
        tld: [],
        borders: [],
        currencies: {},
        languages: {}
    });
    const pathname = usePathname();
    const router = useRouter();
    // !SECTION

    // SECTION: API Queries
    const { data, error, isError, isLoading, isFetched, refetch } = useQuery({
        queryKey: ['is-username-available'],
        queryFn: () =>
            axios.get(
                `https://restcountries.com/v3.1/alpha/${pathname.split('/')[2]}`
            ),
        enabled: false,
        retry: false
    });
    // !SECTION

    // SECTION: Event Handlers
    // !SECTION

    // SECTION: Side Effects
    useEffect(() => {
        // If the user is not authenticated, redirect to the login page.
        const authDetails = localStorage.getItem('authDetails');
        if (!authDetails) {
            router.push('/login');
        }
    }, []);

    useEffect(() => {
        if (pathname) {
            refetch().then((result: any) => {
                console.log('Refetched data:', result.data.data[0]);

                // Set the country details from the fetched data.
                setCountryDetails(result.data.data[0]);
            });
        }
    }, [pathname]);
    // !SECTION

    // SECTION: UI
    // !SECTION
    return (
        <div>
            {isLoading && <Loading />}
            {isFetched && (
                <div className="mt-20 grid items-center justify-items-center lg:grid-cols-[2fr_3fr]">
                    <div>
                        <Image
                            src={countryDetails.flags.svg}
                            alt={countryDetails.flags.alt}
                            className="rounded-md"
                            height={160}
                            width={320}
                        />
                        <h1 className="text-center text-h1 font-bold">
                            {countryDetails?.name?.common}
                        </h1>
                        <div className="mt-4">
                            <h3 className="text-center text-h3">
                                Border Countries
                            </h3>
                            <div className="flex items-center justify-center space-x-4">
                                {countryDetails.borders &&
                                    countryDetails?.borders.map((border) => (
                                        <Link
                                            href={`/country/${border}`}
                                            className="text-blue-500 hover:underline"
                                        >
                                            {border}
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="grid grid-cols-[1fr_1fr_1fr] items-center justify-items-center gap-y-10 lg:gap-x-20">
                            <div>
                                <p className="text-center">Population</p>
                                <h4 className="text-h4 font-medium">
                                    {countryDetails?.population}
                                </h4>
                            </div>
                            <div>
                                <p className="text-center">Region</p>
                                <h4 className="text-h4 font-medium">
                                    {countryDetails?.region}
                                </h4>
                            </div>
                            <div>
                                <p className="text-center">Sub-region</p>
                                <h4 className="text-h4 font-medium">
                                    {countryDetails?.subregion}
                                </h4>
                            </div>
                            <div>
                                <p className="text-center">Capitals</p>
                                <h4 className="text-h4 font-medium">
                                    {countryDetails?.capital?.join(', ')}
                                </h4>
                            </div>
                            <div>
                                <p className="text-center">TLDs</p>
                                <h4 className="text-h4 font-medium">
                                    {countryDetails?.tld?.join(', ')}
                                </h4>
                            </div>
                            <div>
                                <p className="text-center">Currencies</p>
                                {countryDetails?.currencies &&
                                    Object.values(
                                        countryDetails.currencies
                                    ).map((currencyDetails) => (
                                        <h4 className="text-h4 font-medium">
                                            <p className="text-center">
                                                {currencyDetails.name} (
                                                {currencyDetails.symbol})
                                            </p>
                                        </h4>
                                    ))}
                            </div>
                            <div>
                                <p className="text-center">Languages</p>
                                {countryDetails?.languages &&
                                    Object.values(countryDetails.languages).map(
                                        (language) => (
                                            <h4
                                                key={language}
                                                className="text-h4 font-medium"
                                            >
                                                <p className="text-center">
                                                    {language}
                                                </p>
                                            </h4>
                                        )
                                    )}
                            </div>
                            <div>
                                <p className="text-center">Currencies</p>
                                {countryDetails?.currencies &&
                                    Object.values(
                                        countryDetails.currencies
                                    ).map((currencyDetails) => (
                                        <h4
                                            key={currencyDetails.name}
                                            className="text-h4 font-medium"
                                        >
                                            {currencyDetails.name} (
                                            {currencyDetails.symbol})
                                        </h4>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
