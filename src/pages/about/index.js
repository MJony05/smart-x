import React from 'react';
import Navbar from './Navbar';
import styles from './about.module.css';
const data = [
  {
    id: 1,
    name: 'Jonibek Munirov',
    position: 'Web Developer',
    image: '/images/jonibek.jpg',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    id: 2,
    name: 'Muxiddin Alisherov',
    position: 'Web Developer',
    image: '/images/jonibek.jpg',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    id: 3,
    name: 'Jonibek Munirov',
    position: 'Web Developer',
    image: '/images/jonibek.jpg',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    id: 4,
    name: 'Muxiddin Alisherov',
    position: 'Web Developer',
    image: '/images/jonibek.jpg',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    id: 5,
    name: 'Muxiddin Alisherov',
    position: 'Web Developer',
    image: '/images/jonibek.jpg',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
];
const About = () => {
  return (
    <div className={styles.aboutPage}>
      <Navbar />
    </div>
  );
};

export default About;
