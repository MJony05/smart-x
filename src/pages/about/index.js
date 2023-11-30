import React from 'react';
import Navbar from './Navbar';
import styles from './about.module.css';
import CourseComponent from './CourseComponent';
// const data = [
//   {
//     id: 1,
//     name: 'Jonibek Munirov',
//     position: 'Web Developer',
//     image: '/jony.jpg',
//     quote: 'Consistency is the key to success',
//   },
//   {
//     id: 2,
//     name: 'Javohir Hakimov',
//     position: 'Founder | Coach',
//     image: '/javoxir.jpg',
//     quote: 'TiT for TaT!',
//   },
//   {
//     id: 3,
//     name: 'Muxiddin Alisherov',
//     position: 'Media Manager',
//     image: '/pepe.jpg',
//     quote: 'Professionalism is not enough',
//   },
//   {
//     id: 4,
//     name: 'Shoxrux Sharipov',
//     position: 'Mobile Developer',
//     image: '/shox.jpg',
//     quote: 'Well done is better than well said',
//   },
// ];
const About = () => {
  return (
    <div className={styles.aboutPage}>
      <Navbar />
      <CourseComponent />
    </div>
  );
};

export default About;
