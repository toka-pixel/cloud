import { Button } from "antd";
import styles from "./SubmitButton.module.scss";

const SubmitButton = (props) => {
  const { text, skyBackground } = props;
  return (
    <Button
      className={`${styles.submitButton} ${
        skyBackground ? styles["skyBackground"] : styles["withoutBackground"]
      }`}
    >
      {text}
    </Button>
  );
};

export default SubmitButton;
