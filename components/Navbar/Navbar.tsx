import { Select } from "antd";
import Link from "next/link";

import styles from "./NavBar.module.scss";

const Navbar = () => {
  const router: any = [
    {
      url: "",
    },
  ];

  return (
    <header>
      <div className={styles["navbar-container"]}>
        <img
          src="https://consumer.tcimg.net/assets/_next/static/images/tc-logo-black-500-5b9752820428fd08072ac20b14965287.png?h=39&w=133"
          alt="True Car"
        />
        <div className={styles[""]}>
          <ul className="d-flex list-unstyled">
            <li>
              <Select bordered={false} placeholder="New">
                <Select.Option value="1">1</Select.Option>
                <Select.Option value="2">2</Select.Option>
                <Select.Option value="3">3</Select.Option>
              </Select>
            </li>
            <li>
              <Select bordered={false} placeholder="Used"></Select>
            </li>
            <li>
              <Select bordered={false} placeholder="Research"></Select>
            </li>
            <li>
              <Link href=""></Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
