import { Layout, Menu, Typography, theme } from "antd"
const { Sider } = Layout;
const { Title } = Typography;

import { menuOptions } from "@/utils/menuOptions";

export const Sidebar = ({ handleClick }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const { useToken } = theme;
  const { token } = useToken();

  return (
    <Sider 
      theme='light'
      breakpoint="sm"
      collapsedWidth="0"
      style={{
        borderRadius: '10px',
        height: '50%', 
        position: 'sticky',
        top: 84,
        zIndex: 1,
        // border: `2px dotted ${token.colorPrimary}`
      }} 
    >
      <div style={{ textAlign: 'center'}}>
        <Title level={2} style={{color: token.colorPrimary}}> Menu </Title>
      </div>
      
    <Menu
      style={{ 
        borderInline: 'none',
        borderRadius: '10px',
        paddingBottom: '10px',
      }}
      mode="inline"
      defaultSelectedKeys={['1']}
      items= {...menuOptions}
      onClick={handleClick}
    />
  </Sider>
  )
}