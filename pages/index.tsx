import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          TrueCar | New and Used Cars for Sale | Car Pricing and Reviews
        </title>
        <meta
          name="description"
          content="TrueCar lets you control your car-buying journey. Shop new & used cars, sell your car, and find all the vehicle information you need with our research tools."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}></main>
      </div>
      
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
