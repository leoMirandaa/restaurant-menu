import { ConfigProvider } from "antd";
import { darkTheme } from "../../themes";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
