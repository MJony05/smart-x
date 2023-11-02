import React, { useEffect } from 'react';
import styles from './user.module.css';
import Image from 'next/image';
import Link from 'next/link';

const UserItem = ({ user, index }) => {
  const [percentage, setPercentage] = React.useState(0);
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
  useEffect(() => {
    setPercentage(((user.steps * 100) / 310).toFixed(2));
  }, [user]);

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
            width: `${percentage}%`,
            backgroundColor: getColor(percentage),
          }}
        ></span>
        <p style={{ zIndex: '11' }}>{percentage}%</p>
      </div>
    </Link>
  );
};

export default UserItem;
