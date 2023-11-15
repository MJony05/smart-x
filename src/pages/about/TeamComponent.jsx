import React from 'react';
import CardItem from './CardItem';
import styles from './about.module.css';
const TeamComponent = (props) => {
  const { data } = props;
  return (
    <div className={styles.teamContainer}>
      <h1 className={styles.title}>Bizning Jamoa</h1>
      <div className={styles.teamContent}>
        {data?.length !== 0
          ? data?.map((item) => {
              return (
                <CardItem
                  key={item.id}
                  name={item.name}
                  position={item.position}
                  image={item.image}
                  quote={item.quote}
                />
              );
            })
          : 'Loading...'}
      </div>
    </div>
  );
};

export default TeamComponent;
