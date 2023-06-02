import { useEffect, useState } from 'react';
import { ConfigProvider } from 'antd'
import { magentaTheme, darkTheme } from '../../themes'
import { ShopLayout } from '../../components/layouts'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  // const [theme, setTheme] = useState({...magentaTheme})
  // const [themeSelected, setThemeSelected] = useState('magentaTheme')

  useEffect(() => {
    // const theme = localStorage.getItem('theme')
    // setThemeSelected(theme)
    // if( theme || localStorage.setItem('theme', JSON.stringify({name: 'magentaTheme'}))){
    //   setThemeSelected(theme.name)
    // }

    // localStorage.setItem('theme', JSON.stringify({name: 'magentaTheme'}))

    // setTheme(localStorage.getItem('theme') || 'darkTheme')
    
    // if( themew.name == 'magentaTheme'){
    //   console.log('-----')
    // }
    // // localStorage.setItem('theme', JSON.stringify({name: 'magentaTheme'}))
    // console.log('*** ', themew)
  },[])

  // useEffect(() => {
  //   console.log('--- ', themeSelected)
  // }, [themeSelected])
  

  
  return (
    <ConfigProvider
      theme={
        {...magentaTheme}
        // {...darkTheme}
        // ...themeSelected
      }
    >
          <Component {...pageProps} />
    </ConfigProvider>
  )
}
