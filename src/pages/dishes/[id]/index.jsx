import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { animate } from "motion";
import {
  Button,
  Card,
  Layout,
  Skeleton,
  Typography,
  Tag,
  Tooltip,
  theme,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

import { DishLayout } from "@/components/layouts";
import styles from "../../../styles/dishDetailsCard.module.css";

const Dish = (props) => {
  const { dish } = props;
  const router = useRouter();

  const { useToken } = theme;
  const { token } = useToken();

  useEffect(() => {
    animate(
      ".cardDescriptionAnimation",
      { opacity: [0, 1] },
      { duration: 0.9 }
    );
  }, []);

  return (
    <DishLayout
      title={dish?.name}
      pageDescription={` ${dish?.name} dish description`}
    >
      <Content>
        <main>
          <Card
            className={`${styles.card} cardDescriptionAnimation`}
            cover={
              <>
                {!dish?.imageUrl ? (
                  <Skeleton.Image
                    active
                    className={styles.image}
                  />
                ) : (
                  <Image
                    className={styles.image}
                    style={{ borderRadius: "0px" }}
                    alt="dish food"
                    src={dish?.imageUrl}
                    width={400}
                    height={450}
                  />
                )}
              </>
            }
          >
            <div className={styles.bodyCard}>
              {dish?.bestSeller && (
                <Tag
                  className={styles.bestSellerTag}
                  color={token.TagColor}
                >
                  Best seller
                </Tag>
              )}
              <Title
                className={styles.dishName}
                level={3}
              >
                {dish?.name}
              </Title>

              <Text className={styles.subtitle}>Ingredients</Text>
              <Paragraph
                type="secondary"
                className={styles.paragraph}
              >
                {dish?.ingredients}
              </Paragraph>

              <Text className={styles.subtitle}>Description</Text>
              <Paragraph
                type="secondary"
                className={styles.paragraph}
              >
                {dish?.description}
              </Paragraph>

              <Tooltip title="Back to Menu">
                <Button
                  onClick={() => router.push("/dishes")}
                  icon={<ArrowLeftOutlined style={{ fontSize: "13px" }} />}
                  className={styles.detailsButton}
                  style={{
                    background: token.ArrowButtonColor,
                    borderRadius: "0px 0px 50% 0px",
                  }}
                  type="secondary"
                  size="large"
                />
              </Tooltip>
            </div>
          </Card>
        </main>
      </Content>
    </DishLayout>
  );
};

export default Dish;

export async function getStaticPaths() {
  const response = await fetch(
    "https://65e0ed51d3db23f7624a49a3.mockapi.io/dishes"
  );
  const dishes = await response.json();

  const paths = dishes.map((dish) => {
    return { params: { id: dish.id } };
  });

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  const slug = params.id;
  const response = await fetch(
    `https://65e0ed51d3db23f7624a49a3.mockapi.io/dishes/${slug}`
  );
  const dish = await response.json();

  return {
    props: {
      dish,
    },
    revalidate: false,
  };
}
