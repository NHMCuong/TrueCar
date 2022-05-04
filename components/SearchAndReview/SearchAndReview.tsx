import Image from 'next/image';
import Military from "assets/images/military.png";
import styles from "./SearchAndReview.module.scss";
import { useRouter } from 'next/router';
import { MouseEvent, useState } from 'react';
import { Button, Form, Select } from 'antd';
const { Option } = Select;

export const SearchAndReview = () => {
  const [form] = Form.useForm();
  const [makeFieldValue, setMakeFieldValue] = useState<boolean>(false);

  const onFinish = (values: any) => {
    console.log('values', values)
  }



  return <section className="w-full bg-[#f8f8f8]">
    <div className={`${styles.Container} pt-[5.3125rem]`}>
      <div className='flex items-center w-full'>
        <div className='flex-[0_0_50%] mt-0 mb-6 max-w-[50%] px-[5px]'>
          <h2 className='font-radikal-regular text-[22px] leading-[30px]'>{`Research. Compare. Find What's Right for You.`}</h2>
          <p className='my-[1.25rem] text-[16px]'>
            Use our extensive database to research and compare trims, photos, and reviews for every make and model, so you can find the car that fits your life.
          </p>
          <div>
            <Form
              form={form}
              layout="vertical"
              initialValues={{}}
              onFinish={onFinish}
            >
              <div className="flex gap-x-[10px] w-full items-center cutomize-select-box">
                <Form.Item label="Make" name="make" className="flex-[0_0_40%]">
                  <Select placeholder="Select Make" onChange={(e) => !makeFieldValue && setMakeFieldValue(true)}>
                    <Option value="Acura">Acura</Option>
                    <Option value="Audi">Audi</Option>
                    <Option value="FIAT">FIAT</Option>
                    <Option value="Ford">Ford</Option>
                    <Option value="Jeep">Jeep</Option>
                  </Select>
                </Form.Item>

                <Form.Item label="Model" name="model" className="flex-[0_0_40%]">
                  <Select disabled={!makeFieldValue} placeholder="Select Model" onChange={(e) => console.log('value', e)}>
                    <Option value="CT4">CT4</Option>
                    <Option value="CT4-V">CT4-V</Option>
                    <Option value="CT5">CT5</Option>
                    <Option value="CT5-V">CT5-V</Option>
                    <Option value="DTS">DTS</Option>
                    <Option value="XT5">XT5</Option>
                  </Select>
                </Form.Item>
                <Form.Item label=" " className='flex-[0_0_13%]'>
                  <Button className='w-full' shape="round" type="primary" htmlType="submit">
                    Go
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
        <div className='flex-[0_0_50%] mt-0 mb-6 max-w-[50%] px-[5px]'>
          <div className='h-auto pb-[0.66875] w-full'>
            <img src="https://consumer.tcimg.net/assets/_next/static/images/research-and-compare-48d73c06611e64122f4fb2f02404d4a3.svg" className='object-contain bg-[50%]' alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
}