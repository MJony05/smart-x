import UserList from './components/UserList';
import { GetStudentsData } from './service/database';
import styles from './page.module.css';
import Link from 'next/link';
export default async function Home() {
  const users = await GetStudentsData();

  return (
    <>
      <navbar className={styles.nav}>
        <Link href="/">Logo</Link>
        <Link href="/about">Biz haqimizda</Link>
      </navbar>
      <main className={styles.main}>
        <UserList users={users} />
      </main>
    </>
  );
}
