import { useRef } from 'react';
import { Button, Typography } from 'antd';
import { ShopLayout } from '../../components/layouts';

const { Title } = Typography;

export default function Home() {
  const starter = useRef();
  const desert = useRef();

  const handleClick = () => {
    starter.current.scrollIntoView({ behavior: "smooth", inline: 'start' });
  }
  return (
    <>
        <ShopLayout 
          title={'Magenta-Cloud - Home'}
          pageDescription={'The most elegant food at the corner'}
        >
          <Title level={1} style={{textAlign: 'center'}}>Home</Title>
          <Title level={2}>Food Menu</Title>
          <Button  onClick={()=> {desert.current.scrollIntoView({ behavior: "smooth", inline: 'start' })}}>Test</Button>

          <div ref={starter}>
            <Title level={3} >Starter </Title>
            <p>Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur.</p>
            <p>Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur.</p>
            <p>Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur.</p>
            <p>Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur.</p>
          </div>

          <div>
            <Title level={3} >Salad </Title>
            <p>Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur.</p>
            <p>Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur.</p>
            <p>Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur.</p>
            <p>Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur.</p>
          </div>

          <div>
            <Title level={3} >Main dishes </Title>
            <p>Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur.</p>
            <p>Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur.</p>
            <p>Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur.</p>
            <p>Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur.</p>
            <p>Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur.</p>
            <p>Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur.</p>
          </div>

          <div>
            <Title level={3} >Beverages </Title>
            <p>Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur.</p>
            <p>Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur.</p>
            <p>Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur.</p>
            <p>Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur.</p>
            <p>Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur.</p>
            <p>Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur.</p>
          </div>

          <div ref={desert}>
            <Title level={3} >Dessert </Title>
            <p>Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur.</p>
            <p>Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur.</p>
            <p>Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur.</p>
            <p>Excepteur pariatur voluptate occaecat velit minim nisi incididunt. Id anim id et irure eu. Id cupidatat occaecat aute eiusmod proident incididunt sunt deserunt. Officia commodo ea consequat incididunt tempor ullamco est commodo proident qui officia. Non nostrud sit eu excepteur consectetur ullamco laborum ipsum amet. Commodo reprehenderit veniam anim officia dolore voluptate amet do voluptate enim non nostrud commodo occaecat. Nulla dolor velit fugiat ea consectetur est aute pariatur.</p>
          </div>

          <Button onClick={handleClick}>Test</Button>
        </ShopLayout>
    </>
  )
}
