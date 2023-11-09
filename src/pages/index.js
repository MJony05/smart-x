// pages/index.js
import Link from 'next/link';
import UserTable from '../components/UserTable';
import Image from 'next/image';
import ParticlesComponent from '@/components/Particles';

function HomePage() {
  return (
    <>
      <ParticlesComponent />
      <nav className={'nav'}>
        <div className={'navContent'}>
          <Image
            className={'logoPhone'}
            alt="logo-x"
            src="/x-logo.png"
            width={60}
            height={60}
          />
          <Image
            className={'logoDesktop'}
            alt="logo-x"
            priority={true}
            src="/logo-desktop.png"
            width={170}
            height={60}
          />
          <div className={'links'}>
            <Link href="/about" className={'nav_link'}>
              Biz haqimizda
            </Link>
          </div>
        </div>
      </nav>

      <main className={'main'}>
        <UserTable />
      </main>
    </>
  );
}

export default HomePage;
