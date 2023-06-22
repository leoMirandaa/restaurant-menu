import { useRouter } from "next/router";

import { Card, theme, Typography } from "antd";
const { Title, Paragraph } = Typography;

import styles from "../../src/styles/dishCard.module.css";
import Image from "next/image";

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
  category,
  description,
  price,
  imageUrl,
}) => {
  const router = useRouter();

  const { useToken } = theme;
  const { token } = useToken();

  const handleCardClick = (event) => {
    event.stopPropagation();
    console.log("clicked");
    router.push("/dishes/1");
  };

  return (
    <Card
      className={styles.card}
      onClick={handleCardClick}
      cover={
        <Image
          className={styles.image}
          alt="example"
          src={`${imageUrl}`}
          width={200}
          height={200}
        />
      }
    >
      <div className={styles.bodyCard}>
        <Title
          level={3}
          style={{ margin: "0" }}
        >
          {name}
        </Title>

        <div className={styles.pricesContainer}>
          <div>
            {" "}
            Single: &nbsp;
            <span style={{ color: token.colorPrimary }}>$18.50</span>
          </div>

          <div>
            Double: &nbsp;
            <span style={{ color: token.colorPrimary }}>$36.80</span>
          </div>
        </div>

        <Paragraph
          className={styles.ingredients}
          type="secondary"
        >
          {description}
        </Paragraph>
      </div>
    </Card>
  );
};
