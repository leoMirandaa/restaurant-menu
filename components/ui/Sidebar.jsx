import { Layout, Menu, Typography, theme } from "antd"
const { Sider } = Layout;
const { Title } = Typography;

import { menuOptions } from "@/utils/menuOptions";
import styles from '../../src/styles/sidebar.module.css'

export const Sidebar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const { useToken } = theme;
  const { token } = useToken();

  return (
    <Sider 
      className={styles.sidebarMenuContainer}
      theme='light'
      style={{position: 'sticky', top: '88'}}
    >
      <div  style={{ textAlign: 'center'}}>
        <Title 
          level={2} 
          style={{  
            color: token.colorPrimary,
              marginTop: '8px',
          }}
        >
           Menu 
        </Title>
      </div>
      
      <Menu
        className={styles.menuContainer}
        mode="inline"
        defaultSelectedKeys={['starter']}
        items= {...menuOptions}
      />
    </Sider>
  )
}