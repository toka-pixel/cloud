import Link from "next/link";
import Image from "next/image";
import { PlusOutlined, FundViewOutlined } from "@ant-design/icons";
import styles from "./Card.module.scss";

const Card = (props) => {
  const { card } = props;

  return (
    <div className={styles.card}>
      <Link
        href={{
          pathname: "/card",
          query: { cardTitle: card.title },
        }}
      >
        <Image
          src={`/imgs/home/${card.img}`}
          width={100}
          height={160}
          alt={card.title}
          className={styles.mainImg}
        />

        <div className={styles.content}>
          <p>{card.title}</p>
          <p>{card.description}</p>
          <div className={styles.priceOptions}>
            <label>{card.price} DTSU*</label>
            <label className={styles.options}>
              <FundViewOutlined className={`backgroundIcon`} />
              <PlusOutlined className={` backgroundIcon`} />
            </label>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
