'use client';

import { useState } from 'react';

export default function SubscribeForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!email) {
            setStatus('Please enter a valid email');
            return;
        }

        try {
            // Call your Supabase API or service here
            setStatus('Success! You have been subscribed.');
            setEmail('');
        } catch (error) {
            setStatus('An error occurred. Try again.');
        }
    };

    return (
        <div className="flex items-center justify-center py-8">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg transition-colors duration-300"
            >
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                    Subscribe to My Personal Newsletter
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                    I try to write from time to time
                </p>

                <div className="relative">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full mt-4 py-3 px-4 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-500 dark:hover:bg-blue-400 transition-colors duration-300"
                >
                    Subscribe
                </button>

                {status && (
                    <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
                        {status}
                    </p>
                )}
            </form>
        </div>
    );
}
