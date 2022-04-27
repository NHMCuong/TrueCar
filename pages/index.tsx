import type { NextPage } from "next";

import styles from "styles/Home.module.scss";
import { BrowseByBrand } from "../components/BrowseBrand/BrowseBrand";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <main className={styles.main}>
          <BrowseByBrand />
        </main>
      </div>
    </>
  );
};

export default Home;
