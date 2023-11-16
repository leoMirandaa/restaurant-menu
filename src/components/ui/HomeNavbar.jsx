import { useRouter } from "next/router";

import { Layout, theme, Typography, Button, Tooltip } from "antd";
import { ReadOutlined } from "@ant-design/icons";
import { IconChefHat } from "@tabler/icons-react";

const { Header } = Layout;
const { Title } = Typography;
import styles from "../../styles/navbar.module.css";

export const HomeNavbar = ({ themeSelected, setThemeSelected }) => {
  const router = useRouter();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { useToken } = theme;
  const { token } = useToken();

  return (
    <Header
      className={styles.headerContainer}
      style={{ background: colorBgContainer, padding: "0px" }}
    >
      <nav className={`container ${styles.navContainer}`}>
        {/* mobile */}
        <div
          className={styles.navContainerOptions}
          onClick={() => router.push("/")}
        >
          <IconChefHat
            size={30}
            color={`${token.colorPrimary}`}
          />
          <Title level={3}>Magenta kitchen</Title>
        </div>

        {/* desktop */}
        <div className={styles.headerButtonsContainer}>
          <Button
            icon={<ReadOutlined />}
            type="primary"
            onClick={() => router.push("/dishes")}
          >
            Menu
          </Button>

          <Tooltip title="Coming soon">
            <Button
              type="primary"
              disabled
              onClick={() => router.push("/admin")}
            >
              Admin
            </Button>
          </Tooltip>
        </div>
      </nav>
    </Header>
  );
};
