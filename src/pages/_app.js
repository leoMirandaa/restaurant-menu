import { useEffect, useState } from "react";
import { ConfigProvider } from "antd";
import { magentaTheme, darkTheme } from "../../themes";
import { ShopLayout } from "../../components/layouts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  // const [theme, setTheme] = useState({...magentaTheme})
  const [themeSelected, setThemeSelected] = useState({ ...magentaTheme });

  // useEffect(() => {
  //   console.log('** 1st useEffect')

  //   const themeSelected = localStorage.getItem('theme')

  //   if( themeSelected || localStorage.setItem('theme', JSON.stringify('magentaTheme'))){
  //     setThemeSelected(themeSelected)
  //   }

  //   if( themeSelected == 'magentaTheme'){
  //     console.log('*** mangeta')
  //     setThemeSelected({...magentaTheme})
  //   }
  //   else if(themeSelected == 'darkTheme')  {
  //     console.log('*** dark')
  //     setThemeSelected({...darkTheme})
  //   }
  // },[])

  // useEffect( () => {

  //   if( themeSelected == 'magentaTheme'){
  //     console.log('*** mangeta')
  //     setThemeSelected({...magentaTheme})
  //   }
  //   else if(themeSelected == 'darkTheme')  {
  //     console.log('*** dark')
  //     setThemeSelected({...darkTheme})
  //   }
  // },[themeSelected])

  return (
    <ConfigProvider theme={{ ...themeSelected }}>
      <Component
        {...pageProps}
        themeSelected={themeSelected}
        setThemeSelected={setThemeSelected}
      />
    </ConfigProvider>
  );
}
