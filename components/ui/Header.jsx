import { useState } from 'react';
import Link from 'next/link';

import { Layout, Badge, theme, Typography, Button } from "antd"
const { Title } = Typography;
const { Header } = Layout;
import { IconChefHat, IconShoppingCart, IconMoonFilled, IconSunFilled } from '@tabler/icons-react';

import { magentaTheme, darkTheme } from '../../themes';

export const HeaderComponent = ({ setTheme }) => {
  const [ isDark, setIsDark] = useState(false)

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { useToken } = theme;
  const { token } = useToken();

  const handleDarkMode = () => {
    setIsDark(!isDark)
    !isDark ? setTheme({...darkTheme}) : setTheme({...magentaTheme})
  }

  return (
    <Header 
      style={{ 
        background: colorBgContainer,
        // borderBottom: `2px dotted ${token.colorPrimary}`,
        display: 'flex', 
        padding: '0px 20px', 
        position: 'sticky',
        top: 0,
        transition: '0.3s', 
        zIndex: 1,
        opacity: .9,
      }}
    >
      <nav 
        style={{
          display: 'flex', 
          width: '100%', 
          justifyContent: 'space-between',
 
          maxWidth: '1400px', 
          margin: '0 auto'
        }}>
        <Link href="/" style={{display: 'flex', alignItems: 'center'}}>
          <IconChefHat size={36} color={`${token.colorPrimary}`}/>      
          <Title level={4} style={{marginLeft:'5px'}}>Magenta kitchen</Title>
        </Link>

        <div style={{display: "flex"}} >
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
      </nav>
    </Header>
  )
}