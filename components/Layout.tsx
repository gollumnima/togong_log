import Head from 'next/head';

// TODO: meta tag 넣고, title 페이지별로 동적으로 적용하기

type Props = {
  children: React.ReactElement;
};

const Layout: React.FC<Props> = ({ children }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>토목공사</title>
    <main>{children}</main>
  </Head>
);

export default Layout;
