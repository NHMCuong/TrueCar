import { FindCard } from "@/components/FindCard/FindCard";
import { SearchAndReview } from "@/components/SearchAndReview/SearchAndReview";
import { Button } from "antd";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "styles/Home.module.scss";
import { BrowseByBrand } from "../components/BrowseBrand/BrowseBrand";
import { TopVehicle } from "../components/TopVehicle/TopVehicle";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <div>
        <main className={styles.main}>
          <Button onClick={() => router.push('/deals')}>Mock-ss</Button>
          <Link href="/mock"><a href="">Mock Link</a></Link>
          <FindCard />
          <BrowseByBrand />
          <TopVehicle />
          <SearchAndReview />
        </main>
      </div>
    </>
  );
};

export default Home;
