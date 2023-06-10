import Image from "next/image";
import styles from './CartMenu.module.scss'

import { InfoOutlined } from "@ant-design/icons";
const MoreInfo = () => {
  return (
    <div className={styles.moreInfo}>
      <div className={styles.gift}>
        <Image
          src="/imgs/home/gift-box.png"
          width={15}
          height={15}
          alt="gift"
        />
        <span>
          Your have made a great chooseLet's Run and be ready for a surprise
        </span>
      </div>

      <div className={styles.info}>
        <InfoOutlined  className={styles.infoIcon} />
        <span>
          Some requests can take a week or moreto be delivered and may be
          subject to dependency resolutions related to your
        </span>
      </div>
    </div>
  );
};

export default MoreInfo;
