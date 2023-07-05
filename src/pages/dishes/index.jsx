import { Layout, theme, Typography, FloatButton, Button, Menu } from "antd";
import { PlateCard } from "../../components/products/Card";
import { products } from "../../../database/products";
const { Content } = Layout;
const { Title, Paragraph } = Typography;
import { CustomerServiceOutlined } from "@ant-design/icons";

import styles from "../../styles/dishes.module.css";
import { ShopLayout } from "@/components/layouts";

const Dishes = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { useToken } = theme;
  const { token } = useToken();

  return (
    <ShopLayout>
      <Content
        // className="container"
        // className="content"
        style={{
          // padding: "0px 24px",
          borderRadius: "10px",
          scrollBehavior: "smooth",
        }}
      >
        <main className={styles.content}>
          <div
            style={{ marginBottom: "40px" }}
            id="starter"
          >
            <Title
              level={2}
              style={{
                color: token.colorPrimary,
                margin: "8px 0px 0px 0px",
              }}
            >
              Starter
            </Title>

            <Paragraph style={{ fontSize: "16px" }}>
              Excepteur dolore voluptate amet do voluptate enim non nostrud
              commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute
              pariatur
            </Paragraph>

            <div className={styles.cardsContainer}>
              {products
                .filter((p) => p.category == 0)
                .map((plate) => (
                  <PlateCard
                    key={plate.id}
                    id={plate.id}
                    name={plate.name}
                    category={plate.category}
                    description={plate.description}
                    price={plate.price}
                    imageUrl={plate.imageUrl}
                  />
                ))}
            </div>
          </div>

          <div
            style={{ marginBottom: "40px" }}
            id="salad"
          >
            <Title
              level={2}
              style={{
                display: "flex",
                top: 64,
                color: token.colorPrimary,
                marginBottom: "0px",
              }}
            >
              Salad{" "}
            </Title>
            <Paragraph
              // type="secondary"
              style={{ fontSize: "16px" }}
            >
              {" "}
              Excepteur dolore voluptate amet do voluptate enim non nostrud
              commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute
              pariatur{" "}
            </Paragraph>
            <div className={styles.cardsContainer}>
              {products
                .filter((p) => p.category == 1)
                .map((plate) => (
                  <PlateCard
                    key={plate.id}
                    name={plate.name}
                    category={plate.category}
                    description={plate.description}
                    ingredients={plate.ingredients}
                    price={plate.price}
                    imageUrl={plate.imageUrl}
                  />
                ))}
            </div>
          </div>

          <div
            style={{ marginBottom: "40px" }}
            id="mainDishes"
          >
            <Title
              level={2}
              style={{
                color: token.colorPrimary,
                marginBottom: "0px",
              }}
            >
              Main Dishes
            </Title>
            <Paragraph style={{ fontSize: "16px" }}>
              Excepteur dolore voluptate amet do voluptate enim non nostrud
              commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute
              pariatur
            </Paragraph>

            <div className={styles.cardsContainer}>
              {products
                .filter((p) => p.category == 2)
                .map((plate) => (
                  <PlateCard
                    key={plate.id}
                    name={plate.name}
                    category={plate.category}
                    description={plate.description}
                    ingredients={plate.ingredients}
                    price={plate.price}
                    imageUrl={plate.imageUrl}
                  />
                ))}
            </div>
          </div>

          <div
            style={{ marginBottom: "40px" }}
            id="beverages"
          >
            <Title
              level={2}
              style={{
                color: token.colorPrimary,
                marginBottom: "0px",
              }}
            >
              Beverages
            </Title>
            <Paragraph style={{ fontSize: "16px" }}>
              Excepteur dolore voluptate amet do voluptate enim non nostrud
              commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute
              pariatur
            </Paragraph>
            <div className={styles.cardsContainer}>
              {products
                .filter((p) => p.category == 3)
                .map((plate) => (
                  <PlateCard
                    key={plate.id}
                    name={plate.name}
                    category={plate.category}
                    description={plate.description}
                    ingredients={plate.ingredients}
                    price={plate.price}
                    imageUrl={plate.imageUrl}
                  />
                ))}
            </div>
          </div>

          <div
            style={{ marginBottom: "40px" }}
            id="deserts"
          >
            <Title
              level={2}
              style={{
                color: token.colorPrimary,
                marginBottom: "0px",
              }}
            >
              Desserts
            </Title>
            <Paragraph style={{ fontSize: "16px" }}>
              Excepteur dolore voluptate amet do voluptate enim non nostrud
              commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute
              pariatur
            </Paragraph>

            <div className={styles.cardsContainer}>
              {products
                .filter((p) => p.category == 4)
                .map((plate) => (
                  <PlateCard
                    key={plate.id}
                    name={plate.name}
                    category={plate.category}
                    description={plate.description}
                    ingredients={plate.ingredients}
                    price={plate.price}
                    imageUrl={plate.imageUrl}
                  />
                ))}
            </div>
          </div>
        </main>

        <FloatButton.BackTop
          shape="square"
          type="primary"
          style={{ opacity: ".9" }}
        />
      </Content>
    </ShopLayout>
  );
};
export default Dishes;
