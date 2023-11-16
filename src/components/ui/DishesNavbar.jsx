import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Layout, theme, Typography, Button, Drawer, Menu, Tooltip } from "antd";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons";
const { Header } = Layout;
const { Title } = Typography;
import { IconChefHat } from "@tabler/icons-react";

import { DishesDrawer } from ".";
import styles from "../../styles/navbar.module.css";
import navStyles from "../../styles/dishesNavbar.module.css";

export const DishesNavbar = ({ themeSelected, setThemeSelected }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { useToken } = theme;
  const { token } = useToken();

  const showDrawer = () => {
    setOpen(true);
  };

  return (
    <Header
      className={styles.headerContainer}
      style={{ background: colorBgContainer, padding: "0px" }}
    >
      <nav className={`container ${styles.navContainer}`}>
        <Link
          href="/"
          className={styles.navContainerOptions}
        >
          <IconChefHat
            size={30}
            color={`${token.colorPrimary}`}
          />
          <Title level={3}>Magenta kitchen</Title>
        </Link>

        <Button
          className={navStyles.hamburgerMenuIcon}
          type="text"
          onClick={showDrawer}
          icon={
            <MenuOutlined
              style={{ color: token.colorPrimary, fontSize: "1.4rem" }}
            />
          }
        />

        <div className={styles.headerButtonsContainer}>
          <Button
            icon={<HomeOutlined />}
            type="primary"
            onClick={() => router.push("/")}
          >
            Home
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

      <DishesDrawer
        open={open}
        setOpen={setOpen}
      />
    </Header>
  );
};
