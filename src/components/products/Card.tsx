import { useRouter } from "next/router";
import Image from "next/image";

import { Button, Card, theme, Typography, Tag, Tooltip } from "antd";
const { Title, Paragraph } = Typography;
import { ArrowRightOutlined } from "@ant-design/icons";

import { PriceNameType, TMenuItem, TPriceOption } from "@/types/dish";
import styles from "../../styles/dishCard.module.css";

export const PlateCard = ({
  id,
  name,
  ingredients,
  prices,
  imageUrl,
  bestSeller,
}: TMenuItem) => {
  const router = useRouter();

  const { useToken } = theme;
  const { token } = useToken();

  const handleDetailsClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    router.push(`/dishes/${id}`);
  };

  const handlePriceName = (name: string) => {
    switch (name) {
      case PriceNameType.STANDARD:
        return "";

      case PriceNameType.TWELVEOZ:
        return "12Oz: ";

      case PriceNameType.SIXTEENOZ:
        return "16Oz: ";

      default:
        return `${name.charAt(0).toUpperCase() + name.slice(1)}: `;
    }
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
            color={token.colorInfo}
          >
            Best seller
          </Tag>
        )}

        <Title level={3}>{name}</Title>

        <div className={styles.pricesContainer}>
          {prices.map(({ name, price }: TPriceOption, idx) => (
            <Paragraph key={`${name}-${price}-${idx}`}>
              {handlePriceName(name)}
              <span style={{ color: token.colorTextSecondary }}>${price}</span>
            </Paragraph>
          ))}
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
              background: token.colorInfoBg,
              borderRadius: "50% 0px 0px 0px",
            }}
            type="text"
            size="large"
          />
        </Tooltip>
      </div>
    </Card>
  );
};
