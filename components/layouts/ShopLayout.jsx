import Head from "next/head";
import { useRef } from 'react';

import { Layout, theme, Typography } from "antd";
const { Content } = Layout;
const { Title, Paragraph } = Typography;

import { products } from "../../database/products";
import { PlateCard } from "../products/Card";
import { FooterComponent, HeaderComponent, Sidebar } from "../ui"

export const ShopLayout = ({ children, title, pageDescription, imageUrl, setTheme }) => {
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
        setTheme={setTheme} 
        handleClick={handleClick}
      />

      <Content
        style={{
          padding: '0 20px',
        }}
      >
        <Layout
          style={{ 
            maxWidth: '1400px', 
            width: '100%',
            
          }}
        >
          <Sidebar handleClick={handleClick} />

          {/* <Content
            style={{
              padding: '0px 24px',
              borderRadius: '10px',
            }}
          > 
            <main style={{ paddingTop: '15px' }}>
              <div style={{marginBottom: '40px'}} ref={starter}>
                <Title 
                  level={2} 
                  style={{
                    color: token.colorPrimary, 
                    marginBottom: '0px',
                  }}
                >
                  Starter 
                </Title>

                <Paragraph 
                  style={{fontSize: '16px'}}
                > 
                  Excepteur dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur 
                </Paragraph>

                <div 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    flexWrap: 'wrap', 
                    gap: '30px'
                  }}
                >
                  {
                    products.map(plate => (
                      <PlateCard 
                        name={plate.name} 
                        description={plate.description}
                        price={plate.price} 
                        imageUrl={plate.imageUrl} 
                      />
                    ))
                  }      
                </div>
              </div>

              <div style={{marginBottom: '40px'}} ref={salad}>
                <Title level={2} style={{display: 'flex',
                    top: 64,  color: token.colorPrimary, marginBottom: '0px'}}>Salad </Title>
                <Paragraph style={{fontSize: '16px'}}> Excepteur dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur </Paragraph>
                <div 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    flexWrap: 'wrap', 
                    gap: '30px'
                  }}
                >
                  {
                    products.map(plate => (
                      <PlateCard 
                        name={plate.name} 
                        description={plate.description}
                        price={plate.price} 
                        imageUrl={plate.imageUrl} 
                      />
                    ))
                  }         
                </div>
             </div>

              <div style={{marginBottom: '40px'}} ref={mainDishes}>
              <Title 
                  level={2} 
                  style={{
                    color: token.colorPrimary, 
                    marginBottom: '0px',
                  }}
                >
                  Main Dishes 
                </Title>                
                <Paragraph 
                  style={{fontSize: '16px'}}
                > 
                  Excepteur dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur 
                </Paragraph>

                <div 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    flexWrap: 'wrap', 
                    gap: '30px'
                  }}
                >
                  {
                    products.map(plate => (
                      <PlateCard 
                        name={plate.name} 
                        description={plate.description}
                        price={plate.price} 
                        imageUrl={plate.imageUrl} 
                      />
                    ))
                  }      
                </div>
              </div>

              <div ref={beverages}>
                <Title level={2} style={{color: token.colorPrimary}}>Beverages </Title>
                <Paragraph>
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                </Paragraph>
              </div>

              <div ref={desert}>
                <Title 
                  level={2} 
                  style={{
                    color: token.colorPrimary,
                  }}
                >
                  Dessert 
                </Title>

                <Paragraph>
                  Cheese cake
                  Tiramisu
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
          </Content> */}

          {children}
        </Layout>
      </Content>
      
      <FooterComponent />
    </Layout>
  )
}