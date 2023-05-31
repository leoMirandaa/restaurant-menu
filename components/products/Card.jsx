import { Button, Card, theme, Badge } from "antd";
const { Meta } = Card;

export const PlateCard = ({ name, description, price, imageUrl }) => {
  const { useToken } = theme;
  const { token } = useToken();

  return (
    <Badge.Ribbon 
      key={name}
      color={`${token.colorPrimary}`} 
      text={`$ ${price}`}
      style={{fontWeight: 'bold'}} 
    >
      <Card
        style={{ width: 300, position: 'relative' }}
        cover={
          <img 
            style={{
              width: '300px',
              height: '180px',
              objectFit: 'cover'
            }}
            alt="example" 
            src={`${imageUrl}`} 
          />
        }
        actions={[
          <Button type="primary">
            Add to cart
          </Button>
        ]}
      >
        <Meta
          title={`${name}`} 
          description={`${description}`} 
        />
      </Card>
    </Badge.Ribbon>
  )
}