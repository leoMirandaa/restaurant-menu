import { useEffect } from "react";

import { Layout, theme, Typography } from "antd";
const { Content } = Layout;
const { Title, Paragraph } = Typography;

import { PlateCard } from "../../components/products/Card";
import { inView, animate } from "motion";

import { TMenuSection } from "@/types/dish";
import { DishesLayout } from "../../components/layouts";
import styles from "../../styles/dishes.module.css";
// import { ScrollToTop } from "@/components/products/ScrollToTop";

interface IDishes {
  dishes: TMenuSection[];
}

const Dishes = (props: IDishes) => {
  const { dishes } = props;

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
    <DishesLayout
      title="Today's Menu"
      pageDescription="List of delicious dishes"
      imageUrl="https://res.cloudinary.com/dbzv9xfjp/image/upload/v1710747902/og-images/dishes-menu_kjawtv.png"
    >
      <Content
        style={{
          scrollBehavior: "smooth",
        }}
      >
        <main>
          {dishes?.map((section: TMenuSection) => (
            <section
              key={section.name}
              id={section.name.toLowerCase()}
              className={styles.sectionContainer}
            >
              <Title
                level={2}
                style={{
                  color: token.colorPrimary,
                  margin: "0px",
                }}
              >
                {section?.name}
              </Title>

              <Paragraph
                className="section"
                style={{ fontSize: "16px" }}
              >
                {section.description}
              </Paragraph>

              <span className={styles.cardsContainer}>
                {section?.items.map((item) => (
                  <PlateCard
                    key={item.id}
                    {...item}
                  />
                ))}
              </span>
            </section>
          ))}
        </main>
      </Content>

      {/* <ScrollToTop /> */}
    </DishesLayout>
  );
};
export default Dishes;

export async function getStaticProps() {
  const response = await fetch(
    "https://65e0ed51d3db23f7624a49a3.mockapi.io/magenta_kitchen"
  );
  const result = await response.json();
  const dishes = result[0].sections;

  return {
    props: {
      dishes,
    },
    // Re-generate every 10 minutes(600sec)
    revalidate: 600,
  };
}
