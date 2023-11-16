import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import classnames from "classnames";

import { Card, Layout, Typography, Tag, Tooltip } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

import { DishLayout } from "@/components/layouts";
import { products } from "../../../../database/products";
import styles from "../../../styles/dishDetailsCard.module.css";

const Dish = () => {
  const [dish, setDish] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const data = products.filter((product) => product.id === +router.query.id);
    setDish(data[0]);
  }, []);

  return (
    <DishLayout>
      <Content>
        <main>
          <Card
            className={styles.card}
            cover={
              <Image
                className={styles.image}
                alt="dish food"
                src={dish?.imageUrl}
                width={400}
                height={450}
              />
            }
          >
            <div className={styles.bodyCard}>
              {dish?.bestSeller && (
                <Tag
                  className={styles.bestSellerTag}
                  color="#990236"
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

              <Tooltip
                title="Back to Menu"
                className={classnames(
                  styles.detailsButton,
                  styles.leftRowAnimation
                )}
                onClick={() => router.push("/dishes")}
              >
                <ArrowLeftOutlined />
              </Tooltip>
            </div>
          </Card>
        </main>
      </Content>
    </DishLayout>
  );
};
export default Dish;
