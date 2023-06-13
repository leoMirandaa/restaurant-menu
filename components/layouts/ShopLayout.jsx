import Head from "next/head";
import { useRef } from 'react';

import { Layout, theme, Typography } from "antd";
const { Content } = Layout;
const { Title, Paragraph } = Typography;

import { products } from "../../database/products";
import { PlateCard } from "../products/Card";
import { FooterComponent, HeaderComponent, Sidebar } from "../ui"

import styles from '../../src/styles/shopLayout.module.css'

export const ShopLayout = ({ children, title, pageDescription, imageUrl, themeSelected, setThemeSelected }) => {
  const starter = useRef();
  const salad = useRef();
  const mainDishes = useRef();
  const beverages = useRef();
  const desert = useRef();

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const { useToken } = theme;
  const { token } = useToken();

  const handleClick = (e) => {
    console.log('HandleClick ', e.key)
    if(e.key == 'starter') {
      starter.current.scrollIntoView({ behavior: "smooth", inline: 'start' });
    }
    else if (e.key == 'salad') {
      salad.current.scrollIntoView({ behavior: "smooth", inline: 'start' });
    }
    else if (e.key == 'main dishes') {
      mainDishes.current.scrollIntoView({ behavior: "smooth", inline: 'start' });
    }
    else if (e.key == 'beverages') {
      beverages.current.scrollIntoView({ behavior: "smooth", inline: 'start' });
    }
    else {
      desert.current.scrollIntoView({ behavior: "smooth", inline: 'start' });
    }
  }
  
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
        handleClick={handleClick}
      />

      <Content
        style={{
          padding: '0 20px',
        }}
      >
        <Layout className={styles.allContent}>
          <Sidebar handleClick={handleClick} />          
          {children}
        </Layout>
      </Content>
      
      <FooterComponent />
    </Layout>
  )
}