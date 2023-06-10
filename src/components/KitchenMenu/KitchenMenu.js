import { GroupOutlined } from "@ant-design/icons";

const KitchenMenu = () => {
  return (
    <div>
      <p className={styles.action}>
        <GroupOutlined className={"backgroundIcon"} />
        <span className={styles.count}>9</span>
      </p>
    </div>
  );
};

export default KitchenMenu;
