import { Typography } from 'antd';
import { ShopLayout } from '../../components/layouts';

const { Title } = Typography;

export default function Home() {
  return (
    <>
        <ShopLayout 
          title={'Magenta-Cloud - Home'}
          pageDescription={'The most elegant food at the corner'}
        >
          <Title level={1} style={{textAlign: 'center'}}>Home</Title>
          <Title level={2}>Food Menu</Title>

        </ShopLayout>
    </>
  )
}
