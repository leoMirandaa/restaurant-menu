import { Layout, Menu, theme, Typography } from "antd"
const { Content, Sider } = Layout;
const { Title } = Typography;

import { FooterComponent, HeaderComponent } from "../ui";
import { menuOptions } from '@/utils/menuOptions';

export const Navbar = ({ children }) => {  

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { useToken } = theme;
  const { token } = useToken();

  const handleClick = (e) => {
    console.log('HandleClick ', e)
  }

  return (
    <Layout >
      <HeaderComponent />
        
      <Content
        style={{
          padding: '0 20px',
          margin: '20px 0',
          // background: colorBgContainer
        }}
      > 
      <Layout  >
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
            onClick={handleClick}
          />
        </Sider>
        
        <Content
          style={{
            marginLeft: '16px',
            padding: '0px 24px',
            background: colorBgContainer,
            borderRadius: '10px',
            // overflow: 'initial'
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