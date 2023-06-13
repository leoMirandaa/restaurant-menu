import { useRef } from 'react';

import { Layout, theme, Typography } from "antd";
import { PlateCard } from "../../../components/products/Card";
import { products } from "../../../database/products";
const { Content } = Layout;
const { Title, Paragraph } = Typography;

import styles from '../../styles/dishes.module.css'

const Dishes = () => {
  const starter = useRef();
  const salad = useRef();
  const mainDishes = useRef();
  const beverages = useRef();
  const dessert = useRef();

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const { useToken } = theme;
  const { token } = useToken();

  return (
    <Content
      style={{
        // padding: '0px 24px',
        borderRadius: '10px',
      }}
    > 
      <main 
        // style={{ paddingTop: '15px' }}
      >
        <div style={{marginBottom: '40px'}} ref={starter}>
          <Title 
            level={2} 
            style={{
              color: token.colorPrimary, 
              margin: '8px 0px 0px 0px',
            }}
          >
            Starter 
          </Title>

          <Paragraph 
            style={{fontSize: '16px'}}
          > 
            Excepteur dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur 
          </Paragraph>

          <div className={styles.cardsContainer}>
            {
              products.filter(p=> p.category==0).map(plate => (
                <PlateCard
                  id={plate.id}
                  name={plate.name} 
                  category={plate.category}
                  description={plate.description}
                  price={plate.price} 
                  imageUrl={plate.imageUrl} 
                />
              ))
            }      
          </div>
        </div>

        <div style={{marginBottom: '40px'}} ref={salad}>
          <Title level={2} style={{display: 'flex',
              top: 64,  color: token.colorPrimary, marginBottom: '0px'}}>Salad </Title>
          <Paragraph style={{fontSize: '16px'}}> Excepteur dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur </Paragraph>
          <div className={styles.cardsContainer}>
            {
              products.filter(p=> p.category==1).map(plate => (
                <PlateCard 
                  name={plate.name} 
                  category={plate.category}
                  description={plate.description}
                  ingredients={plate.ingredients}
                  price={plate.price} 
                  imageUrl={plate.imageUrl} 
                />
              ))
            }         
          </div>
      </div>

        <div style={{marginBottom: '40px'}} ref={mainDishes}>
        <Title 
            level={2} 
            style={{
              color: token.colorPrimary, 
              marginBottom: '0px',
            }}
          >
            Main Dishes 
          </Title>                
          <Paragraph 
            style={{fontSize: '16px'}}
          > 
            Excepteur dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur 
          </Paragraph>

          <div className={styles.cardsContainer} >
            {
              products.filter(p=> p.category==2).map(plate => (
                <PlateCard 
                  name={plate.name} 
                  category={plate.category}
                  description={plate.description}
                  ingredients={plate.ingredients}
                  price={plate.price} 
                  imageUrl={plate.imageUrl} 
                />
              ))
            }      
          </div>
        </div>

        <div style={{marginBottom: '40px'}} ref={beverages}>
          <Title 
            level={2} 
            style={{
              color: token.colorPrimary, 
              marginBottom: '0px',
            }}
          >
            Beverages
          </Title>                
          <Paragraph 
            style={{fontSize: '16px'}}
          > 
            Excepteur dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur 
          </Paragraph>
          <div className={styles.cardsContainer}>
            {
              products.filter(p=> p.category==3).map(plate => (
                <PlateCard 
                  name={plate.name} 
                  category={plate.category}
                  description={plate.description}
                  ingredients={plate.ingredients}
                  price={plate.price} 
                  imageUrl={plate.imageUrl} 
                />
              ))
            }      
          </div>
        </div>

        <div style={{marginBottom: '40px'}} ref={dessert}>
          <Title 
            level={2} 
            style={{
              color: token.colorPrimary, 
              marginBottom: '0px',
            }}
          >
            Desserts
          </Title>                
          <Paragraph 
            style={{fontSize: '16px'}}
          > 
            Excepteur dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur 
          </Paragraph>

          <div className={styles.cardsContainer}>
            {
              products.filter(p=> p.category==4).map(plate => (
                <PlateCard 
                  name={plate.name} 
                  category={plate.category}
                  description={plate.description}
                  ingredients={plate.ingredients}
                  price={plate.price} 
                  imageUrl={plate.imageUrl} 
                />
              ))
            }      
          </div>
        </div>
      </main>           
    </Content>
  )
}
export default Dishes