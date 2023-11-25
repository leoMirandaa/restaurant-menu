import { Drawer, Menu, theme, Typography  } from "antd";
const { Title } = Typography;

import { menuOptions } from "@/utils/menuOptions";
import navStyles from "../../styles/dishesNavbar.module.css";

export const DishesDrawer = ({open, setOpen}) => {
  const { useToken } = theme;
  const { token } = useToken();

 
  const onClose = () => {
    setOpen(false);
  };

  const handleCloseDrawer = () => {
    setTimeout(() => {
      setOpen(false);
    }, 350);
  };

  return (
    <Drawer
    placement="left"
    onClose={onClose}
    open={open}
    width={278}
    closeIcon={false}
 
  >
    <div>
      <div className={navStyles.sidebarTitle}>
        <Title 
          level={3} 
          className={navStyles.sidebarTitleText}
        >
          Menu
        </Title>
      </div>
      
      <Menu
        className={navStyles.drawerMenu}
        mode="inline"
        defaultSelectedKeys={['1']}
        items= {...menuOptions}
        onClick={handleCloseDrawer}
      />
    </div>
  </Drawer>
  )
}