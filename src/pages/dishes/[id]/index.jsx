import { Layout, theme, Typography, Breadcrumb } from "antd";
const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

import { HeaderComponent } from "../../../../components/ui"
import Link from "next/link";
import { products } from "../../../../database/products";
import { PlateCard } from "../../../../components/products/Card";

const Dish = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const { useToken } = theme;
  const { token } = useToken();

  return (
    <Layout>
      <HeaderComponent/>
      <Content
      style={{
        padding: '0px 24px',
        borderRadius: '10px',
        height: '100vh'
      }}
    >
      <Layout>

        <main 
          // style={{ paddingTop: '15px' }}
        >
          <Breadcrumb
            separator=">"
            items={[
              {
                title: <Link href='/'>Menu</Link>,
              },
              {
                title: <Text type="primary">Dish details</Text> ,
              },
            ]}
          />
            <Title 
              level={2} 
              style={{
                color: token.colorPrimary, 
                marginTop: '8px',
                textAlign: 'center'
              }}
            >
              Dishes/id
            </Title>

            <div
              style={{background:'skyblue', display: 'flex', justifyContent: 'center'}}
            >
              {/* {
                [1].map(dish => (
                  <PlateCard 
                    name={products[0].name}
                    description={products[0].description}
                    // ingredients={products[0].ingredients}
                    imageUrl={products[0].imageUrl}
                    price={products[0].price}
                  />
                ))
              } */}
            </div>
        </main>
      </Layout>
    </Content>
    </Layout>
  )
}
export default Dish