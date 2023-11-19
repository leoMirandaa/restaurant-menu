import Head from "next/head";

import { Layout } from "antd";
const { Content } = Layout;

import { HomeNavbar, FooterComponent } from "../ui";
import styles from "../../styles/dishesLayout.module.css";

export const DishLayout = ({ children, title, pageDescription, imageUrl }) => {
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

      <HomeNavbar />
      <Content>
        <Layout className={`container ${styles.layoutContainer}`}>
          {children}
        </Layout>
      </Content>

      <FooterComponent />
    </Layout>
  );
};
