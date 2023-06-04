import Link from "next/link";
import Image from "next/image";

import { Breadcrumb, Button, Card, Input, Layout, List, theme, Typography, Divider, message } from "antd";
const { Content } = Layout;
const { Title, Text } = Typography;

import { useCartStore } from "@/store/cartStore";
import { FooterComponent, HeaderComponent } from "../../../components/ui";

export default function checkoutPage ()  {
  const dishes = useCartStore((state) => state.dishes)
  const [messageApi, contextHolder] = message.useMessage();

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const { useToken } = theme;
  const { token } = useToken();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Successful Purchase',
    });
  };

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
            // alignItems: 'center',
          }}
        >
           <Breadcrumb
            separator=">"
            items={[
              {
                title: <Link href='/'>Menu</Link>,
              },
              {
                title: <Text type="primary">Checkout page</Text> ,
              },
            ]}
          />

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
            <Title 
              level={2} 
              style={{
                color: token.colorPrimary, 
                marginTop: '10px',
              }}
              >
              Checkout
            </Title>

            <div 
              style={{
                display: 'flex', 
                justifyContent: 'center', 
                width: '100%', 
                gap: 20,
                
              }}
            >
              <Card               
                style={{height: 600,
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
                style={{ 
                  minWidth: '35%', 
                  height: 410,
                  // display: 'flex',
                  // alignItems: 'center'
                }}
              >
                <Title level={3} style={{margin: '0px', color:`${token.colorPrimary}`}}>
                  Order Summary
                </Title>

                <Title level={5}>
                  Subtotal: {
                    (dishes?.reduce((sum, item) => sum + item.price, 0) )
                  }
                </Title>

                <Title level={5}>
                  Taxes: $25
                </Title>



                <Title level={5}>
                  Total: {
                    (dishes?.reduce((sum, item) => sum + item.price, 0)  + 25)
                  }
                </Title>

                <Divider />
                <Title level={5}>Have a coupon?</Title>

                <div style={{display: 'flex'}}>
                  <Input placeholder="Enter Coupon" />
                  <Button style={{marginLeft: '10px'}} type="primary">Apply</Button>
                </div>
                <Divider />

{contextHolder}
                <Button 
                  type="primary"
                  style={{width: '100%'}}
                  onClick={success}
                >
                  Checkout
                </Button>
              </Card>
            </div>
          </div>
        </main>
      </Content>
      <FooterComponent/>
    </Layout>
  )
}