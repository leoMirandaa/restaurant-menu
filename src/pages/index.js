import { useState } from 'react';
import { ConfigProvider } from 'antd'

import { ShopLayout } from '../../components/layouts';
import { magentaTheme } from '../../themes'

export default function Home() {
  const [theme, setTheme] = useState({...magentaTheme})

  return (
    <>
    <ConfigProvider
      theme={{
        ...theme
      }}
    >
      <ShopLayout 
        title={'Magenta-Cloud - Home'}
        pageDescription={'The most elegant food at the corner'}
        setTheme={setTheme}
      >
      </ShopLayout>
      </ConfigProvider>
    </>
  )
}
