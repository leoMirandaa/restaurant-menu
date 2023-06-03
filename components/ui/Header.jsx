import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Layout, Badge, theme, Typography, Button, Drawer, Menu, Dropdown, Space } from "antd"
const { Title } = Typography;
const { Header } = Layout;
import { IconChefHat, IconShoppingCart, IconMoonFilled, IconSunFilled, IconMenu2 } from '@tabler/icons-react';
import { DownOutlined, SmileOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import { magentaTheme, darkTheme } from '../../themes';
import { menuOptions } from '@/utils/menuOptions';

import { useCartStore } from '@/store/cartStore';

import styles from './menu.module.css'

export const HeaderComponent = ({ setTheme, handleClick }) => {
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
      localStorage.setItem('theme', JSON.stringify('darkTheme'))    
    } else {
      localStorage.setItem('theme', JSON.stringify('magentaTheme'))    
    }
    setIsDark(!isDark)
    // !isDark ? setTheme({...darkTheme}) : setTheme({...magentaTheme})
  }


  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  
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
        zIndex: 2,
        opacity: .9,
        marginBottom: '20px'
      }}
    >
      <nav 
        style={{
          display: 'flex', 
          width: '100%', 
          justifyContent: 'space-between',
 
          maxWidth: '1400px', 
          margin: '0 auto'
        }}
        >
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
              type='primary' 
              style={{marginRight: '20px'}}
              onClick={() => router.push('/admin')}
            >
              Admin
            </Button>
          {/* <div style={{display: 'flex',alignItems: 'center', marginRight: '20px'}}>
            <Button 
              icon={ isDark ? <IconSunFilled /> :<IconMoonFilled />} 
              type='text' 
              shape='circle' 
              onClick={handleDarkMode}
            />
          </div> */}

          {/* <Button onClick={decreaseCart}>-1</Button>
          <Button onClick={increaseCart}>+1</Button>
          <Button onClick={resetCart}>Reset</Button> */}
          <Link href='/checkout' style={{display: 'flex',alignItems: 'center'}}>
            <Badge count={cart}>
              <IconShoppingCart />
            </Badge>

          </Link>
        </div>
      </nav>
    </Header>
  )
}