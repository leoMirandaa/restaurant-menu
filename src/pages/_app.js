import { ConfigProvider } from 'antd'
import { magentaTheme, darkTheme } from '../../themes'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider
      theme={{
        ...magentaTheme
      }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  )
}
