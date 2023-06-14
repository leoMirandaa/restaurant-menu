import Head from "next/head";

import { Layout, theme, Typography } from "antd";
const { Content } = Layout;

import { FooterComponent, HeaderComponent, Sidebar } from "../ui"

import styles from '../../src/styles/shopLayout.module.css'

export const ShopLayout = ({ children, title, pageDescription, imageUrl, themeSelected, setThemeSelected }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const { useToken } = theme;
  const { token } = useToken();

  return (
    <Layout >
      <Head>
        <title>{ title }</title>
        <meta name="description" content={ pageDescription }/>
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {
          imageUrl && (
            <meta name="og:image" content={ imageUrl }/>
          )
        }
      </Head>

      <HeaderComponent 
        themeSelected={themeSelected} 
        setThemeSelected={setThemeSelected}
      />

      <Content
        style={{
          padding: '0 20px',
        }}
      >
        <Layout className={styles.allContent}>
          <Sidebar />          
          {children}
        </Layout>
      </Content>
      
      <FooterComponent />
    </Layout>
  )
}