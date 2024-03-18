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
        <Layout>{children}</Layout>
      </Content>

      <FooterComponent />
    </Layout>
  );
};
