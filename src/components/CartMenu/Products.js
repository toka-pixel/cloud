import React from "react";
import { Row, Col, Divider, message } from "antd";
import {
  BoxPlotOutlined,
  DeleteOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import CartContext from "../../context/CartContext";
import styles from "./CartMenu.module.scss";

const Products = () => {
  const { cartItems, addItem, removeItem, decreaseItem } =
    React.useContext(CartContext);

  const handleAddItem = (item) => {
    addItem(item);
  };

  const handleDecreaseItem = (item) => {
    decreaseItem(item);
  };

  const handleRemove = (item) => {
    removeItem(item);
    message.warning("remove item");
  };

  return (
    <div>
      <Row>
        <Col span={12}>Product</Col>
        <Col span={9}>Qty</Col>
        <Col span={1}>Remove</Col>
      </Row>
      <Divider />

      {cartItems.map((item, index) => (
        <div key={index}>
          <Row>
            <Col span={12}>
              <div className={"leftSide"}>
                <BoxPlotOutlined className={"box"} />
                <span className="title_price">
                  <span className={"title"}>{item.title}</span>
                  <span className={"price"}>{item.price}</span>
                </span>
              </div>
            </Col>
            <Col span={9} className={styles.quantity}>
              <span className={styles.value}>{item.quantity}</span>
              <span>
                <CaretUpOutlined
                  onClick={() => handleAddItem(item)}
                  className={styles.action}
                />

                <CaretDownOutlined
                  onClick={() => handleDecreaseItem(item)}
                  className={styles.action}
                />
              </span>
            </Col>
            <Col span={1}>
              <DeleteOutlined
                onClick={() => handleRemove(item)}
                className={"delete"}
              />
            </Col>
          </Row>
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default Products;
