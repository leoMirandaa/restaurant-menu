import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Layout, theme, Typography, Button } from "antd";
import { GithubOutlined, HomeOutlined, MenuOutlined } from "@ant-design/icons";
import { IconChefHat } from "@tabler/icons-react";
const { Header } = Layout;
const { Title } = Typography;

import { DishesDrawer } from ".";
import navStyles from "../../styles/dishesNavbar.module.css";
import styles from "../../styles/navbar.module.css";

export const DishesNavbar = () => {
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
          <Title
            level={1}
            style={{ fontSize: "24px" }}
          >
            Magenta kitchen
          </Title>
        </Link>

        <div className={navStyles.hamburgerMenuIcon}>
          <Button
            onClick={showDrawer}
            icon={<MenuOutlined />}
          />
        </div>

        <div className={styles.headerButtonsContainer}>
          <Button
            onClick={() =>
              router.push("https://github.com/leoMirandaa/restaurant-menu.git")
            }
            style={{ marginRight: ".5rem" }}
            icon={<GithubOutlined />}
          />

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
