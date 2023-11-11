import { useEffect } from "react";

import { Layout, theme, Typography } from "antd";
const { Content } = Layout;
const { Title, Paragraph } = Typography;

import { PlateCard } from "../../components/products/Card";
import { products } from "../../../database/products";
import { inView, animate } from "motion";

import { DishesLayout } from "@/components/layouts";
import styles from "../../styles/dishes.module.css";
import { ScrollToTop } from "@/components/products/ScrollToTop";

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
    <DishesLayout>
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
              Stimulate the appetite and provide an initial burst of flavors and
              textures.
            </Paragraph>

            <span className={styles.cardsContainer}>
              {products
                .filter((p) => p.category == 0)
                .map((plate) => (
                  <PlateCard
                    key={`plate-list-${plate.id}`}
                    id={plate.id}
                    name={plate.name}
                    category={plate.category}
                    ingredients={plate.ingredients}
                    price={plate.price}
                    imageUrl={plate.imageUrl}
                    bestSeller={plate.bestSeller}
                  />
                ))}
            </span>
          </section>

          <section
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
            <Paragraph style={{ fontSize: "16px" }}>
              Medley of fresh, crisp and colorful ingredients harmoniously
              combined to create a dish that's both refreshing and nutritious.
            </Paragraph>
            <span className={styles.cardsContainer}>
              {products
                .filter((p) => p.category == 1)
                .map((plate) => (
                  <PlateCard
                    key={`plate-list-${plate.id}`}
                    name={plate.name}
                    category={plate.category}
                    description={plate.description}
                    ingredients={plate.ingredients}
                    price={plate.price}
                    imageUrl={plate.imageUrl}
                    bestSeller={plate.bestSeller}
                  />
                ))}
            </span>
          </section>

          <section
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
              Substantial part of the dining experience and consists of a larger
              portion compared to appetizers or side dishes.
            </Paragraph>

            <span className={styles.cardsContainer}>
              {products
                .filter((p) => p.category == 2)
                .map((plate) => (
                  <PlateCard
                    key={`plate-list-${plate.id}`}
                    name={plate.name}
                    category={plate.category}
                    description={plate.description}
                    ingredients={plate.ingredients}
                    price={plate.price}
                    imageUrl={plate.imageUrl}
                    bestSeller={plate.bestSeller}
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
              Extensive array of flavors, temperatures, and textures, enriching
              our experiences with their diversity and refreshing qualities.
            </Paragraph>
            <span className={styles.cardsContainer}>
              {products
                .filter((p) => p.category == 3)
                .map((plate) => (
                  <PlateCard
                    key={`plate-list-${plate.id}`}
                    name={plate.name}
                    category={plate.category}
                    description={plate.description}
                    ingredients={plate.ingredients}
                    price={plate.price}
                    imageUrl={plate.imageUrl}
                    bestSeller={plate.bestSeller}
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
              Sweet dishes and treats enjoyed at the end of a meal or as a
              standalone indulgence.
            </Paragraph>

            <span className={styles.cardsContainer}>
              {products
                .filter((p) => p.category == 4)
                .map((plate) => (
                  <PlateCard
                    key={`plate-list-${plate.id}`}
                    name={plate.name}
                    category={plate.category}
                    description={plate.description}
                    ingredients={plate.ingredients}
                    price={plate.price}
                    imageUrl={plate.imageUrl}
                    bestSeller={plate.bestSeller}
                  />
                ))}
            </span>
          </section>
        </main>
      </Content>

      <ScrollToTop />
    </DishesLayout>
  );
};
export default Dishes;
