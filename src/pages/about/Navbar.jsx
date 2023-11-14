import React from 'react';
import styles from './about.module.css';
import WestIcon from '@mui/icons-material/West';
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <Link style={{ display: 'flex', alignItems: 'center' }} href="/">
          <WestIcon style={{ color: 'white', fontSize: '2rem' }} />
        </Link>

        <Image alt="logo" src="/logo-desktop.png" width={170} height={60} />
      </div>
    </nav>
  );
};

export default Navbar;
