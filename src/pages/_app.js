import { ConfigProvider } from "antd";
import { darkTheme } from "../../themes";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
