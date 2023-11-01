import { Inter } from 'next/font/google';
import './globals.css';
import ParticlesComponent from './components/Particles';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ParticlesComponent />
      </body>
    </html>
  );
}
