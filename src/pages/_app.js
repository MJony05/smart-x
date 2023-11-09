import '@/styles/globals.css';
import Head from 'next/head';
export const metadata = {
  title: 'smart-x.uz',
  description: 'smart-X kursi oquvchilari reytingi',
};
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/x-logo.png" />
        <meta name="description" content={metadata.description} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
