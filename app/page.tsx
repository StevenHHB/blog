import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Steven Huang
      </h1>
      <p className="mb-4">
        {`I am an entrepreneur. \n
        Some of the things i love most: humanity, innovation, and possibility. \n
        Few things about me \n
        • Grew up in Beijing, China & spent 10 years in the US\n
        • Taught myself programming through YouTube & Github\n 
        • Started 2 companies in EdTech & productivity sector with 1.5M+ users\n
        • Fields of interest: AI, consumer hardware & EdTech\n
        • Hobbies: writing music, learning new things & many different sports`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
