import { Layout, theme } from "antd"
const { Footer } = Layout

export const FooterComponent = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { useToken } = theme;
  const { token } = useToken();

  return (
    <Footer
    style={{
      textAlign: 'center',
      // position: 'sticky',
      // bottom: 0,
      // zIndex: 1,
      background: colorBgContainer,
      
      // borderTop: `2px dotted ${token.colorPrimary}`,
    }}
  >
    <div style={{ maxWidth: '1400px', margin: '0 auto'}}>
      Created by Leopoldo Miranda ©2023
    </div>
  </Footer>
  )
}