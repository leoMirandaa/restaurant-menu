import Head from "next/head";
import { useRef } from 'react';

import { Layout, theme, Typography } from "antd";
const { Content } = Layout;
const { Title, Paragraph } = Typography;

import { FooterComponent, HeaderComponent, Sidebar } from "../ui"

export const ShopLayout = ({ title, pageDescription, imageUrl }) => {
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
    if(e.key == 1) {
      starter.current.scrollIntoView({ behavior: "smooth", inline: 'start' });
    }
    else if (e.key == 2) {
      salad.current.scrollIntoView({ behavior: "smooth", inline: 'start' });
    }
    else if (e.key == 3) {
      mainDishes.current.scrollIntoView({ behavior: "smooth", inline: 'start' });
    }
    else if (e.key == 4) {
      beverages.current.scrollIntoView({ behavior: "smooth", inline: 'start' });
    }
    else {
      desert.current.scrollIntoView({ behavior: "smooth", inline: 'start' });
    }
  }
  
  return (
    <Layout>
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

      <HeaderComponent />

      <Content
        style={{
          padding: '0 20px',
          margin: '20px 0',
          // background: colorBgContainer
        }}
      >
        <Layout>
          <Sidebar handleClick={handleClick} />
          <Content
            style={{
              marginLeft: '16px',
              padding: '0px 24px',
              background: colorBgContainer,
              borderRadius: '10px',
            }}
          > 
            <main>
              <div ref={starter}>
                <Title level={3} >Starter </Title>
                <Paragraph>
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                </Paragraph>
              </div>

              <div ref={salad}>
                <Title level={3} >Salad </Title>
                <Paragraph>
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                </Paragraph>
             </div>

              <div ref={mainDishes}>
                <Title level={3} >Main dishes </Title>
                <Paragraph>
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                </Paragraph>
              </div>

              <div ref={beverages}>
                <Title level={3} >Beverages </Title>
                <Paragraph>
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                </Paragraph>
              </div>

              <div ref={desert}>
                <Title level={3} >Dessert </Title>
                <Paragraph>
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                </Paragraph>
                <Paragraph>
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                </Paragraph>
              </div>
            </main>           
          </Content>
        </Layout>
      </Content>
      
      <FooterComponent />
    </Layout>
  )
}