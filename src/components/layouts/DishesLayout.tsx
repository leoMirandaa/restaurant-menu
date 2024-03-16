import Head from "next/head";

import { Layout } from "antd";
const { Content } = Layout;

import { DishesNavbar, FooterComponent, Sidebar } from "../ui";
import styles from "../../styles/dishesLayout.module.css";
import { TLayout } from "../../types/layout";

export const DishesLayout = ({
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

      <DishesNavbar />
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
