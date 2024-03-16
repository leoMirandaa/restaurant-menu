import { Layout, Typography, theme } from "antd";
const { Sider } = Layout;
const { Title } = Typography;

import { MenuItems } from "./MenuItems";
import styles from "../../styles/sidebar.module.css";

export const Sidebar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { useToken } = theme;
  const { token } = useToken();

  return (
    <Sider
      className={styles.sidebarMenuContainer}
      theme="light"
      style={{ position: "sticky" }}
      width={250}
    >
      <div className={styles.sidebarTitle}>
        <Title
          level={2}
          style={{
            color: token.colorPrimary,
            marginTop: "1rem",
          }}
        >
          Menu
        </Title>
      </div>

      <MenuItems />
    </Sider>
  );
};
