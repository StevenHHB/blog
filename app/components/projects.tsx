import Link from 'next/link'

const projects = [
    {
        title: 'Kolect AI',
        description: 'Connect Small Businesses with Micro Creators at scale through AI',
        link: 'https://kolect.ai',
    },
    {
        title: 'Savable AI',
        description: 'Intelligent coupon and discount aggregator that helps you find the best deals across multiple platforms with AI-powered price tracking and recommendations.',
        link: 'https://savable.ai',
    },
    {
        title: 'Nikita Systems',
        description: 'Revolutionary AI-driven marketing platform that automates complex marketing strategies, optimizes campaign performance, and provides end-to-end business growth solutions.',
        link: 'https://nikita.systems',
    },
    {
        title: 'SocialTargeter',
        description: 'Advanced social media intelligence tool that instantly identifies and analyzes potential customers based on real-time engagement metrics and behavioral insights.',
        link: 'https://SocialTargeter.com',
    },
    {
        title: 'Use DotCom',
        description: 'AI-powered domain name discovery platform that helps entrepreneurs and startups find memorable, available .com domains with instant brand potential analysis.',
        link: 'https://usedotcom.com',
    },
    {
        title: 'KeoPlus',
        description: 'Comprehensive AI-enhanced educational platform that transforms learning experiences with personalized tools for teachers, students, and educational institutions.',
        link: 'https://keo.plus',
    },
    {
        title: 'SHUO',
        description: 'Next-generation social network leveraging artificial intelligence to create more meaningful connections, intelligent content curation, and seamless user interactions.',
        link: 'https://theshuo.cn',
    },
    {
        title: 'CVBaby',
        description: 'Cutting-edge AI resume builder that transforms your professional experience into compelling, recruiter-optimized documents with intelligent formatting and content suggestions.',
        link: 'https://cvbaby.com',
    },
    {
        title: 'FounderXYZ',
        description: 'Curated knowledge hub providing comprehensive resources, tools, and insights for entrepreneurs, startup founders, and innovators at every stage of their journey.',
        link: 'https://founderxyz.com',
    },
]

export function Projects() {
    return (
        <div>
            {projects.map((project, index) => (
                <div key={index} className="flex flex-col space-y-1 mb-4">
                    <Link href={project.link} className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                    </Link>
                    <p className="text-neutral-600 dark:text-neutral-400">{project.description}</p>
                </div>
            ))}
        </div>
    )
}
