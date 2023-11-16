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
          scrollBehavior: "smooth",
        }}
      >
        <main className="">
          <section id="starter">
            <Title
              level={2}
              style={{
                color: token.colorPrimary,
                margin: "0px",
              }}
            >
              Starters
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
                    {...plate}
                  />
                ))}
            </span>
          </section>

          <section id="salad">
            <Title
              level={2}
              style={{
                color: token.colorPrimary,
                margin: "0px",
                marginTop: "3rem",
              }}
            >
              Salads{" "}
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
                    {...plate}
                  />
                ))}
            </span>
          </section>

          <section id="mainDishes">
            <Title
              level={2}
              style={{
                color: token.colorPrimary,
                margin: "0px",
                marginTop: "3rem",
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
                    {...plate}
                  />
                ))}
            </span>
          </section>

          <section id="beverages">
            <Title
              level={2}
              style={{
                color: token.colorPrimary,
                margin: "0px",
                marginTop: "3rem",
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
                    {...plate}
                  />
                ))}
            </span>
          </section>

          <section id="deserts">
            <Title
              level={2}
              style={{
                color: token.colorPrimary,
                margin: "0px",
                marginTop: "3rem",
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
                    {...plate}
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
