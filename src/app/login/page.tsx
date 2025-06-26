'use client';

// Import global from third party libraries.
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useToast } from '@/src/lib/hooks/use-toast';

// Import custom components.
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import Label from '@/src/components/ui/label';

// Import custom utilities.

// Import custom types.

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
    const [error, setError] = useState<string>('');
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

    // !SECTION

    // SECTION: Event Handlers
    const handleSubmit = () => {
        if (username === 'testuser' && password === 'password123') {
            localStorage.setItem(
                'authDetails',
                JSON.stringify({ isAuthenticated: true, username, password })
            );
            setError('');
            toast({
                title: 'Login Successful'
            });
            router.push('/');
        } else {
            toast({
                title: 'Login Failed',
                description: 'Invalid username or password'
            });
            setError('Invalid username or password');
            toast({
                title: 'Error',
                description: error
            });
        }
    };
    // !SECTION

    // SECTION: Side Effects
    useEffect(() => {
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
        <div className="h-screen">
            <h1 className="w-full text-center text-h1 font-medium text-dark-green">
                Get started!
            </h1>
            <h3 className="w-full text-center text-h3">
                Best things happen when you login.
            </h3>
            <div className="mx-auto mt-12 flex w-full flex-col items-center">
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
            </div>

            <div className="mx-auto mt-12 flex w-full flex-col items-center">
                <Button
                    className="w-4/5 max-w-[400px] tracking-[1px]"
                    onClick={() => handleSubmit()}
                >
                    LOGIN
                </Button>
            </div>
        </div>
        // </div>
    );
}
