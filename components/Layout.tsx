import Head from 'next/head';

type Props = {
  title: string;
  description: string;
  thumbnail: string;
  seoTitle: string;
  abstract: string;
  publishedOn: string;
}
const Layout:React.FC<Props> = ({ children, pageTitle }) => {
  // const metaData = {
  //   title: post.title,
  //   description: post.description,
  //   thumbnail: post.thumbnail,
  //   seoTitle: post.seoTitle,
  //   abstract: post.abstract,
  //   publishedOn: post.publishedOn,
  // }
  <>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{pageTitle}</title>
  </Head>
  </>
}

export default Layout;

// ---
// title: How I Built My Blog
// seoTitle: How I Built my Blog using MDX, Next.js, and React
// abstract: An in-depth look at the technical structure for my blog.
// isPublished: true
// publishedOn: 2021-04-20T09:15:00-0400
// layout: Article
// ---
