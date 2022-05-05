import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { newPath, pathName, researchPath, socialPath, usedPath } from "helpers/constants";
import { IFooter, ISocial } from "types/footer";
import { MouseEvent } from 'react';
import { AppStoreIcon, FacebookIcon, GooglePlayIcon, InstagramIcon, LinkedIcon, TwitterIcon, YoutubeIcon } from 'assets/icons';

const renderAbout: Array<IFooter> = [
  {
    title: 'Products',
    child: [
      { title: 'Used', path: usedPath.USED_CAR_RESEARCH },
      { title: 'New', path: newPath.NEW_CARD_LISTINGS },
      { title: 'Sell/Trade', path: pathName.SELL_TRADE },
      { title: 'EV', path: researchPath.ELECTRIC_VEGICLES },
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

const socialsLeft: Array<ISocial> = [
  {
    icon: FacebookIcon,
    iconName: 'Facebook',
    path: socialPath.FACEBOOK
  },
  {
    icon: TwitterIcon,
    iconName: 'Twitter',
    path: socialPath.TWITTER
  },
  {
    icon: InstagramIcon,
    iconName: 'Instagram',
    path: socialPath.INSTAGRAM
  },
  {
    icon: LinkedIcon,
    iconName: 'Linked',
    path: socialPath.LINKED
  },
  {
    icon: YoutubeIcon,
    iconName: 'Youtube',
    path: socialPath.YOUTUBE
  }
];

const socialsRight: Array<ISocial> = [
  {
    icon: AppStoreIcon,
    iconName: 'App Store',
    path: socialPath.APP_STORE
  },
  {
    icon: GooglePlayIcon,
    iconName: 'Google Play',
    path: socialPath.GOOGLE_PLAY
  }
]

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
                </ul>
              </div>
            })}
          </div>
          <div className='grid grid-cols-2'>
            <div className='flex justify-start'>
              {/* {socialsLeft && socialsLeft.map((el, idx) => {
                return <a className='flex-[0_0_9%]' key={idx} href={el.path}><Image width='16px' height='16px' src={el.icon} alt={el.iconName} /></a>
              })} */}
            </div>
            <div className='flex justify-end'>
              {/* {socialsRight && socialsRight.map((el, idx) => {
                return <a key={idx} href={el.path} className="border border-[#343434] ml-[8px]"><Image width='128px' height='35px' src={el.icon} alt={el.iconName} /></a>
              })} */}
            </div>
          </div>
          <div className='text-center text-[12px] grid grid-cols-1 gap-y-[10px]'>
            <div>
              <span className='font-radikal-regular'>For questions about the TrueCar Auto Buying Service please call </span> <span className='text-[#999999]'>1-888-878-3227</span> <span>.</span>
            </div>
            <div>
              <span className='font-radikal-regular'>Certified Dealers are contractually obligated by TrueCar to meet certain customer service requirements and complete the TrueCar Dealer Certification Program.</span>
            </div>
            <div>
              <span className='font-radikal-regular'>TrueCar does not broker, sell, or lease motor vehicles. Unless otherwise noted, all vehicles shown on this website are offered for sale by licensed motor
                vehicle dealers. All vehicles are subject to prior sale. By accessing this website, you agree to the TrueCar Terms of Service and Privacy Policy.</span>
            </div>
            <div className='text-[#999999] flex justify-center gap-x-1'>
              <span>Terms of Service</span>
              <span className='text-white'>|</span>
              <span>Privacy Policy</span>
              <span className='text-white'>|</span>
              <span>Do Not Sell My Personal Information</span>
            </div>
          </div>
        </div>
        <div className='text-center py-[50px] px-[15px]'>© and ™ TrueCar, Inc. All rights reserved. Vehicle photos © Evox Images © 1986-2022 Chrome Data Solutions, LP</div>
      </footer>
    </div>
  );
};

export default Footer