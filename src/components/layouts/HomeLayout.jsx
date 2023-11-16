import Head from "next/head";

import { Layout } from "antd";
const { Content } = Layout;

import { FooterComponent } from "../ui/Footer";
import { HomeNavbar } from "../ui/HomeNavbar";

export const HomeLayout = ({
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
        <Layout>{children}</Layout>
      </Content>

      <FooterComponent />
    </Layout>
  );
};
