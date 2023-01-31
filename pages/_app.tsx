import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import Head from 'next/head';

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  weight: ['400'],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Course List - список курсов</title>
        <meta
          name="description"
          content="Список онлайн-курсов для самообразования"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default App;
