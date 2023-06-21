import React from "react";
import Link from "next/link";
import Image from "next/image";
import {message} from 'antd'
import { PlusOutlined, FundViewOutlined } from "@ant-design/icons";
import CartContext from "../../context/CartContext";
import styles from "./Card.module.scss";

const Card = (props) => {
  const { card } = props;

  const { id, title, price, img, color, description } = card;

  const { addItem } = React.useContext(CartContext);

  const handleClick = (card) => {
    addItem(card);
    message.success('add item successfully')
  };

  return (
    <div className={styles.card}>
      <div className={styles.containImg}>
        <Link
          href={{
            pathname: "/card",
            query: { cardTitle: card.title },
          }}
        >
          <Image
            src={`/imgs/home/${img}`}
            width={100}
            height={160}
            alt={title}
            className={styles.mainImg}
          />
        </Link>
      </div>
      <div className={`${styles.content}  ${styles[color]}`}>
        <p>{title}</p>
        <p>{description}</p>
        <div className={styles.priceOptions}>
          <label>{price} DTSU*</label>
          <label className={styles.options}>
            <FundViewOutlined className={`backgroundIcon`} />
            <PlusOutlined
              onClick={() => handleClick(card)}
              className={`backgroundIcon`}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Card;
