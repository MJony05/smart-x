import React from 'react';
import Navbar from './Navbar';
import styles from './about.module.css';
import TeamComponent from './TeamComponent';
import CourseComponent from './CourseComponent';
const data = [
  {
    id: 1,
    name: 'Jonibek Munirov',
    position: 'Web Developer',
    image: '/jony.jpg',
    quote: 'Consistensy is the key to success',
  },
  {
    id: 2,
    name: 'Javohir Hakimov',
    position: 'Founder | Coach',
    image: '/javoxir.jpg',
    quote: 'TiT for TaT!',
  },
  {
    id: 3,
    name: 'Muxiddin Alisherov',
    position: 'Media Manager',
    image: '/pepe.jpg',
    quote: 'Lorem ipsum dolor sit amet, ',
  },
  {
    id: 4,
    name: 'Shoxrux Sharipov',
    position: 'Mobile Developer',
    image: '/shox.jpg',
    quote: 'Well done is better than well said',
  },
];
const About = () => {
  return (
    <div className={styles.aboutPage}>
      <Navbar />
      <CourseComponent />
      <TeamComponent data={data} />
    </div>
  );
};

export default About;
