import Link from 'next/link'

const projects = [
    {
        title: 'Project One',
        description: 'Description for project one.',
        link: 'https://example.com/project-one',
    },
    {
        title: 'Project Two',
        description: 'Description for project two.',
        link: 'https://example.com/project-two',
    },
    // Add more projects here
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
