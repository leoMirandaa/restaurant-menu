import Head from "next/head";

import { Layout, theme } from "antd";
const { Content } = Layout;

import { DishesNavbar, Sidebar } from "../ui";
import { FooterComponent } from "../ui/Footer";
import styles from "../../styles/dishesLayout.module.css";

export const DishesLayout = ({
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

      <DishesNavbar
        themeSelected={themeSelected}
        setThemeSelected={setThemeSelected}
      />
      <Content>
        <Layout className={`container ${styles.layoutContainer}`}>
          <Sidebar />
          {children}
        </Layout>
      </Content>

      <FooterComponent />
    </Layout>
  );
};
