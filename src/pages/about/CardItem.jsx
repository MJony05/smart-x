import Image from 'next/image';
import React from 'react';
import styles from './about.module.css';
const CardItem = (props) => {
  const { name, position, image, quote } = props;
  return (
    <div className={styles.card}>
      <Image
        className={styles.cardImage}
        src={image}
        alt={name}
        width={200}
        height={200}
      />
      <h3 className={styles.cardName}>{name}</h3>
      <h4 className={styles.cardPosition}>{position}</h4>
      <p className={styles.cardQuote}>&ldquo;{quote}&rdquo;</p>
    </div>
  );
};

export default CardItem;
