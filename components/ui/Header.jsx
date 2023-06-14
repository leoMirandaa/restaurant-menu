import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Layout, theme, Typography, Button, Drawer, Menu, Dropdown, Space } from "antd"
const { Title } = Typography;
const { Header } = Layout;
import { IconChefHat, IconMoonFilled, IconSunFilled, IconMenu2 } from '@tabler/icons-react';
import { HomeOutlined } from '@ant-design/icons';

import { menuOptions } from '@/utils/menuOptions';

import { useCartStore } from '@/store/cartStore';

import { darkTheme } from '../../themes';

import styles from '../../src/styles/header.module.css'

export const HeaderComponent = ({ themeSelected, setThemeSelected }) => {
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

  const handleCloseDrawer = () => {
    setTimeout(() => {
      setOpen(false);
    }, 350);
  }
  
  return (
    <Header 
      className={styles.headerContainer}
      style={{background: colorBgContainer}}
    >
      <nav className={styles.navContainer}>
        <div className={styles.navContainerOptions} >
          <Link href="/" style={{display: 'flex', alignItems: 'center'}}>
            <IconChefHat size={36} color={`${token.colorPrimary}`}/>      
            <Title level={4}>Magenta kitchen</Title>
          </Link>

          <Button 
            className={styles.menuIcon} 
            type="text" 
            onClick={showDrawer} 
            icon={<IconMenu2 size={30} color={token.colorPrimary} />} 
          />
        </div>

        <div className={styles.headerButtonsContainer}>
          <Button 
            icon={<HomeOutlined />}
            // onClick={() => router.push('/')}
            onClick={() => window.scroll({
              top: 0, 
              left: 0, 
              behavior: 'smooth'
            })}
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

      <Drawer
        placement="left"
        onClose={onClose}
        open={open}
        >
          <div style={{background: token.colorBgContainer, paddingTop: '10px', borderRadius: '10px'}}>
            <div  style={{ textAlign: 'center'}}>
              <Title 
                level={2} 
                style={{color: token.colorPrimary,margin: '0px'}}
              >
                Menu 
              </Title>
            </div>
            
            <Menu
              className={styles.drawerContainer}
              // style={{display: 'flex', flexDirection: 'column' ,justifyContent: 'center'}}
              // style={{background: token.colorBgElevated}}
              // style={{width: '200px', margin: '0 auto', background: token.colorBgElevated}}
              mode="inline"
              defaultSelectedKeys={['1']}
              items= {...menuOptions}
              onClick={handleCloseDrawer}
            />

          </div>

        <div>
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
      </Drawer>
    </Header>
  )
}