
import Image from "next/image";
import CartMenu from "@/components/CartMenu/CartMenu";
import KitchenMenu from "@/components/KitchenMenu/KitchenMenu";
import styles from "./HeaderContent.module.scss";

const HeaderContent = () => {
  const architects = ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg"];
  return (
    <div className={styles.headerContent}>
      <div className={styles.logo}>
        <p>Welcome to iCloudReady!</p>
        <label>You have started your 30 day trial</label>
      </div>
      <div className={styles.architects}>
        <div className={styles.imgs}>
          {architects.map((item, index) => (
            <Image
              className={styles.img}
              src={`/imgs/architects/${item}`}
              key={index}
              alt="architects"
              width={40}
              height={40}
            />
          ))}
          <span className={styles.numArchitects}>+3</span>
        </div>
        <div>
          <p> Our architects are here to help</p>
          <label className={styles.book}>Book a free session</label>
        </div>
      </div>
      <div className={styles.actions}>
      <CartMenu />
   <KitchenMenu />
       
      </div>
    </div>
  );
};

export default HeaderContent;
