import { useEffect } from "react";
import { useRouter } from "next/router";

import { animate } from "motion";
import { Button } from "antd";
import {
  AimOutlined,
  ClockCircleOutlined,
  PhoneOutlined,
  MailOutlined,
  ReadOutlined,
} from "@ant-design/icons";

import { HomeLayout } from "@/components/layouts/HomeLayout";
import styles from "../styles/home.module.css";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    animate(".homeContentAnimation", { opacity: [0, 1] }, { duration: 0.9 });
  }, []);

  return (
    <HomeLayout
      title={"Magenta-Kitchen - Home"}
      pageDescription={"Restaurant digital menu to show dishes"}
    >
      <main className={styles.mainContainer}>
        <img
          className={styles.img}
          src="https://images.pexels.com/photos/1510692/pexels-photo-1510692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image of restaurant"
        />

        <div className={"homeContentAnimation"}>
          <section className={styles.restaurantInformation}>
            <div className={styles.informationContainer}>
              <div>
                <AimOutlined /> Main St, Delicious City, London 9578, USA
              </div>
              <div>
                <ClockCircleOutlined /> Daily: 8:00 am to 11:00 pm
              </div>
            </div>
            <div className={styles.informationContainer}>
              <div>
                <PhoneOutlined /> <span>+1 234 43 55</span>
              </div>
              <div>
                <MailOutlined /> magentastore@gmail.com
              </div>
            </div>
          </section>

          <section className={styles.titleContainer}>
            <div className={styles.title}>Where every flavor tells a story</div>
            <Button
              type="primary"
              size="large"
              onClick={() => router.push("/dishes")}
            >
              <ReadOutlined />
              VIEW OUR MENU
            </Button>
          </section>
        </div>
      </main>
    </HomeLayout>
  );
};

export default HomePage;
