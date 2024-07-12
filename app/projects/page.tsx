import { Projects } from 'app/components/projects'

export default function ProjectsPage() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                My Projects
            </h1>
            <div className="my-8">
                <Projects />
            </div>
        </section>
    )
}
