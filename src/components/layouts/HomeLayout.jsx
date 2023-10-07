import Head from "next/head";

import { Layout, theme } from "antd";
const { Content } = Layout;

import { FooterComponent } from "../Footer";
import { NavbarComponent } from "../Navbar";
import { Sidebar } from "../Sidebar";

import styles from "../../styles/shopLayout.module.css";
import { HomeNavbar } from "../HomeNavbar";

export const HomeLayout = ({
  children,
  title,
  pageDescription,
  imageUrl,
  themeSelected,
  setThemeSelected,
}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { useToken } = theme;
  const { token } = useToken();

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={pageDescription}
        />
        <meta
          name="og:title"
          content={title}
        />
        <meta
          name="og:description"
          content={pageDescription}
        />
        {imageUrl && (
          <meta
            name="og:image"
            content={imageUrl}
          />
        )}
      </Head>

      <HomeNavbar
        themeSelected={themeSelected}
        setThemeSelected={setThemeSelected}
      />

      <Content
        style={
          {
            // maxWidth: "1440px",
            // margin: "auto",
          }
        }
      >
        <Layout>{children}</Layout>
      </Content>

      <FooterComponent />
    </Layout>
  );
};
