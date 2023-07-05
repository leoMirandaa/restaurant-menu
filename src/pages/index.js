import { ShopLayout } from "../components/layouts";
import { magentaTheme, darkTheme } from "../../themes";
import Dishes from "./dishes";
import HomePage from "./home";
import { HomeLayout } from "@/components/layouts/HomeLayout";

export default function Home({ themeSelected, setThemeSelected }) {
  // const [theme, setTheme] = useState({...magentaTheme})

  return (
    <>
      {/* <ShopLayout
        title={"Magenta-Kitchen - Menu"}
        pageDescription={"The most delicious food at the corner"}
        themeSelected={themeSelected}
        setThemeSelected={setThemeSelected}
      > */}
      <HomePage />
      {/* </ShopLayout> */}
    </>
    // <>
    //   <ShopLayout
    //     title={"Magenta-Kitchen - Menu"}
    //     pageDescription={"The most delicious food at the corner"}
    //     themeSelected={themeSelected}
    //     setThemeSelected={setThemeSelected}
    //   >
    //     <Dishes />
    //   </ShopLayout>
    // </>
  );
}
