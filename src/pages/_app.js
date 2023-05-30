import { useState } from 'react';
import { ConfigProvider } from 'antd'
import { magentaTheme } from '../../themes'
import { ShopLayout } from '../../components/layouts'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState({...magentaTheme})
  
  return (
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
        <Component {...pageProps} />
      </ShopLayout>
    </ConfigProvider>
  )
}
