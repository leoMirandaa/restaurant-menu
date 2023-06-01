import { Layout, theme, Typography } from "antd";
const { Content } = Layout;
const { Title, Paragraph } = Typography;

import { ShopLayout } from "../../../components/layouts"
import Dishes from "../dishes";
import { HeaderComponent } from "../../../components/ui";

const adminPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const { useToken } = theme;
  const { token } = useToken();

  return (
  //   <ShopLayout
  //   title={'Magenta-Cloud - Home'}
  //   pageDescription={'The most elegant food at the corner'}
  // >
  <>
    <HeaderComponent/>
      <Content
        style={{
          padding: '0px 24px',
          borderRadius: '10px',
          height: '100vh'
        }}
      >
        <main style={{ paddingTop: '15px' }}>
          <div style={{marginBottom: '40px'}} >
            <Title 
              level={2} 
              style={{
                color: token.colorPrimary, 
                marginBottom: '0px',
              }}
            >
              AdminPage
            </Title>
          </div>
        </main>
      </Content>
    </>

  // </ShopLayout>
  )
}
export default adminPage