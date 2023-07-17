import { useEffect } from "react";
import { useRouter } from "next/router";
import { HomeLayout } from "@/components/layouts/HomeLayout";
import { Button } from "antd";
import {
  AimOutlined,
  ClockCircleOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

import styles from "../styles/home.module.css";
import { animate } from "motion";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    animate(".test", { opacity: [0, 1] }, { duration: 0.9 });
  }, []);

  return (
    <HomeLayout
      title={"Magenta-Kitchen - Home"}
      pageDescription={"The most elegant food at the corner"}
    >
      <main className={styles.mainContainer}>
        <img
          className={styles.video}
          src="https://images.pexels.com/photos/1510692/pexels-photo-1510692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          style={{ height: "80vh" }}
        />
        {/* <video
          className={styles.video}
          src="./cooking.mp4"
          typeof="video/mp4"
          autoPlay
          loop
          muted
        /> */}

        <section className={`${styles.restaurantInformation} test`}>
          <div className={styles.informationContainer}>
            <div>
              <AimOutlined /> Restaurant St, Delicious City, London 9578, USA
            </div>
            <div>
              <ClockCircleOutlined /> Daily: 8:00 am to 11:00 pm
            </div>
          </div>
          <div className={styles.informationContainer}>
            <div>
              <PhoneOutlined /> +1 234 43 55
            </div>
            <div>
              <MailOutlined /> magentastore@gmail.com
            </div>
          </div>{" "}
        </section>

        <section className={`${styles.titleContainer} test`}>
          <div className={styles.title}>Where every flavor tells a story</div>
          <Button
            type="primary"
            size="large"
            onClick={() => router.push("/dishes")}
          >
            VIEW OUR MENU
          </Button>
        </section>
      </main>
    </HomeLayout>
  );
};

export default HomePage;
