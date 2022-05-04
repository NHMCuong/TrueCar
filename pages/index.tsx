import { FindCard } from "@/components/FindCard/FindCard";
import type { NextPage } from "next";

import styles from "styles/Home.module.scss";
import { BrowseByBrand } from "../components/BrowseBrand/BrowseBrand";
import { TopVehicle } from "../components/TopVehicle/TopVehicle";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <main className={styles.main}>
          <FindCard />
          <BrowseByBrand />
          <TopVehicle />
        </main>
      </div>
    </>
  );
};

export default Home;
