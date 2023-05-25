import { Button, Space } from 'antd';
import { products } from '../../database/products';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h1>Food Store</h1>
        <Button type="primary">Primary Button</Button>
        {
          products.map(product => (
            <Image 
              width='300' 
              height='200' 
              src={`${product.imageUrl}`} 
            />
          ))
        }
    </>
  )
}
