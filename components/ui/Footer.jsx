import { Layout, theme } from "antd"
const { Footer } = Layout

export const FooterComponent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Footer
    style={{
      textAlign: 'center',
      // position: 'sticky',
      // bottom: 0,
      // zIndex: 1,
      background: colorBgContainer
    }}
  >
    Created by Leopoldo Miranda ©2023
  </Footer>
  )
}