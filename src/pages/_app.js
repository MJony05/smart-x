import '@/styles/globals.css';
import Head from 'next/head';
export const metadata = {
  title: 'smart-x.uz',
  description: 'smart-X kursi oquvchilari reytingi',
};

export const siteTitle = 'smart-X.uz';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>smart-X</title>
        <link rel="shortcut icon" href="/x-logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="og:title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta property="og:image" content="/x-logo.png" />
<script defer data-domain="smart-x.uz" src="https://plausible.io/js/script.js"></script>

        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/x-logo.png" />
        <meta property="og:image:alt" content={metadata.description} />
        <meta property="og:url" content="https://smart-x.uz" />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="uz_UZ" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:locale:alternate" content="ru_RU" />
        <meta property="og:locale:alternate" content="cy_GB" />

        <meta
          name="google-site-verification"
          content="QhQJzYpX7yY0QXZ1GnJ0X4z7uW6l6C7Xz7b6Zj2i0e4"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
