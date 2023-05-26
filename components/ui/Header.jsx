import Link from 'next/link';

import { Layout, Badge, theme, Typography } from "antd"
const { Title } = Typography;

const { Header } = Layout;
import { IconChefHat, IconShoppingCart } from '@tabler/icons-react';

export const HeaderComponent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header style={{ padding: '0px 20px', background: colorBgContainer,display: 'flex', }}>
    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between'}}>

    <Link href="/" style={{display: 'flex',alignItems: 'center'}}>
      <IconChefHat size={36} color='#BE3455'/>      
      <Title level={4} style={{marginLeft:'5px'}}>Magenta kitchen</Title>
    </Link>

    <Link href='/checkout' style={{display: 'flex',alignItems: 'center'}}>
      <Badge count={1}>
        <IconShoppingCart />
      </Badge>
    </Link>
    </div>
  </Header>
  )
}