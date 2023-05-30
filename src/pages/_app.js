import { useState } from 'react';
import { ConfigProvider } from 'antd'
import { magentaTheme, darkTheme } from '../../themes'
import '@/styles/globals.css'
import { ShopLayout } from '../../components/layouts'

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState({...magentaTheme})

  return (
    <ConfigProvider
      theme={{
        ...theme
        // ...darkTheme,
      }}
    >
      {/* <ShopLayout> */}
      <ShopLayout 
        title={'Magenta-Cloud - Home'}
        pageDescription={'The most elegant food at the corner'}
        setTheme={setTheme}
      >
        <Component {...pageProps} />
      </ShopLayout>
      {/* </ShopLayout> */}
    </ConfigProvider>
  )
}
