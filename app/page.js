import UserTable from './components/UserTable';
import { GetStudentsData } from './service/database';
import styles from './page.module.css';
import Link from 'next/link';
export default async function Home() {
  const users = await GetStudentsData();

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">Logo</Link>
        <Link href="/about">Biz haqimizda</Link>
      </nav>
      <main className={styles.main}>
        <UserTable users={users} />
      </main>
    </>
  );
}
