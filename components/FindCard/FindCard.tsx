import Image from 'next/image';
import Military from "assets/images/military.png";
import styles from "./FindCard.module.scss";
import { useRouter } from 'next/router';
import { MouseEvent, useState } from 'react';
import { newPath, pathName, usedPath } from '@/helpers/constants';
import { Modal, Button } from 'antd';

import { IMedia } from 'types/footer';
import { CheckCircleOutlined, SettingOutlined } from '@ant-design/icons';

const mediaList: Array<IMedia> = [
  { icon: <CheckCircleOutlined height="26px" width="26px" />, content: 'Customize your monthly payments' },
  { icon: <CheckCircleOutlined height="26px" width="26px" />, content: 'Get an actual dealer offer for your trade-in' },
  { icon: <CheckCircleOutlined height="26px" width="26px" />, content: `Know every detail of what's in your deal` },
]

export const FindCard = () => {

  const router = useRouter();
  const [visiable, setVisibale] = useState<boolean>(false);

  const handleRedirectPage = (e: MouseEvent, path: string) => {
    e.preventDefault();
    router.push(path)
    newPath.BUILD_AND_PRICE
  }

  const handleConfirm = () => {
    setVisibale(true);
  }

  return (<div className={`w-full ${styles.bgLayer} mb-[4.0625rem]`}>
    <div className={`w-full ${styles.bgCustom}`}>
      <div className={styles.BuildYourDeal}>
        <div className={styles.Container}>
          <div className='flex flex-row justify-center items-center text-center'>
            <div className='h-[40px] w-[40px]'>
              {/* <Image src="https://consumer.tcimg.net/assets/_next/static/images/deal-builder-phone-woman-616ed1c091d6205e252e1d81e3f3ec38.svg" width="100%" height="100%" alt='not found' /> */}
            </div>
            <div className='flex flex-row gap-x-2 text-white'>
              <p className='m-0'>Build Your Deal: Create a personalized deal, customize your payment, and evaluate your trade-in – all online.</p>
              <span className='underline decoration-1 cursor-pointer hover:text-[#c2c2c2]' onClick={() => handleConfirm()}>Learn More</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`md:w-[728px] xl:w-[1240px] flex flex-col md:my-[4.0625rem] mx-auto`}>
        <div className="md:mx-auto text-center min-w-[100px] max-w-[700px] mb-[1.875rem]">
          <h1 className="font-radikal-bold text-[39px] m-0">Find the Car You Want, Your Way</h1>
          <h1 className="font-radikal-regular text-[22px] m-0 pt-[5px]">Then, build your deal to fit your needs.</h1>
        </div>
        <div className={`max-w-[495px] md:mx-auto bg-custom`}>
          <div className="flex flex-row w-full flex-wrap justify-between">
            <Button className={styles.Button} type="primary" shape="round" onClick={e => handleRedirectPage(e, `${newPath.BUILD_AND_PRICE}/?filterType=brand`)}>Shop New</Button>
            <Button className={styles.Button} type="primary" shape="round" onClick={e => handleRedirectPage(e, `${usedPath.SHOP_USED}/?filterType=brand`)}>Shop Used</Button>
          </div>
          <button className={styles.SellButton} onClick={e => handleRedirectPage(e, pathName.TRADE)}>Sell You Car</button>
          <div className="mt-10 cursor-pointer" onClick={(e) => handleRedirectPage(e, pathName.MILITARY)}>
            <div className={styles.ExclusiveMilitary}>
              <div className="p-[10px] w-full h-full flex flex-row items-center text-left">
                <div className="mr-2.5 h-[34px] w-[34px]">
                  {/* <Image src={Military} width="34px" height="34px" alt="https://www.truecar.com/military/" /> */}
                </div>
                <p className='m-0'>
                  <span className='font-radikal-bold'>Exclusive Military Incentives Available</span>
                  <br />
                  <span className='font-radikal-regular'>Savings for active military, veterans, and families.</span>
                  <span className='underline decoration-1'>Go</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Modal
        visible={visiable}
        title={null}
        footer={null}
        onCancel={() => setVisibale(false)}
        width='660px'
      >
        <div className='py-[2.5rem] px-[5.3125rem] bg-white'>
          <div className='flex flex-col items-center'>
            <div className='w-[100px] h-[100px]'>
              <Image src="https://consumer.tcimg.net/assets/_next/static/images/deal-builder-car-poke-7e6b57f4cefe1083952ba20e2981632c.svg" alt="" height='100%' width='100%' />
            </div>
            <h2 className='font-radikal-bold text-[22px] text-center'>{`You're in control of creating a deal that works for you.`}</h2>
            <div className='w-full mb-[30px]'>
              <ul>
                {
                  mediaList && mediaList.map((e, idx) => {
                    return <li key={idx} className="mb-[10px]">
                      <div className='flex'>
                        <div>{e.icon}</div>
                        <p className='m-0 ml-4 text-base font-radikal-regular'>{e.content}</p>
                      </div>
                    </li>
                  })
                }
              </ul>
            </div>
            <div className="flex items-center justify-start w-full">
              <SettingOutlined width="26px" height="26px" />
              <p className='m-0 ml-4 text-base font-radikal-regular'>Look for the customize your deal icon when choosing dealerships to connect with.</p>
            </div>
            <div className="font-radikal-bold text-base w-full text-center mt-[30px]">
              <Button onClick={(e) => setVisibale(false)} className='w-3/6' type="primary" shape="round">Ok</Button>
            </div>
          </div>
        </div>
      </Modal> */}
    </div>
  </div>)
}