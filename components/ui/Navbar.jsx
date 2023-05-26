import Link from 'next/link';

import { Layout, Menu, theme, Tooltip, Typography } from "antd"
const { Header, Content, Sider } = Layout;
const { Title } = Typography;
import { IconChefHat } from '@tabler/icons-react';

import { FooterComponent } from './Footer';
import { menuOptions } from '@/utils/menuOptions';

export const Navbar = ({ children }) => {  
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { useToken } = theme;
  const { token } = useToken();

  return (
    <Layout style={{height: '100vh'}}>
      <Header style={{ padding: '0px 20px', background: colorBgContainer,display: 'flex', }}>
        <Link href="/" style={{display: 'flex',alignItems: 'center'}}>
          <IconChefHat size={36} color='#BE3455'/>      
          <Title level={4} style={{marginLeft:'5px'}}>Magenta kitchen</Title>
        </Link>
      </Header>
        
      <Content
        style={{
          padding: '0 20px',
          margin: '20px 0',
          background: 'colorBgContainer'
        }}
      > 
      <Layout style={{ height: '100%' }}>
        <Sider 
          theme='light'
          breakpoint="sm"
          collapsedWidth="0"
          style={{
            height: '50%', 
            borderRadius: '10px'
          }} 
        >
          <div style={{ textAlign: 'center'}}>
            <Title 
              level={2} 
              style={{ color: token.colorPrimary }}
            >
                Menu
            </Title>
          </div>
        <div className="demo-logo-vertical" />

          <Menu
            style={{ borderInline: 'none' }}
            mode="inline"
            defaultSelectedKeys={['1']}
            items= {...menuOptions}
          />
        </Sider>
        
        <Content
          style={{
            marginLeft: '16px',
            padding: '0px 24px',
            background: colorBgContainer,
            borderRadius: '10px'
          }}
        > 
          { children }
        </Content>
      </Layout>  

      </Content>
      <FooterComponent />
    </Layout>
  )
}