import React, { useEffect } from 'react';
import styles from './user.module.css';
import Image from 'next/image';
import Link from 'next/link';

const UserItem = ({ user, index }) => {
  const imageSrc = `data:image/jpeg;base64,${user.profile_picture}`; // Change 'jpeg' to the appropriate image format
  function getColor(percentage) {
    if (percentage <= 20) {
      return '#E51F1F';
    } else if (percentage <= 40) {
      return '#F2A134';
    } else if (percentage <= 60) {
      return '#F7E379';
    } else if (percentage <= 80) {
      return '#BBDB44';
    } else {
      return '#44CE1B';
    }
  }

  return (
    <Link
      style={{ textDecoration: 'none', color: 'black' }}
      className={styles.li}
      href={`/profile/${user.chat_id}`}
    >
      <Image
        className={styles.avatarka}
        src={imageSrc}
        alt="User Profile"
        width="50"
        height="50"
      />
      <p
        className={styles.userDatas}
        style={{
          color: index % 2 == 0 ? '#502B84' : 'white ',
        }}
      >
        {user.full_name}
      </p>
      <p
        className={styles.userDatas}
        style={{
          color: index % 2 == 0 ? '#502B84' : 'white ',
        }}
      >
        {user.viloyat}
      </p>
      <p
        className={styles.steps}
        style={{
          color: index % 2 == 0 ? '#502B84' : 'white ',
          fontWeight: 'bold',
        }}
      >
        {user.steps}
      </p>
      <div className={styles.status} style={{ margin: '0 auto' }}>
        <span
          style={{
            width: `${((user?.steps * 100) / 310).toFixed(2)}%`,
            backgroundColor: getColor(((user?.steps * 100) / 310).toFixed(2)),
          }}
        ></span>
        <p style={{ zIndex: '11' }}>
          {((user?.steps * 100) / 310).toFixed(2)}%
        </p>
      </div>
    </Link>
  );
};

export default UserItem;
