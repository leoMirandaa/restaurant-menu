import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Layout, Badge, theme, Typography, Button, Drawer, Menu, Dropdown, Space } from "antd"
const { Title } = Typography;
const { Header } = Layout;
import { IconChefHat, IconShoppingCart, IconMoonFilled, IconSunFilled, IconMenu2 } from '@tabler/icons-react';
import { HomeOutlined } from '@ant-design/icons';

import { menuOptions } from '@/utils/menuOptions';

import { useCartStore } from '@/store/cartStore';

import { darkTheme } from '../../themes';

import styles from '../../src/styles/header.module.css'

export const HeaderComponent = ({ themeSelected, setThemeSelected, handleClick }) => {
  const [ isDark, setIsDark] = useState(false)
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const cart = useCartStore((state) => state.cart)
  const dishes = useCartStore((state) => state.dishes)
  // const increaseCart = useCartStore((state) => state.increaseCart)
  // const decreaseCart = useCartStore((state) => state.decreaseCart)
  // const resetCart = useCartStore((state) => state.resetCart)

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { useToken } = theme;
  const { token } = useToken();

  const handleDarkMode = () => {
    if(!isDark) {
      setThemeSelected("magentaTheme"); 
      localStorage.setItem('theme', 'magentaTheme')
      
    } else {
      setThemeSelected("darkTheme"); 
      localStorage.setItem('theme', 'darkTheme')
    }
    setIsDark(!isDark)
  }


  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  
  return (
    <Header 
      className={styles.headerContainer}
      style={{background: colorBgContainer}}
    >
      <nav className={styles.navContainer}>
        <div style={{ display: 'flex', alignItems: 'center'}} >
          <Button className={styles.menuIcon} type="text" onClick={showDrawer} icon={<IconMenu2 color={token.colorPrimary} />} />
          
          <Drawer
            placement="left"
            onClose={onClose}
            open={open}
            >
            <Menu
              style={{ 
                borderInline: 'none',
                borderRadius: '10px',
                paddingBottom: '10px',
              }}
              mode="inline"
              defaultSelectedKeys={['1']}
              items= {...menuOptions}
              onClick={(e) => {handleClick(e)}}
              />
          </Drawer>

          <Link href="/" style={{display: 'flex', alignItems: 'center'}}>
            <IconChefHat size={36} color={`${token.colorPrimary}`}/>      
            <Title level={4} style={{marginLeft:'5px'}}>Magenta kitchen</Title>
          </Link>
        </div>

        <div style={{display: "flex", alignItems: 'center'}}>

          <Button 
            icon={<HomeOutlined />}
            onClick={() => router.push('/')}
          />

          <Button 
            type='primary' 
            style={{margin: '0px 20px'}}
            onClick={() => router.push('/admin')}
          >
            Admin
          </Button>
            
          <div style={{display: 'flex',alignItems: 'center', marginRight: '20px'}}>
            <Button 
              icon={ isDark ? <IconSunFilled /> :<IconMoonFilled />} 
              type='text' 
              shape='circle' 
              onClick={handleDarkMode}
            />
          </div>

        </div>
      </nav>
    </Header>
  )
}