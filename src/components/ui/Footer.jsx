import Link from "next/link";

import { Layout, theme } from "antd";
const { Footer } = Layout;
import styles from "../../styles/footer.module.css";

export const FooterComponent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Footer
      style={{ background: colorBgContainer }}
      className={styles.footerContainer}
    >
      <Link
        className={styles.footerText}
        href="https://leomiranda.vercel.app/"
      >
        Created by <u>Leo Miranda</u> ©2023
      </Link>
    </Footer>
  );
};
