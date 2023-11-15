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
    quote: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 2,
    name: 'Muxiddin Alisherov',
    position: 'Web Developer',
    image: '/jony.jpg',
    quote: 'Lorem ipsum dolor sit amet, ',
  },
  {
    id: 3,
    name: 'Jonibek Munirov',
    position: 'Web Developer',
    image: '/jony.jpg',
    quote: 'Lorem ipsum dolor sit amet, ',
  },
  {
    id: 4,
    name: 'Muxiddin Alisherov',
    position: 'Web Developer',
    image: '/jony.jpg',
    quote: 'Lorem ipsum dolor sit amet, ',
  },
  {
    id: 5,
    name: 'Muxiddin Alisherov',
    position: 'Web Developer',
    image: '/jony.jpg',
    quote: 'Lorem ipsum dolor sit amet, ',
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
