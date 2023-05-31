import { useState } from 'react'
import { Button, Card, theme, Badge, Typography, Divider } from "antd";
const { Title, Paragraph, Text } = Typography;

import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

export const PlateCard = ({ name, description, price, imageUrl }) => {
  const [count, setCount] = useState(0);
  const router = useRouter()

  const { useToken } = theme;
  const { token } = useToken();

  const handleCardClick = (event) => {
    event.stopPropagation(); // notice this
    console.log('clicked')
    router.push('admin')
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
        style={{ width: 300, position: 'relative', cursor: 'pointer'  }}
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
            Lorem elit. officiis praesentium maiores officia dolorum vero dolor? Dolore esse aut corporis!
          </Paragraph>
        </div>
        
        {/* <Divider style={{marginTop: 0}} /> */}
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
      </Card>
    // </Badge.Ribbon>
  )
}