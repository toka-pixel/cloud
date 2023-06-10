import { Layout } from "antd";
import HeaderContent from "@/common/HeaderContent/HeaderContent";
import styles from "./Layout.module.scss";

const LayoutIndex = (props) => {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout className={styles.layout} style={{ minHeight: "100vh" }}>
      <Header className={styles.header}>
        <HeaderContent />
      </Header>
      <Content className={styles.content}>{props.children}</Content>
      <Footer>footer</Footer>
    </Layout>
  );
};

export default LayoutIndex;
