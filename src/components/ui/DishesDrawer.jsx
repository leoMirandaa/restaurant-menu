import { Drawer, Menu, theme, Typography  } from "antd";
const { Title } = Typography;
import navStyles from "../../styles/dishesNavbar.module.css";
import { menuOptions } from "@/utils/menuOptions";

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
  >
    <div style={{background: token.colorBgContainer, paddingTop: '10px', borderRadius: '10px'}}>
      <div  style={{ textAlign: 'center'}}>
        <Title 
          level={2} 
          style={{color: token.colorPrimary, margin: '0px'}}
        >
          Menu 
        </Title>
      </div>
      
      <Menu
        className={navStyles.drawerContainer}
        mode="inline"
        defaultSelectedKeys={['1']}
        items= {...menuOptions}
        onClick={handleCloseDrawer}
      />
    </div>
  </Drawer>
  )
}