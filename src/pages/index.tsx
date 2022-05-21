import React from 'react';
import { Hello } from '~/components/Hello';
import styles from './Home.module.css';
import { MyDisclosure } from '~/components/MyDisclosure';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className={styles.title}>Home</h1>
      <p className='text-3xl font-bold'>Statham</p>
      <Hello />
      <MyDisclosure />
    </div>
  );
};

export default Home;
