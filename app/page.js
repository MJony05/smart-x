'use client';
import { useState, useEffect } from 'react';
import UserTable from './components/UserTable';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/students');
      const data = await res.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <nav className={styles.nav}>
        <Image alt="logo-x" src="/x-logo.png" width={70} height={70} />
        <Link href="/course" className={styles.nav_link}>
          Kurs haqida
        </Link>
        <Link href="/about" className={styles.nav_link}>
          Biz haqimizda
        </Link>
      </nav>

      <main className={styles.main}>
        <UserTable users={users} />
      </main>
    </>
  );
}
