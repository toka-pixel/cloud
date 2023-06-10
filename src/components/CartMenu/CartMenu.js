import { useState } from "react";
import { Drawer,  Row, Col, Divider,InputNumber  } from "antd";
import {
  ShoppingCartOutlined,
  BoxPlotOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import data from "./data.json";
import KeyValueContent from "../../common/keyValueContent/keyValueContent";
import SubmitButton from "@/common/SubmitButton/SubmitButton";
import MoreInfo from "./MoreInfo";
import styles from "./CartMenu.module.scss";

const CartMenu = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <p className={"action"}>
        <ShoppingCartOutlined
          onClick={showDrawer}
          className={"backgroundIcon"}
        />
        <span className={"count"}>7</span>
      </p>

      <Drawer
        title="Cart Menu"
        placement="right"
        closable={true}
        onClose={onClose}
        open={open}
        style={{ zIndex: 50000 }}
        key="right"
        width={350}
        className={styles.cartMenu}
      >
        <Row>
          <Col span={12}>Product</Col>
          <Col span={9}>Qty</Col>
          <Col span={1}>Remove</Col>
        </Row>
        <Divider />

        {data.map((item, index) => (
          <div key={index}>
            <Row>
              <Col span={12}>
                <div className={styles.leftSide}>
                  <BoxPlotOutlined className={styles.box} />
                  <span>
                    <span className={styles.title}>{item.title}</span>
                    <span className={styles.price}>{item.price}</span>
                  </span>
                </div>
              </Col>
              <Col span={9}><InputNumber /></Col>
              <Col span={1}>
                <DeleteOutlined className={styles.delete} />
              </Col>
            </Row>
            <Divider />
          </div>
        ))}

        <KeyValueContent text="Subtotal" value="1.00 DTSUs" />
        <KeyValueContent
          text="New Payment"
          value="No, Inclusive in your package"
        />
        <Divider />
        <KeyValueContent text="Total Units Consumed" value="1.00 DTSUs" />
        <br />

        <SubmitButton text="Checkout" skyBackground={true} />

        <SubmitButton text="Back to Run Information" />
      <MoreInfo />
      </Drawer>
    </div>
  );
};

export default CartMenu;
