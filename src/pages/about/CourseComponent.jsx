import React from 'react';
import styles from './about.module.css';
const CourseComponent = () => {
  return (
    <div className={styles.courseContent}>
      <h1 className={styles.title}>
        <span>S.M.A.R.T.</span> bu qanday kurs?
      </h1>
      <div className={styles.courseVideo}>
        <iframe
          className={styles.video}
          src="https://www.youtube-nocookie.com/embed/rDiOPEXozCY?si=FAl-KsLuRYx1HY4p&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default CourseComponent;
