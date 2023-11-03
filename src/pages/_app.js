import ParticlesComponent from '@/components/Particles';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ParticlesComponent />
    </>
  );
}
