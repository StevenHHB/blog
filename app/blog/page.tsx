import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'StevenHHB Blog',
  description: 'This is Steven Huang. Read my blog Here.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts />
    </section>
  )
}
