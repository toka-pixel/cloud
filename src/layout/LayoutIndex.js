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
      <Footer className={styles.footer}>
        <span className={styles.questions}>Got questions? </span>Take a look at
        our
        <span className={styles.skyed}>FAQs</span> talk to us on Twitter
        <span className={styles.skyed}>@icloudready</span>
        or send an email to
        <span className={styles.skyed}>team@icloud-ready.com</span>
      </Footer>
    </Layout>
  );
};

export default LayoutIndex;
