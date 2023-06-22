import React, { useContext } from "react";
import { Drawer, Divider } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import KeyValueContent from "../../common/keyValueContent/keyValueContent";
import SubmitButton from "@/common/SubmitButton/SubmitButton";
import MoreInfo from "../MoreInfo/MoreInfo";
import Products from "./Products";
import Image from "next/image";
import CartContext from "../../context/CartContext";
import styles from "./CartMenu.module.scss";

const CartMenu = () => {
  const {
    toggleCartMenu,
    cartMenuStatus,
    cartItems,
    getTotalQuantity,
    getTotalPrice,
  } = useContext(CartContext);

  return (
    <div>
      <p className={"action"}>
        <ShoppingCartOutlined
          onClick={() => toggleCartMenu(true)}
          className={"backgroundIcon"}
        />
        <span className={"count"}>{getTotalQuantity()}</span>
      </p>

      <Drawer
        title="Cart Menu"
        placement="right"
        closable={true}
        onClose={() => toggleCartMenu(false)}
        open={cartMenuStatus}
        style={{ zIndex: 50000 }}
        key="right"
        width={400}
        className={"menu"}
      >
        {cartItems.length > 0 ? (
          <>
            <Products />

            <KeyValueContent
              text="Subtotal"
              value={`${getTotalPrice()} DTSUs`}
            />
            <KeyValueContent
              text="New Payment"
              value="No, Inclusive in your package"
            />
            <Divider />
            <KeyValueContent
              text="Total Units Consumed"
              value={`${getTotalPrice()} DTSUs`}
            />
            <br />

            <SubmitButton text="Checkout" skyBackground={true} />

            <SubmitButton text="Back to Run Information" />
            <MoreInfo />
          </>
        ) : (
          <div className={styles.emptyCart}>
            <Image
              src={`/imgs/home/cart.png`}
              width={50}
              height={50}
              alt={"emptyCart"}
            />
            <p>Your run cart is empty!</p>
            <p>start add your requests here</p>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default CartMenu;
