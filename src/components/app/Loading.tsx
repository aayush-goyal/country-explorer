'use client';

// Import global from third party libraries.
import Lottie from 'react-lottie';

// Import custom components.

// Import custom utilities.

// Import custom types.

// Import files.
// eslint-disable-next-line import/extensions
import * as animationData from '@/public/anim/loading_flight.json';

/**
 * This file contains the Loading component for the app.
 */
export default function Loading() {
    // SECTION: States and Constants
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    // !SECTION

    // SECTION: API Queries
    // !SECTION

    // SECTION: Event Handlers
    // !SECTION

    // SECTION: Side Effects
    // !SECTION

    // SECTION: UI
    // !SECTION
    return (
        <div className="mt-20">
            <Lottie options={defaultOptions} height={400} width={400} />
            <h2 className="mb-2 mt-8 text-center text-h2">Where next?</h2>
            <h5 className="text-center text-[20px]">
                Loading your favorite lands...
            </h5>
        </div>
    );
}
