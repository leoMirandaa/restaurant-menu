import { useState } from 'react'
import { Button, Card, theme, Badge, Typography } from "antd";
const { Title, Paragraph, Text } = Typography;

import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

export const PlateCard = ({ name, description, price, imageUrl }) => {
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
          width: 310, 
          cursor: 'pointer',
          height: 'auto'
        }}
        cover={
          <img 
            style={{
              width: '310px',
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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'space-between',
            minHeight: 'auto'
          }}
        >
          <div>
            <Title level={4} style={{margin: '0 0 0 0', display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>
              <span style={{width: '80%'}}>
                {name}
              </span>
              <span style={{color: token.colorPrimary}}>
                ${price}
              </span>
            </Title>
            
            <Paragraph type="secondary" style={{margin: '10px 0px 20px 0px'}}>
              {/* {description} */}
              {description}
            </Paragraph>
          </div>
          
          <div 
            onClick={(e) => e.stopPropagation()} 
            style={{textAlign: 'center', cursor: 'auto'}}
          >          
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
        </div>
      </Card>
    // </Badge.Ribbon>
  )
}