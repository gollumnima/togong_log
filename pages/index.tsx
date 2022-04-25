import type { NextPage } from 'next';
import Link from 'next/link';
import { getAllPosts } from '~/lib/posts';

const Home: NextPage = ({ entries }) => (
  <section>
    <h2>Recent Posts</h2>
    <ul>
      {entries.map((entry: string) => (
        <li key={entry}>
          <Link href="/posts/[post]" as={`/posts/${entry}`}>
            <a>{entry}</a>
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default Home;

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      entries: posts.map((post) => post.slug),
    },
  };
}
