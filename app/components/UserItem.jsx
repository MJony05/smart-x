import React from 'react';
import styles from './user.module.css';
import Image from 'next/image';
import Link from 'next/link';

const UserItem = ({ user }) => {
  const imageSrc = `data:image/jpeg;base64,${user.profile_picture}`; // Change 'jpeg' to the appropriate image format

  return (
    <Link
      style={{ textDecoration: 'none', color: 'black' }}
      className={styles.li}
      href={`/profile/${user.id}`}
    >
      <Image
        className={styles.avatarka}
        src={imageSrc}
        alt="User Profile"
        width="50"
        height="50"
      />
      <p>{user.full_name}</p>
      <p>{user.viloyat}</p>
      <p>{user.steps}</p>
      <p>{((user.steps * 100) / 310).toFixed(2)}%</p>
    </Link>
  );
};

export default UserItem;
