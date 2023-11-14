import React from 'react';
import CardItem from './CardItem';
import styles from './about.module.css';
const TeamComponent = ({ data }) => {
  return (
    <div className={styles.teamContainer}>
      <h1 className={styles.title}>Bizning Jamoa</h1>
      <div className={styles.teamContent}>
        {data.map((item) => {
          return (
            <CardItem
              key={item.id}
              name={item.name}
              position={item.position}
              image={item.image}
              quote={item.quote}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TeamComponent;
