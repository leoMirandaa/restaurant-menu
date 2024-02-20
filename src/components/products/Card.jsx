import { useRouter } from "next/router";
import Image from "next/image";

import { Button, Card, theme, Typography, Tag, Tooltip } from "antd";
const { Title, Paragraph } = Typography;
import { ArrowRightOutlined } from "@ant-design/icons";

import styles from "../../styles/dishCard.module.css";

export const categories = {
  0: "Starters",
  1: "Saladas",
  2: "Main Dishses",
  3: "Beverages",
  4: "Deserts",
};

export const PlateCard = ({
  id,
  name,
  ingredients,
  price,
  imageUrl,
  bestSeller,
}) => {
  const router = useRouter();

  const { useToken } = theme;
  const { token } = useToken();

  const handleDetailsClick = (event) => {
    event.stopPropagation();
    router.push(`/dishes/${id}`);
  };

  return (
    <Card
      className={styles.card}
      cover={
        <Image
          className={styles.image}
          alt="dish food"
          src={`${imageUrl}`}
          width={200}
          height={200}
        />
      }
    >
      <div className={styles.bodyCard}>
        {bestSeller && (
          <Tag
            className={styles.bestSellerTag}
            color="#990236"
          >
            Best seller
          </Tag>
        )}

        <Title level={3}>{name}</Title>
        <div className={styles.pricesContainer}>
          <Paragraph>
            {" "}
            Single: &nbsp;
            <span style={{ color: token.colorPrimary }}>${price}</span>
          </Paragraph>

          <Paragraph>
            Double: &nbsp;
            <span style={{ color: token.colorPrimary }}>$36.80</span>
          </Paragraph>
        </div>
        <Paragraph
          className={styles.ingredients}
          type="secondary"
        >
          {ingredients}
        </Paragraph>

        <Tooltip title="Details">
          <Button
            onClick={handleDetailsClick}
            icon={<ArrowRightOutlined style={{ fontSize: "13px" }} />}
            className={styles.detailsButton}
            style={{
              background: token.secondaryColor,
              borderRadius: "50% 0px 0px 0px",
            }}
            type="secondary"
            size="large"
          />
        </Tooltip>
      </div>
    </Card>
  );
};
