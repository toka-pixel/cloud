import Image from "next/image";
import { FilterOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import Card from "../Card/Card";
import data from "./data.json";
import styles from "./GetSupport.module.scss";

const GetSupport = () => {
  return (
    <div className={styles.support}>
      <div className={styles.logoFilter}>
        <div className={styles.logo}>
          <p>Get Support</p>
          <Image
            src="/imgs/home/diamond.png"
            width={20}
            height={20}
            alt="logo"
          />
        </div>
        <FilterOutlined className="backgroundIcon" />
      </div>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {data.map((item) => (
          <Col key={item.id} xs={24} sm={12} md={12} lg={6}>
            <Card card={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default GetSupport;
