import { Layout, theme } from "antd";
const { Footer } = Layout;

export const FooterComponent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Footer
      style={{
        textAlign: "center",
        background: colorBgContainer,
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        Created by Leopoldo Miranda ©2023
      </div>
    </Footer>
  );
};
