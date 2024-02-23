import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import classnames from "classnames";

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
  ConfigProvider,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

import { DishLayout } from "@/components/layouts";
import { products } from "../../../../database/products";
import styles from "../../../styles/dishDetailsCard.module.css";

const Dish = () => {
  const [dish, setDish] = useState([]);
  const router = useRouter();

  const { useToken } = theme;
  const { token } = useToken();

  useEffect(() => {
    const data = products.filter((product) => product.id === +router.query.id);
    setDish(data[0]);

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
