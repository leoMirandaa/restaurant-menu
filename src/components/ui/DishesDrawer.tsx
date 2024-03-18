import { useRouter } from "next/router";
import { GithubOutlined } from "@ant-design/icons";
import { Button, Drawer, Typography, theme } from "antd";
const { Title } = Typography;

import { MenuItems } from "./MenuItems";
import styles from "../../styles/dishesNavbar.module.css";

export const DishesDrawer = ({ open, setOpen }) => {
  const router = useRouter();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { useToken } = theme;
  const { token } = useToken();

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      placement="left"
      onClose={onClose}
      open={open}
      width={278}
      closeIcon={false}
    >
      <div className={styles.sidebarContainer}>
        <div>
          <div className={styles.sidebarTitle}>
            <Title
              level={2}
              className={styles.sidebarTitleText}
              style={{
                color: token.colorPrimary,
                marginTop: "1rem",
              }}
            >
              Menu
            </Title>
          </div>

          <MenuItems
            isDrawerOpen={open}
            setOpenDrawer={setOpen}
          />
        </div>

        <div className={styles.buttonContainer}>
          <Button
            href="https://github.com/leoMirandaa/restaurant-menu.git"
            target="_blank"
            icon={<GithubOutlined />}
          >
            Github
          </Button>
        </div>
      </div>
    </Drawer>
  );
};
