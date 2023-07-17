import { Layout, theme, Typography, FloatButton, Button, Menu } from "antd";
import { PlateCard } from "../../components/products/Card";
import { products } from "../../../database/products";
const { Content } = Layout;
const { Title, Paragraph } = Typography;
import { inView, animate } from "motion";

import { ShopLayout } from "@/components/layouts";
import styles from "../../styles/dishes.module.css";
import { useEffect } from "react";

const Dishes = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { useToken } = theme;
  const { token } = useToken();

  useEffect(() => {
    inView("section", ({ target }) => {
      animate(
        target.querySelector("span"),

        { opacity: 1, transform: "none" },
        { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
  }, []);

  return (
    <ShopLayout>
      <Content
        style={{
          borderRadius: "10px",
          scrollBehavior: "smooth",
        }}
      >
        <main className={styles.content}>
          <section
            style={{ marginBottom: "40px" }}
            id="starter"
            className="leoo"
          >
            <Title
              level={2}
              style={{
                color: token.colorPrimary,
                margin: "1.5rem 0px 0px 0px",
              }}
            >
              Starter
            </Title>

            <Paragraph
              className="section"
              style={{ fontSize: "16px" }}
            >
              Excepteur dolore voluptate amet do voluptate enim non nostrud
              commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute
              pariatur
            </Paragraph>

            <span className={styles.cardsContainer}>
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
            </span>
          </section>

          <section
            style={{ marginBottom: "40px" }}
            id="salad"
            className="leoo"
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
            <Paragraph style={{ fontSize: "16px" }}>
              {" "}
              Excepteur dolore voluptate amet do voluptate enim non nostrud
              commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute
              pariatur{" "}
            </Paragraph>
            <span className={styles.cardsContainer}>
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
            </span>
          </section>

          <section
            style={{ marginBottom: "40px" }}
            id="mainDishes"
            className="leoo"
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

            <span className={styles.cardsContainer}>
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
            </span>
          </section>

          <section
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
            <span className={styles.cardsContainer}>
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
            </span>
          </section>

          <section
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

            <span className={styles.cardsContainer}>
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
            </span>
          </section>
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
