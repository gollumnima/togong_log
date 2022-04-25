import { getAllArticles } from '~/src/utils/mdx';

export async function getStaticProps() {
  const articles = await getAllArticles();

  const convertedArticles = articles.map((article) => article.data).sort((a, b) => {
    if (a.data.publishedAt > b.data.publishedAt) return 1;
    if (a.data.publishedAt < b.data.publishedAt) return -1;

    return 0;
  });

  return {
    props: {
      posts: convertedArticles.reverse(),
    },
  };
}
