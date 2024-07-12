import Link from 'next/link'

const projects = [
    {
        title: 'KeoPlus',
        description: 'All-in-one smart EdTech tool for teachers and students.',
        link: 'https://keo.plus',
    },
    {
        title: 'SHUO',
        description: 'Accelerated social network powered by AI.',
        link: 'https://theshuo.cn',
    },
    {
        title: 'CVBaby',
        description: 'All-in-one AI resume tool',
        link: 'https://cvbaby.com',
    },
    {
        title: 'FounderXYZ',
        description: 'Resource collections for founders.',
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
