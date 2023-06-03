import Image from "next/image";

import { Card, Layout, List, theme, Typography } from "antd";
const { Content } = Layout;
const { Title } = Typography;

import { useCartStore } from "@/store/cartStore";
import { FooterComponent, HeaderComponent } from "../../../components/ui";

export default function checkoutPage ()  {
  const dishes = useCartStore((state) => state.dishes)

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const { useToken } = theme;
  const { token } = useToken();

  return (
    <Layout
      style={{
        minHeight: '100vh'
      }}
    >
      <HeaderComponent/>
      <Content
        style={{
          padding: '0px 24px',
          borderRadius: '10px',
          // minHeight: '100vh'
        }}
      >
        <main 
          style={{ 
            // paddingTop: '15px', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>
            <Title 
              level={2} 
              style={{
                color: token.colorPrimary, 
                marginTop: '10px',
              }}
              >
              Checkout
            </Title>
          </div>

          <div 
            style={{
              display: 'flex', 
              justifyContent: 'center', 
              width: '100%', 
              gap: 20,
              
            }}
          >
            <Card               
              style={{height: 650,
                overflow: 'auto',
                padding: '0 16px',
                border: '1px solid rgba(140, 140, 140, 0.35)', minWidth: '60%'}}
            >
              <List
                locale={{emptyText: 'No Orders'}}
                itemLayout="horizontal"
                dataSource={dishes}
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Image 
                          style={{objectFit: 'cover'}} 
                          width={150} 
                          height={150} 
                          src={item.imageUrl} 
                          alt="image"
                        />
                      }
                      title={
                        <>
                          <Title level={4} style={{margin: '0 0 0 0', display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>
                            <span style={{width: '60%'}}>
                              {item.name}
                            </span>
                            <span style={{color: token.colorPrimary}}>
                              ${item.price}
                            </span>
                          </Title>   

                          <Title level={5} style={{margin: '0 0 0 0', display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>
                            category: {item.category}
                          </Title>
                        </>
                      }
                      description={item.description}
                      />
                  </List.Item>
                )}
              />
            </Card>

            <Card
              style={{ minWidth: '35%'}}
            >
              <Title level={3} style={{margin: '0px', color:`${token.colorPrimary}`}}>
                Order Summary
              </Title>

              <Title level={5}>
                Total: {
                  (dishes?.reduce((sum, item) => sum + item.price, 0) )
                }
              </Title>
            </Card>
          </div>
        </main>
      </Content>
      <FooterComponent/>
    </Layout>
  )
}