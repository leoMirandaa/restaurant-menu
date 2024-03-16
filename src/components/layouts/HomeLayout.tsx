import Head from "next/head";

import { Layout } from "antd";
const { Content } = Layout;

import { FooterComponent, HomeNavbar } from "../ui";
import { TLayout } from "../../types/layout";

export const HomeLayout = ({
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

      <HomeNavbar />

      <Content>
        <Layout>{children}</Layout>
      </Content>

      <FooterComponent />
    </Layout>
  );
};
