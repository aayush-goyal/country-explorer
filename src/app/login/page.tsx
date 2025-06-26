'use client';

// Import global from third party libraries.
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useToast } from '@/src/lib/hooks/use-toast';

// Import custom components.
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import Label from '@/src/components/ui/label';
import Marquee from '@/src/components/ui/marquee';

// Import custom utilities.

// Import custom types.
import { Country } from '@/src/lib/types';

// Import styles.

/**
 * This function renders the landing page of the app.
 *
 */
export default function ComponentName() {
    // SECTION: States and Constants
    const router = useRouter();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { toast } = useToast();

    // const images = [
    //     '/images/image1.jpg',
    //     '/images/image2.jpg',
    //     '/images/image3.jpg'
    // ];

    // const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // ■ Provide a "Logout" functionality.

    // !SECTION

    // SECTION: API Queries
    const { data, isFetched } = useQuery({
        queryKey: ['is-username-available'],
        queryFn: () =>
            axios.get(`https://restcountries.com/v3.1/all?fields=flags`),
        // enabled: !isAuthenticated,
        retry: false
    });
    // !SECTION

    // SECTION: Event Handlers
    const handleSubmit = (event?: React.FormEvent | KeyboardEvent) => {
        if (event && typeof event.preventDefault === 'function') {
            event.preventDefault();
        }
        if (username === 'testuser' && password === 'password123') {
            localStorage.setItem(
                'authDetails',
                JSON.stringify({ isAuthenticated: true, username, password })
            );
            toast({
                title: 'Login Successful'
            });
            router.push('/');
        } else {
            toast({
                title: 'Login Failed',
                description: 'Invalid username or password'
            });
            toast({
                title: 'Error',
                description: 'Invalid username or password'
            });
        }
    };
    // !SECTION

    // SECTION: Side Effects
    useEffect(() => {
        // Check if the user is already authenticated
        const authDetails = localStorage.getItem('authDetails');
        if (authDetails) {
            const { isAuthenticated } = JSON.parse(authDetails);
            if (isAuthenticated) {
                router.push('/');
            }
        }
    }, []);
    // !SECTION

    // SECTION: UI
    // !SECTION
    return (
        <div className="h-screen pt-24">
            <h1 className="w-full text-center text-h1 font-medium text-dark-green">
                Get started!
            </h1>
            <h3 className="w-full text-center text-h3">
                Best things happen when you login.
            </h3>
            <form
                className="mx-auto mt-24 flex w-full flex-col items-center"
                onSubmit={handleSubmit}
            >
                {/* Username */}
                <div className="w-4/5 max-w-[400px]">
                    <Label htmlFor="username" className="block">
                        <p className="text-[16px]">Username</p>
                    </Label>
                    <Input
                        className="w-full border-metal-100"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                {/* Password */}
                <div className="mt-4 w-4/5 max-w-[400px]">
                    <Label htmlFor="password" className="block">
                        <p className="text-[16px]">Password</p>
                    </Label>
                    <div className="relative">
                        <Input
                            className="w-full border-metal-100 pr-10"
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="absolute right-2 top-2 text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? '🙈' : '👁️'}
                        </button>
                    </div>
                </div>
                <Button
                    className="mt-12 w-4/5 max-w-[400px] tracking-[1px]"
                    type="submit"
                >
                    LOGIN
                </Button>
            </form>
            {isFetched && (
                <div className="mx-auto mt-20 w-4/5 max-w-[480px] text-center">
                    <Marquee direction="left">
                        <div className="flex items-center space-x-4">
                            {data.data
                                .slice(0, data.data.length / 2)
                                .map((country: Pick<Country, 'flags'>) => (
                                    <Image
                                        src={country.flags.svg}
                                        alt={country.flags.alt}
                                        height={24}
                                        width={48}
                                    />
                                ))}
                        </div>
                    </Marquee>
                    <Marquee direction="right">
                        <div className="flex items-center space-x-4">
                            {data.data
                                .slice(data.data.length / 2)
                                .map((country: Pick<Country, 'flags'>) => (
                                    <Image
                                        src={country.flags.svg}
                                        alt={country.flags.alt}
                                        height={24}
                                        width={48}
                                    />
                                ))}
                        </div>
                    </Marquee>
                    <p className="text-center text-[16px]">
                        So many countries to explore, so little time!
                    </p>
                </div>
            )}
        </div>
        // </div>
    );
}
