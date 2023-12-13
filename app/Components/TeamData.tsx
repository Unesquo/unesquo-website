import React from 'react';
import TeamComponent from './Team';
import styles from "../styles/alumniPage.module.css"

const teamData = [
  {
    id: 1,
    src: '/images/akash.jpeg',
    name: 'Akash Rupam Ekka',
    position: 'President',
  },
  {
    id: 2,
    src: '/images/ohm.jpeg',
    name: 'Ohm Gupta',
    position: 'Joint President',
  },
  {
    id: 3,
    src: '/images/dhiren.jpeg',
    name: ' Dhiren Kumar',
    position: 'Vice President',
  },
  {
    id: 4,
    src: '/images/tushar.jpg',
    name: 'Tushar Kanthi',
    position: 'Vice President',
  },
  {
    id: 5,
    src: '/images/ritika.jpeg',
    name: 'Ritika',
    position: 'Events Head',
  },
  {
    id: 6,
    src: '/images/aman.jpeg',
    name: 'Aman',
    position: 'Events Head',
  },
  {
    id: 7,
    src: '/images/ajitesh.jpeg',
    name: 'Ajitesh Harshit',
    position: 'Master of Pulpit',
  },
  {
    id: 8,
    src: '/images/abhinav.jpeg',
    name: 'Abhinav Mahanti',
    position: 'Quiz Master',
  },
  {
    id: 9,
    src: '/images/shivam.jpeg',
    name: 'Shivam Raj',
    position: 'Design Head',
  },
  {
    id: 10,
    src: '/images/harsh.jpg',
    name: 'Harsh Ranjan',
    position: 'General Secretary',
  },
  {
    id: 11,
    src: '/images/nikhil.jpeg',
    name: 'Nikhil Verma',
    position: 'Joint Secretary',
  },
  {
    id: 12,
    src: '/images/penguin.jpeg',
    name: 'Kumar Harshwardhan',
    position: 'Joint Secretary',
  },
  {
    id: 13,
    src: '/images/akshay.jpeg',
    name: 'Akshay Tripathi',
    position: 'Treasurer',
  },
  {
    id: 14,
    src: '/images/chhavi.jpeg',
    name: 'Chhavi Rani',
    position: 'Joint Treasurer',
  },
 
  {
    id: 18,
    src: '/images/shaurya.jpg',
    name: 'Shaurya Singh',
    position: 'Pulpit Coordinator',
  },
  {
    id: 20,
    src: '/images/dubey.jpg',
    name: 'Aditya Dubey',
    position: 'Quiz Coordinator',
  },
  {
    id: 21,
    src: '/images/amiya.jpg',
    name: 'Amiya Jha',
    position: 'Quiz Coordinator',
  },
  {
    id: 22,
    src: '/images/gaurav.jpg',
    name: 'Gaurav Kumar Singh',
    position: 'Quiz Coordinator',
  },
  {
    id: 26,
    src: '/images/sumeet.jpg',
    name: 'Sumeet Kumar',
    position: 'Document Coord',
  },
  {
    id: 26,
    src: '/images/khushi.jpg',
    name: 'Khushi',
    position: 'Executive Member',
  },
];

const TeamPage: React.FC = () => {
  return (
    <div className={styles['container']}>
      <TeamComponent teamData={teamData}/>
    </div>
  );
};

export default TeamPage;
