import Head from "next/head";
import { useRef } from 'react';

import { Button, Card, Layout, theme, Typography, Badge, Tag } from "antd";
const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { Meta } = Card;

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
              // background: colorBgContainer,
              borderRadius: '10px',
              border: `2px dotted ${token.colorPrimary}`
            }}
          > 
            <main>
              <div ref={starter}>
                <Title level={3} style={{color: token.colorPrimary}}>Starter </Title>

                <div 
                  style={{ display: 'flex', justifyContent: 'space-evenly'}}
                >
                  {
                    [1,2,3].map(plate => (
                      <Badge.Ribbon text="$20">

                      <Card
                        hoverable
                        style={{ width: 240, position: 'relative' }}
                        cover={<img alt="example" src="https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg" />}
                        actions={[
                          <Button style={{backgroundColor: '#004350'}} type="primary">Add to cart</Button>
                        ]}
                      >
                        <Meta title="Tomato soup" description="Excepteur voluptate occaecat velit pariatur voluptate occaecat velit minim" />
                        {/* <Paragraph style={{margin: '0', padding: '0'}}>$30</Paragraph> */}
                        {/* <div style={{position: 'absolute', top:'0', right: '0'}}>
                          Starter
                        </div> */}
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
                <Title level={3} style={{color: token.colorPrimary}}>Salad </Title>
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
                <Title level={3} style={{color: token.colorPrimary}}>Main dishes </Title>
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
                <Title level={3} style={{color: token.colorPrimary}}>Beverages </Title>
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
                <Title level={3} style={{color: token.colorPrimary}}>Dessert </Title>
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