import { ConfigProvider } from 'antd'
import { magentaTheme, darkTheme } from '../../themes'
import '@/styles/globals.css'
import { ShopLayout } from '../../components/layouts'

export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider
      theme={{
        ...magentaTheme
        // ...darkTheme,
      }}
    >
      {/* <ShopLayout> */}
      <Component {...pageProps} />
      {/* </ShopLayout> */}
    </ConfigProvider>
  )
}
