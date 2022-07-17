import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { sync } from 'glob';

const articlesPath = path.join(process.cwd(), 'data/articles');

export const getSlug = async () => {
  const paths = sync(`${articlesPath}/*.mdx`);

  return paths.map((element) => {
    const pathContent = element.split('/');
    const fileName = pathContent[pathContent.length - 1];
    const [slug, extension] = fileName.split('.');

    return slug;
  });
};
