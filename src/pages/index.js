"use client"
import { useEffect, useState } from 'react';
import { Button, ConfigProvider } from 'antd'

import { ShopLayout } from '../../components/layouts';
import { magentaTheme, darkTheme } from '../../themes'
import Dishes from './dishes';

export default function Home({themeSelected ,setThemeSelected}) {
  // const [theme, setTheme] = useState({...magentaTheme})

  

  return (
    <>
      <ShopLayout 
        title={'Magenta-Cloud - Home'}
        pageDescription={'The most elegant food at the corner'}
        themeSelected={themeSelected} setThemeSelected={setThemeSelected}
      >
        <Dishes />
      </ShopLayout>
    </>
  )
}
