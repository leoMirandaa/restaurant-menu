import { useState } from 'react'
import { useRouter } from 'next/router';

import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Button, Card, theme, Badge, Typography } from "antd";
const { Title, Paragraph, Text } = Typography;

import { useCartStore } from '@/store/cartStore';

export const PlateCard = ({ id, name, category, description, price, imageUrl }) => {
  const [count, setCount] = useState(0);
  const router = useRouter();

  const increaseCart = useCartStore((state) => state.increaseCart)
  const decreaseCart = useCartStore((state) => state.decreaseCart)
  const dishes = useCartStore((state) => state.dishes)
  const addDish = useCartStore((state) => state.addDish)
  const removeDish = useCartStore((state) => state.removeDish)

  const { useToken } = theme;
  const { token } = useToken();

  const handleCardClick = (event) => {
    event.stopPropagation()
    console.log('clicked')
    router.push('/dishes/1')
  }

  const handleAddDish = () => {
    console.log(dishes)
    setCount(count+1)
    addDish({id, name, category, description, price, imageUrl})
    increaseCart(1)
  }

  const handleRemoveDish = () => {
    if(count === 0) return
    setCount(count-1)
    removeDish({id})
    decreaseCart(1)
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
              {description}
            </Paragraph>
          </div>
          
          <div 
            onClick={(e) => e.stopPropagation()} 
            style={{textAlign: 'center', cursor: 'auto'}}
          >          
            <Button  
              // onClick={(e)=>{setCount(count - 1)}} 
              onClick={handleRemoveDish} 
              type="primary" 
              icon={<MinusOutlined />} 
            />
              <Text style={{cursor: 'auto', margin: '0 10px', fontWeight: 'bold'}}>{count}</Text> 
            <Button 
              // onClick={(e)=>{setCount(count + 1)}} 
              onClick={handleAddDish} 
              type="primary" 
              icon={<PlusOutlined />} 
            />
          </div>
        </div>
      </Card>
    // </Badge.Ribbon>
  )
}