import { UserOutlined } from "@ant-design/icons";
import { Divider, Select } from "antd";
import Link from "next/link";

import styles from "./NavBar.module.scss";

const Navbar = () => {
  const routerNew: any = [
    {
      url: "/shop/new",
      title: "Build and Price",
    },
    {
      url: "/deals",
      title: "Deals",
    },
    {
      url: "/new-cars-for-sale/listings",
      title: "New Car Listings",
    },
    {
      url: "/new-cars-for-sale/listings/body-truck",
      title: "New Trucks",
    },
    {
      url: "/new-cars-for-sale/listings/body-suv",
      title: "New SUVs",
    },
    {
      url: "/new-cars-for-sale/listings/body-van",
      title: "New Vans",
    },
    {
      url: "/new-cars-for-sale/listings/body-convertible",
      title: "New Convertibles",
    },
    {
      url: "/new-cars-for-sale/listings/fuel-electric",
      title: "New EVs",
    },
  ];

  const routeUsed = [
    {
      url: "/used-cars-for-sale",
      title: "Used Car Research",
    },
    {
      url: "/used-cars-for-sale/listings",
      title: "Used Car Listings",
    },
    {
      url: "/used-cars-for-sale/listings/body-truck",
      title: "Used Trucks",
    },
    {
      url: "/used-cars-for-sale/listings/body-suv",
      title: "Used SUVs",
    },
    {
      url: "/used-cars-for-sale/listings/body-van",
      title: "Used Vans",
    },
    {
      url: "/used-cars-for-sale/listings/body-convertible",
      title: "Used Convertibles",
    },
    {
      url: "/used-cars-for-sale/listings/fuel-electric",
      title: "Used EVs",
    },
  ];

  const routeReseach = [
    {
      url: "/car-reviews",
      title: "Car Reviews",
    },
    {
      url: "/best-cars-trucks",
      title: "Car Rankings",
    },
    {
      url: "/compare",
      title: "Compare Cars",
    },
    {
      url: "/car-loan-calculator",
      title: "Auto Loan Calculator",
    },
    {
      url: "/car-lease-calculator",
      title: "Auto Lease Calculator",
    },
    {
      url: "https://www.truecar.com/blog/",
      title: "Articles & Shopping Guides",
    },
    {
      url: "/l/lease-a-car",
      title: "Lease a Car",
    },
    {
      url: "/electric",
      title: "Electric Vegicles",
    },
    {
      url: "/research",
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
                {routerNew.map((route: { url: string; title: string }) => (
                  <Select.Option value={route.title}>
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
                {routeUsed.map((route: { url: string; title: string }) => (
                  <Select.Option value={route.title}>
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
                {routeReseach.map((route: { url: string; title: string }) => (
                  <Select.Option value={route.title}>
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
