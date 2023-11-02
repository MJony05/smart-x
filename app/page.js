import UserTable from './components/UserTable';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <Image
            className={styles.logoPhone}
            alt="logo-x"
            src="/x-logo.png"
            width={60}
            height={60}
          />
          <Image
            className={styles.logoDesktop}
            alt="logo-x"
            src="/logo-desktop.png"
            width={170}
            height={60}
          />
          <div className={styles.links}>
            <Link href="/course" className={styles.nav_link}>
              310 qadam
            </Link>
            <Link href="/about" className={styles.nav_link}>
              Biz haqimizda
            </Link>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        <UserTable />
      </main>
    </>
  );
}
