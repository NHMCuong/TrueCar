import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}></main>
      </div>

      <Footer />
    </>
  );
};

export default Home;
