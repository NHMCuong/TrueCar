import { Card, Col, Row } from "antd";
import Image from "next/image";
import { topVehicle } from "../../helpers/fakeData/top-vehicle";

export const TopVehicle = () => {
  return (
    <div className="w-full">
      <section className="bg-slate-50">
        <div className="container m-auto max-w-[1024px] py-20">
          <div className="mb-[1.875rem]">
            <h2 className="text-center text-[1.375rem] font-[500] mb-5">
              Your Guide to the Top Cars and Trucks
            </h2>
          </div>
          <Row gutter={[5, 25]}>
            {topVehicle.map((e, idx) => (
              <Col key={idx} xxl={8} xl={8} lg={8} md={12} sm={12} xs={24}>
                <Card className="shadow-lg w-[300px] text-center cursor-pointer">
                  <div>
                    {/* <Image src={e.img} width={100} height={50}/> */}
                  </div>
                  <div className="font-[700] text-[0.875rem] pt-2">{e.title}</div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </div>
  );
};
