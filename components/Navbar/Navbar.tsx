import { newPath, researchPath, usedPath } from "helpers/constants";
import { UserOutlined } from "@ant-design/icons";
import { Divider, Select } from "antd";
import Link from "next/link";

import styles from "./NavBar.module.scss";

const Navbar = () => {
  const routerNew: any = [
    {
      url: newPath.BUILD_AND_PRICE,
      title: "Build and Price",
    },
    {
      url: newPath.DEALS,
      title: "Deals",
    },
    {
      url: newPath.NEW_CARD_LISTINGS,
      title: "New Car Listings",
    },
    {
      url: newPath.NEW_TRUCKS,
      title: "New Trucks",
    },
    {
      url: newPath.NEW_SUV,
      title: "New SUVs",
    },
    {
      url: newPath.NEW_VANS,
      title: "New Vans",
    },
    {
      url: newPath.NEW_CONVERTIBLES,
      title: "New Convertibles",
    },
    {
      url: newPath.NEW_EV,
      title: "New EVs",
    },
  ];

  const routeUsed = [
    {
      url: usedPath.USED_CAR_RESEARCH,
      title: "Used Car Research",
    },
    {
      url: usedPath.USED_CARD_LISTINGS,
      title: "Used Car Listings",
    },
    {
      url: usedPath.USED_TRUCKS,
      title: "Used Trucks",
    },
    {
      url: usedPath.USED_SUV,
      title: "Used SUVs",
    },
    {
      url: usedPath.USED_VANS,
      title: "Used Vans",
    },
    {
      url: usedPath.USED_CONVERTIBLES,
      title: "Used Convertibles",
    },
    {
      url: usedPath.USED_EV,
      title: "Used EVs",
    },
  ];

  const routeReseach = [
    {
      url: researchPath.CAR_REVIEWS,
      title: "Car Reviews",
    },
    {
      url: researchPath.CARD_RANKINGS,
      title: "Car Rankings",
    },
    {
      url: researchPath.COMPARE_CARS,
      title: "Compare Cars",
    },
    {
      url: researchPath.AUTO_LOAN_CALCULATOR,
      title: "Auto Loan Calculator",
    },
    {
      url: researchPath.AUTO_LEASE_CALCULATOR,
      title: "Auto Lease Calculator",
    },
    {
      url: researchPath.ARTICLES_SHOPPING_GUIDES,
      title: "Articles & Shopping Guides",
    },
    {
      url: researchPath.LEASE_CAR,
      title: "Lease a Car",
    },
    {
      url: researchPath.ELECTRIC_VEGICLES,
      title: "Electric Vegicles",
    },
    {
      url: researchPath.RESEARCH_CENTER,
      title: "Research Center",
    },
  ];

  return (
    <header>
      <div className="container mx-auto flex items-center justify-between h-[60px]">
        <img
          src="https://consumer.tcimg.net/assets/_next/static/images/tc-logo-black-500-5b9752820428fd08072ac20b14965287.png?h=39&w=133"
          alt="True Car"
        />
        <div className="flex items-center justify-center">
          <ul className="flex list-none m-0">
            <li>
              <Select
                className="mx-[20px]"
                bordered={false}
                placeholder={<div className="text-[18px] text-black">New</div>}
                dropdownStyle={{ minWidth: "220px", padding: "20px" }}
              >
                {routerNew.map((route: { url: string; title: string }, idx: number) => (
                  <Select.Option value={route.title} key={idx}>
                    <Link href={route.url}>
                      <a className="text-black text-[18px] hover:text-black hover:underline">
                        {route.title}
                      </a>
                    </Link>
                  </Select.Option>
                ))}
              </Select>
            </li>
            <li>
              <Select
                bordered={false}
                placeholder={<div className="text-[18px] text-black">Used</div>}
                dropdownStyle={{ minWidth: "250px", padding: "20px" }}
              >
                {routeUsed.map((route: { url: string; title: string }, idx: number) => (
                  <Select.Option value={route.title} key={idx}>
                    <Link href={route.url}>
                      <a className="text-black text-[18px] hover:text-black hover:underline">
                        {route.title}
                      </a>
                    </Link>
                  </Select.Option>
                ))}
              </Select>
            </li>
            <li>
              <Select
                bordered={false}
                placeholder={
                  <div className="text-[18px] text-black">Research</div>
                }
                dropdownStyle={{ minWidth: "270px", padding: "20px" }}
              >
                {routeReseach.map((route: { url: string; title: string }, idx: number) => (
                  <Select.Option value={route.title} key={idx}>
                    <Link href={route.url}>
                      <a className="text-black text-[18px] hover:text-black hover:underline">
                        {route.title}
                      </a>
                    </Link>
                  </Select.Option>
                ))}
              </Select>
            </li>
            <li className="flex items-center justify-center mx-7">
              <Link href="">
                <a className="text-black text-[18px] hover:text-black hover:underline">
                  Sale Your Car
                </a>
              </Link>
            </li>
          </ul>

          <Divider
            className="bg-black mx-8"
            style={{ height: "1.5em" }}
            type="vertical"
          />

          <div className="flex items-center mx-7">
            <Link href="">
              <a className="text-black text-[18px] hover:text-black hover:underline mr-2">
                Sign up
              </a>
            </Link>
            <UserOutlined className="text-[22px] ml-2" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
