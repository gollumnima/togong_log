import fs from 'fs';
import path from 'path';

type PostItems = {
  [key: string]: string;
};

export const POST_PATH = path.join(process.cwd(), 'posts');

export const postFilePaths = fs.readdirSync(POST_PATH).filter((path) => /\.mdx?$/.test(path));

export const getPostSlugs = () => fs.readdirSync(POST_PATH);

export const getAllPosts = async () => {
  const directory = path.join(process.cwd(), 'content', 'posts');
  const files = fs.readdirSync(directory);

  const entries = await Promise.all(
    files.map((file) => import(`../content/posts${file}`)),
  );

  const posts = entries.map((entry, i) => ({
    slug: files[i].split('.')[0],
    MDXContent: entry.default,
  }));

  return posts;
};
