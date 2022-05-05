import { useState } from "react";

import { Col, Row } from "antd";

import Image from "next/image";

import { newCar, usedCar } from "../../helpers/fakeData/browser-brand";

import styles from "./BrowseBrand.module.scss";
import { useRouter } from "next/router";

export const BrowseByBrand = () => {
  const router = useRouter();

  const [swith, setSwitch] = useState("new");

  return (
    <div className="w-full pb-[4.0625rem]">
      <section>
        <div className="container m-auto max-w-[1024px]">
          <div className="text-center mb-8">
            <h2 className="text-center text-[1.8rem] font-bold mb-5">
              Browse by Brand
            </h2>
            <div className={styles["switch-bar"]}>
              <a
                className={`${styles["switch"]} ${
                  swith === "new" ? `${styles.active}` : ""
                }`}
                onClick={() => setSwitch("new")}
              >
                New Cars
              </a>
              <a
                className={`${styles["switch"]} ${
                  swith === "used" ? `${styles.active}` : ""
                }`}
                onClick={() => setSwitch("used")}
              >
                Used Cars
              </a>
            </div>
          </div>
          {swith === "new" && (
            <Row gutter={[10, 30]}>
              {newCar.map((e, idx) => (
                <Col key={idx} xxl={6} xl={6} lg={6} md={8} sm={8} xs={12}>
                  <div
                    className="flex"
                    onClick={() => {
                      router.push(e.path);
                    }}
                  >
                    <div className="w-[30px] h-[30px] mr-5">
                      {/* <Image src={e.logo} alt={e.name} width={30} height={30} /> */}
                    </div>
                    <div className="flex items-center justify-start">
                      <p className="m-0">{e.name}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          )}
          {swith === "used" && (
            <Row gutter={[10, 30]}>
              {usedCar.map((e, idx) => (
                <Col key={idx} xxl={6} xl={6} lg={6} md={8} sm={8} xs={12}>
                  <div className="flex">
                    <div className="w-[30px] h-[30px] mr-5">
                      {/* <Image src={e.logo} alt={e.name} width={30} height={30} /> */}
                    </div>
                    <div className="flex items-center justify-start">
                      <p className="m-0">{e.name}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </section>
    </div>
  );
};
