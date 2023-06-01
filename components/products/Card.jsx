import { useState } from 'react'
import { Button, Card, theme, Badge, Typography } from "antd";
const { Title, Paragraph, Text } = Typography;

import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

export const PlateCard = ({ name, description, ingredients, price, imageUrl }) => {
  console.log('** ', ingredients)
  const [count, setCount] = useState(0);
  const router = useRouter()

  const { useToken } = theme;
  const { token } = useToken();

  const handleCardClick = (event) => {
    event.stopPropagation()
    console.log('clicked')
    router.push('/dishes/1')
  }

  return (
    // <Badge.Ribbon 
    //   key={name}
    //   color={`${token.colorTextSecondary}`} 
    //   text={`$ ${price}`}
    //   style={{fontWeight: 'bold'}} 
    // >
      <Card
        onClick={handleCardClick}
        style={{
          width: 300, 
          // position: 'relative', 
          cursor: 'pointer',
        }}
        cover={
          <img 
            style={{
              width: '300px',
              height: '180px',
              objectFit: 'cover',
            }}
            alt="example" 
            src={`${imageUrl}`} 
          />
        }
      >
        <div
          style={{
            // background: 'pink',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '140px'
          }}
        >
          <div>
            <Title level={4} style={{margin: '0 0 0 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              {name}
              <span
                style={{color: token.colorPrimary}
              }>
                ${price}
              </span>
            </Title>
            
            <Paragraph type="secondary" style={{margin: '10px 0px 20px 0px'}}>
              {/* {description} */}
              {ingredients.join(", ")}
            </Paragraph>
          </div>
          
          <span style={{display: 'flex', justifyContent: 'center'}}>
            <div onClick={(e) => e.stopPropagation()} style={{textAlign: 'center'}}>          
              <Button  
                onClick={(e)=>{setCount(count - 1)}} 
                type="primary" 
                icon={<MinusOutlined />} 
              />
                <Text style={{cursor: 'auto', margin: '0 10px', fontWeight: 'bold'}}>{count}</Text> 
              <Button 
                onClick={(e)=>{setCount(count + 1)}} 
                type="primary" 
                icon={<PlusOutlined />} 
              />
            </div>
          </span>
        </div>
      </Card>
    // </Badge.Ribbon>
  )
}