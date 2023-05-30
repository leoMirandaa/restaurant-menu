import Head from "next/head";
import { useRef } from 'react';

import { Button, Card, Layout, theme, Typography, Badge, Tag } from "antd";
const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

import { products } from "../../database/products";
import { FooterComponent, HeaderComponent, Sidebar } from "../ui"

export const ShopLayout = ({ title, pageDescription, imageUrl, setTheme }) => {
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

      <HeaderComponent setTheme={setTheme} />

      <Content
        style={{
          padding: '0 20px',
        }}
      >
        <Layout
          style={{ 
            maxWidth: '1400px', 
            width: '100%',
            margin: '0 auto'
          }}
        >
          <Sidebar handleClick={handleClick} />
          <Content
            style={{
              marginLeft: '16px',
              padding: '0px 24px',
              // background: colorBgContainer,
              borderRadius: '10px',
              
              // border: `2px dotted ${token.colorPrimary}`
            }}
          > 
            <main style={{ paddingTop: '15px'}}>
              <div ref={starter}>
                <Title 
                  level={2} 
                  style={{color: token.colorPrimary, marginBottom: '0px'}}
                >
                  Starter 
                </Title>

                <Paragraph style={{fontSize: '16px'}}> Excepteur dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur </Paragraph>

                <div 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'flex-start', 
                    flexWrap: 'wrap', 
                    gap: '30px'
                  }}
                >
                  {
                    products.map(plate => (
                      <Badge.Ribbon 
                        color={`${token.colorPrimary}`} 
                        text={`$ ${plate.price}`}
                        style={{fontWeight: 'bold'}} 
                      >
                        <Card
                          hoverable
                          style={{ width: 350, position: 'relative' }}
                          cover={
                            <img 
                              style={{
                                width: '350px',
                                height: '230px',
                                objectFit: 'cover'
                              }}
                              alt="example" 
                              src={`${plate.imageUrl}`} 
                              // src="https://images.pexels.com/photos/5419047/pexels-photo-5419047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            />
                          }
                          // cover={<img alt="example" src="https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg" />}
                          actions={[
                            <Button 
                              // style={{backgroundColor: token.colorTextSecondary}} 
                              type="primary"
                            >
                                Add to cart
                            </Button>
                          ]}
                        >
                          <Meta 
                            title={`${plate.name}`} 
                            description={`${plate.description}`} 
                          />
                        </Card>
                      </Badge.Ribbon>
                    ))
                  }      
                </div>
              </div>
                  {/* Tomato Soup
                  Chicken soup
                  Crispy corn */}

              <div ref={salad}>
                <Title level={2} style={{color: token.colorPrimary}}>Salad </Title>
                <Paragraph>
                  Chicken salad
                  Green salad
                  Guacamole Salad
                  Salmon salad
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                </Paragraph>
             </div>

              <div ref={mainDishes}>
                <Title level={2} style={{color: token.colorPrimary}}>Main dishes </Title>
                <Paragraph>
                  Goat steak
                  Cheese ravioli
                  Grilled octopus
                  Lasagne
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                </Paragraph>
              </div>

              <div ref={beverages}>
                <Title level={2} style={{color: token.colorPrimary}}>Beverages </Title>
                <Paragraph>
                  Coffee
                  Mineral water
                  Fruit Juice
                  Tea
                  White Wine
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                  Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur
                </Paragraph>
              </div>

              <div ref={desert}>
                <Title level={2} style={{color: token.colorPrimary}}>Dessert </Title>
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
              </div>
            </main>           
          </Content>
        </Layout>
      </Content>
      
      <FooterComponent />
    </Layout>
  )
}