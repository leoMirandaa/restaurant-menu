import { useEffect, useState } from "react";
import { ConfigProvider } from "antd";
import { magentaTheme, darkTheme } from "../../themes";
import { ShopLayout } from "../components/layouts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [themeSelected, setThemeSelected] = useState({ ...darkTheme });

  return (
    <ConfigProvider theme={{ ...themeSelected }}>
      <Component
        {...pageProps}
        themeSelected={themeSelected}
        setThemeSelected={setThemeSelected}
      />
    </ConfigProvider>
  );
}
