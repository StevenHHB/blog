import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        // Authentication
        const token = request.headers.get('Authorization');
        if (token !== 'Bearer stevenhhb') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Parse Request Body
        const { username } = await request.json();
        if (!username) {
            return NextResponse.json({ error: 'Username is required' }, { status: 400 });
        }

        // Fetch Similar Profiles
        const similarProfilesData = await getSimilarProfiles(username);
        if (!similarProfilesData?.data?.edges) {
            return NextResponse.json({ error: 'No similar profiles found' }, { status: 404 });
        }

        // Process Each Similar Profile
        const similarProfiles = await Promise.all(
            similarProfilesData.data.edges.map(async (edge: any) => {
                const profileUsername = edge.node?.username;
                if (profileUsername) {
                    const userId = await getUserId(profileUsername);
                    if (userId) {
                        const userInfo = await getUserInfo(userId);
                        if (userInfo && userInfo.data) {
                            return {
                                account_username: userInfo.data.username,
                                name: userInfo.data.full_name,
                                platform: 'Instagram',
                                follower_count: userInfo.data.followers,
                                contact_info: {
                                    external_url: userInfo.data.external_url,
                                    bio_links: userInfo.data.bio_links
                                        ? userInfo.data.bio_links.map((link: any) => link.url)
                                        : []
                                }
                            };
                        }
                    }
                }
                return null;
            })
        );

        // Filter Out Null Values
        const filteredProfiles = similarProfiles.filter(Boolean);

        // Send Response
        return NextResponse.json({ similar_profiles: filteredProfiles });
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

async function getSimilarProfiles(username: string): Promise<any> {
    const url = `https://${process.env.RAPIDAPI_HOST}/webrelated_users/${username}`;
    const response = await fetch(url, {
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY!,
            'x-rapidapi-host': process.env.RAPIDAPI_HOST!,
        },
    });
    const data = await response.json();
    return data;
}
