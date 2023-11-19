import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Layout, theme, Typography, Button } from "antd";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons";
import { IconChefHat } from "@tabler/icons-react";
const { Header } = Layout;
const { Title } = Typography;

import { DishesDrawer } from ".";
import navStyles from "../../styles/dishesNavbar.module.css";
import styles from "../../styles/navbar.module.css";

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
          onClick={showDrawer}
          icon={<MenuOutlined style={{}} />}
        />

        <div className={styles.headerButtonsContainer}>
          <Button
            icon={<HomeOutlined />}
            onClick={() => router.push("/")}
          >
            Home
          </Button>
        </div>
      </nav>

      <DishesDrawer
        open={open}
        setOpen={setOpen}
      />
    </Header>
  );
};
