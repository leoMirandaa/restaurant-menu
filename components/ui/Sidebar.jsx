import { Layout, Menu, Typography } from "antd"
const { Sider } = Layout;
const { Title } = Typography;

import { menuOptions } from "@/utils/menuOptions";

export const Sidebar = ({ handleClick }) => {
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
      }} 
    >
      <div style={{ textAlign: 'center'}}>
        <Title level={2}> Menu </Title>
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