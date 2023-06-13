import { useRouter } from 'next/router';

import { Card, theme, Badge, Typography } from "antd";
const { Title, Paragraph, Text } = Typography;

import styles from '../../src/styles/dishCard.module.css'

import image from '../../public/park.jpeg'

export const categories = {
  0: 'Starters',
  1: 'Saladas',
  2: 'Main Dishses',
  3: 'Beverages',
  4: 'Deserts'
}

export const PlateCard = ({ id, name, category, description, price, imageUrl }) => {
  const router = useRouter();

  const { useToken } = theme;
  const { token } = useToken();

  const handleCardClick = (event) => {
    event.stopPropagation()
    console.log('clicked')
    router.push('/dishes/1')
  }

  return (
    <Badge.Ribbon 
      key={name}
      color={`${token.colorPrimary}`} 
      text={`${categories[category]}`}
    >
      <Card
        className={styles.card}
        onClick={handleCardClick}
        cover={
          <img 
            className={styles.image}
            alt="example" 
            src={`${imageUrl}`} 
          />
        }
      >
        <div className={styles.bodyCard}>
          <Title level={4} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>
            {name}
          </Title>

          <p> Single: 
            <span style={{color: token.colorPrimary}}>
              $18.50
            </span>
          </p>

          <p>Double: 
            <span style={{color: token.colorPrimary}}>
              $36.80
            </span>
          </p>
          
          <Paragraph 
            className={styles.ingredients} 
            type="secondary"
          >
            {description}
          </Paragraph>          
        </div>
      </Card>
    </Badge.Ribbon>
  )
}