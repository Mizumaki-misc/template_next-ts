import React from "react";
import { Hello } from "~/components/Hello";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div>
      <h1 className={styles.title}>Home</h1>
      <p>Statham</p>
      <Hello />
    </div>
  );
};

export default Home;
