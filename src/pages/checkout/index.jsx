import Image from "next/image";

import { Avatar, Card, Layout, List, theme, Typography } from "antd";
const { Content } = Layout;
const { Title, Paragraph } = Typography;

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

          <h6>
            {JSON.stringify(dishes)}
          </h6>

          <div style={{display: 'flex', justifyContent: 'center', width: '100%', gap: 20}}>
            <Card               
              style={{ minWidth: '60%'}}
            >
              <List
                itemLayout="horizontal"
                dataSource={dishes}
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Image style={{objectFit: 'cover'}} width={150} height={150} src={item.imageUrl} />}
                      title={
                        <>
                          <Title level={4} style={{margin: '0 0 0 0', display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>
                            <span style={{width: '80%'}}>
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
              <Title level={4} style={{margin: '0px'}}>
                Order Summary
              </Title>

              <Title level={4}>
                Total: {
                  dishes.map(dish => {
                    return (
                      <h4>test</h4>
                    )
                  }
                  )
                }
              </Title>
            </Card>
          </div>


          {/* {
            dishes.map((dish) => (
              <>
                <h4>id: {dish.id}</h4>
                <h5>name: {dish.name}</h5>
                <h5>imageUrl: {dish.imageUrl}</h5>
                <h5>category: {dish.category}</h5>
                <h5>description: {dish.descriptiion}</h5>
                <h5>price: {dish.price}</h5>
                <hr />
              </>
            ))
          } */}

          {/* <h4>{JSON.stringify(dishes)}</h4> */}
        </main>
      </Content>
      <FooterComponent/>
    </Layout>
  )
}