import { useRouter } from "next/router";
import { GithubOutlined } from "@ant-design/icons";
import { Button, Drawer, Menu, Typography } from "antd";
const { Title } = Typography;

import { menuOptions } from "@/utils/menuOptions";
import styles from "../../styles/dishesNavbar.module.css";

export const DishesDrawer = ({ open, setOpen }) => {
  const router = useRouter();

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
              level={3}
              className={styles.sidebarTitleText}
            >
              Menu
            </Title>
          </div>

          <Menu
            className={styles.drawerMenu}
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[...menuOptions]}
            onClick={onClose}
          />
        </div>

        <div className={styles.buttonContainer}>
          <Button
            type="default"
            size="large"
            onClick={() => router.push("https://github.com/leoMirandaa")}
            icon={<GithubOutlined />}
          >
            Github
          </Button>
        </div>
      </div>
    </Drawer>
  );
};
