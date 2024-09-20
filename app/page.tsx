import { BlogPosts } from 'app/components/posts';
import SubscribeForm from 'app/components/SubscribeForm';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Steven Huang
      </h1>
      <p>Subscribe to my personal newsletter!</p>
      <SubscribeForm />
      <p className="mb-4 whitespace-pre-line">
        {`I am an entrepreneur.

        Some of the things I love most: 

        • Humanity
        • Innovation
        • Possibility

        About me:

        • Grew up in China & spent 10 years in the US
        • Taught myself programming through YouTube & GitHub
        • Started 2 companies in EdTech & productivity sector with 1.5M+ users
        • Fields of interest: AI, consumer hardware & EdTech
        • Hobbies: writing music, learning new things & many different sports`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
