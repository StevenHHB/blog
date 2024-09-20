'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
            const { data, error } = await supabase
                .from('subscriptions')
                .insert([{ email }]);

            if (error) {
                throw error;
            }

            setEmail('');
            setStatus('Success! You have been subscribed.');
        } catch (error) {
            setStatus('An error occurred while subscribing. Try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <div className="mb-4">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                />
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Subscribe
            </button>
            {status && <p className="mt-2 text-sm">{status}</p>}
        </form>
    );
}
