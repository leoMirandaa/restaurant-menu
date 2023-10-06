import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Layout, theme, Typography, Button, Drawer, Menu } from "antd";
import { IconChefHat, IconMenu2 } from "@tabler/icons-react";
import { HomeOutlined, ReadOutlined, MenuOutlined } from "@ant-design/icons";
const { Header } = Layout;
const { Title } = Typography;

import styles from "../styles/navbar.module.css";
import { homeOptions } from "@/utils/homeOptions";

export const HomeNavbar = ({ themeSelected, setThemeSelected }) => {
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

  const onClose = () => {
    setOpen(false);
  };

  const handleCloseDrawer = () => {
    setTimeout(() => {
      setOpen(false);
    }, 350);
  };

  return (
    <Header
      className={styles.headerContainer}
      style={{ background: colorBgContainer }}
    >
      <nav className={styles.navContainer}>
        <div className={styles.navContainerOptions}>
          <Link
            href="/"
            style={{ display: "flex" }}
          >
            <IconChefHat
              size={25}
              color={`${token.colorPrimary}`}
            />
            <Title level={4}>Magenta kitchen</Title>
          </Link>

          <Button
            className={styles.menuIcon}
            type="text"
            onClick={showDrawer}
            icon={<MenuOutlined style={{ color: token.colorPrimary }} />}
          />

          {/* <Button 
            // className={styles.menuIcon} 
            type="text" 
            size='large'
            icon={<ReadOutlined/>} 
            onClick={() => router.push('/dishes')}
          >
            Menu
            </Button> */}
        </div>

        <div className={styles.headerButtonsContainer}>
          <Button
            icon={<HomeOutlined />}
            size="large"
            type="text"
            onClick={() => router.push("/")}
          >
            Home
          </Button>

          <Button
            icon={<ReadOutlined />}
            size="large"
            type="text"
            onClick={() => router.push("/dishes")}
            // onClick={() => window.scroll({
            //   top: 0,
            //   left: 0,
            //   behavior: 'smooth'
            // })}
          >
            Menu
          </Button>

          <Button
            type="primary"
            size="large"
            onClick={() => router.push("/admin")}
          >
            Admin
          </Button>
        </div>
      </nav>

      <Drawer
        placement="left"
        onClose={onClose}
        open={open}
        width={278}
      >
        <div
          style={{
            background: token.colorBgContainer,
            paddingTop: "10px",
            borderRadius: "10px",
          }}
        >
          {/* <div style={{ textAlign: "center" }}>
            <Title
              level={2}
              style={{ color: token.colorPrimary, margin: "0px" }}
            >
              Menu
            </Title>
          </div> */}

          <Menu
            className={styles.drawerContainer}
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={...homeOptions}
            onClick={handleCloseDrawer}
          />
        </div>

        {/* <div>
          <Button 
            icon={<HomeOutlined />}
            onClick={() => router.push('/')}
          />

          <Button 
            type='primary' 
            style={{margin: '0px 20px'}}
            onClick={() => router.push('/admin')}
          >
            Admin
          </Button>
        </div> */}
      </Drawer>
    </Header>
  );
};
