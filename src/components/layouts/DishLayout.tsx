import Head from "next/head";

import { Layout } from "antd";
const { Content } = Layout;

import { TLayout } from "../../types/layout";
import { HomeNavbar, FooterComponent } from "../ui";
import styles from "../../styles/dishesLayout.module.css";

export const DishLayout = ({
  children,
  title,
  pageDescription,
  imageUrl,
}: TLayout) => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta
          name="og:title"
          content={title}
        />
        <meta
          property="og:description"
          content={pageDescription}
        />
        <meta
          property="og:image"
          content={imageUrl}
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content={title}
        />
        <meta
          name="twitter:description"
          content={pageDescription}
        />
        <meta
          name="twitter:image"
          content={imageUrl}
        />
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
