import Image from 'next/image';
import styles from './page.module.css';
export default function Home() {
  return (
    <main className={styles.main}>
      <Image src="/coming.jpg" alt="" fill={true} objectFit="cover" />
    </main>
  );
}
