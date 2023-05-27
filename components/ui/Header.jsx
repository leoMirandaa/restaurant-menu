import Link from 'next/link';
import { useState } from 'react';

import { Layout, Badge, theme, Typography, Button } from "antd"
const { Title } = Typography;

const { Header } = Layout;
import { IconChefHat, IconShoppingCart, IconMoonFilled, IconSunFilled } from '@tabler/icons-react';

export const HeaderComponent = () => {
  const [ isDark, setIsDark] = useState(false)

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleDarkMode = () => {
    setIsDark(!isDark)
  }

  return (
    <Header 
      style={{ 
        background: colorBgContainer,
        display: 'flex', 
        padding: '0px 20px', 
        position: 'sticky',
        top: 0,
        zIndex: 1,
      }}
    >

      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between'}}>

        <Link href="/" style={{display: 'flex',alignItems: 'center'}}>
          <IconChefHat size={36} color='#BE3455'/>      
          <Title level={4} style={{marginLeft:'5px'}}>Magenta kitchen</Title>
        </Link>

        <div  style={{display: "flex"}} >
          <div style={{display: 'flex',alignItems: 'center', marginRight: '20px'}}>
            <Button 
              icon={ isDark ? <IconSunFilled /> :<IconMoonFilled />} 
              type='text' 
              shape='circle' 
              onClick={handleDarkMode}
            />
          </div>

          <Link href='/checkout' style={{display: 'flex',alignItems: 'center'}}>
            <Badge count={1}>
              <IconShoppingCart />
            </Badge>
          </Link>
        </div>
      </div>
    </Header>
  )
}