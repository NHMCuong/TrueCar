import React from 'react';
import { useRouter } from 'next/router';
import { pathName } from "../../constants/pathName";
import { IFooter } from "../../models/footer";
import { MouseEvent } from 'react';

const renderAbout: Array<IFooter> = [
  {
    title: 'Products',
    child: [
      { title: 'Used', path: pathName.USED },
      { title: 'New', path: pathName.NEW },
      { title: 'Sell/Trade', path: pathName.SELL_TRADE },
      { title: 'EV', path: pathName.EV },
      { title: 'Military', path: pathName.MILITARY },
      { title: 'Buy Online', path: pathName.BUY_ONLINE },
      { title: 'Site Map', path: pathName.SITE_MAP },
    ]
  },
  {
    title: 'Resources',
    child: [
      { title: 'Blog', path: pathName.BLOG },
      { title: 'FAQ', path: pathName.FAQ },
      { title: 'Contact Us', path: pathName.CONTACT_US },
    ]
  },
  {
    title: 'Work With TrueCard',
    child: [
      { title: 'Dealers', path: pathName.DEALERS },
      { title: 'Partners', path: pathName.PARTNERS },
    ]
  },
  {
    title: 'About',
    child: [
      { title: 'TrueCard, Inc', path: pathName.TRUE_CARD_INC },
      { title: 'Team', path: pathName.TEAM },
      { title: 'Careers', path: pathName.CAREERS },
      { title: 'Press', path: pathName.PRESS },
      { title: 'Developers', path: pathName.DEVELOPERS },
      { title: 'Investors', path: pathName.INVESTORS }
    ]
  }
];

const Footer = () => {
  const router = useRouter();

  const handleRedirectPage = (e: MouseEvent, path: string) => {
    e.preventDefault();
    router.push(path)
  }

  return (
    <div className="text-white bg-black">
      <footer className="md:w-[728px] lg:w-[984px] xl:w-[1240px] mx-auto px-[15px]">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between py-6">
            {renderAbout && renderAbout.map((el, idx) => {
              return <div key={idx}>
                <div className="font-radikal-bold text-xl mb-4">{el.title}</div>
                <ul>
                  {el.child && el.child.map((e, i) => {
                    return <li onClick={(event) => handleRedirectPage(event, e.path)} className="underline underline-offset-1 text-base text-[#999999] leading-[2] cursor-pointer" key={i}>{e.title}</li>
                  })}
                  <li></li>
                </ul>
              </div>
            })}
          </div>
          <div>Social</div>
          <div>content</div>
        </div>
        <div>Copy right</div>
      </footer>
    </div>
  );
};

export default Footer