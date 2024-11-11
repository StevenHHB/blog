import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        // Verify the token
        const token = request.headers.get('Authorization');
        if (token !== 'Bearer stevenhhb') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { username } = await request.json();

        if (!username) {
            return NextResponse.json({ error: 'Username is required' }, { status: 400 });
        }

        const userId = await getUserId(username);
        if (!userId) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        const userInfo = await getUserInfo(userId);
        return NextResponse.json(userInfo);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

// Helper Functions
async function getUserId(username: string): Promise<string | null> {
    const url = `https://${process.env.RAPIDAPI_HOST}/webget_user_id_fast/${username}`;
    const response = await fetch(url, {
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY!,
            'x-rapidapi-host': process.env.RAPIDAPI_HOST!,
        },
    });
    const data = await response.json();
    return data?.data?.id || null;
}

async function getUserInfo(userId: string): Promise<any> {
    const url = `https://${process.env.RAPIDAPI_HOST}/webget_userinfo_from_userid/${userId}`;
    const response = await fetch(url, {
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY!,
            'x-rapidapi-host': process.env.RAPIDAPI_HOST!,
        },
    });
    const data = await response.json();
    return data;
}
