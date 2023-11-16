import Head from "next/head";

import { Layout, theme } from "antd";
const { Content } = Layout;

import { HomeNavbar } from "../ui/HomeNavbar";
import { FooterComponent } from "../ui/Footer";
import styles from "../../styles/dishesLayout.module.css";

export const DishLayout = ({
  children,
  title,
  pageDescription,
  imageUrl,
  themeSelected,
  setThemeSelected,
}) => {
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
      <Content>
        <Layout className={`container ${styles.layoutContainer}`}>
          {children}
        </Layout>
      </Content>

      <FooterComponent />
    </Layout>
  );
};
