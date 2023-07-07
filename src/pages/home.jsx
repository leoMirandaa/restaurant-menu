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

const HomePage = () => {
  const router = useRouter();

  return (
    <HomeLayout
      title={"Magenta-Kitchen - Home"}
      pageDescription={"The most elegant food at the corner"}
    >
      <main className={styles.mainContainer}>
        <img
          className={styles.video}
          // src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          // src="https://images.pexels.com/photos/3499599/pexels-photo-3499599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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

        <section className={styles.restaurantInformation}>
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

        <div className={styles.titleContainer}>
          <div className={styles.title}>Where every flavor tells a story</div>
          <Button
            type="primary"
            size="large"
            onClick={() => router.push("/dishes")}
          >
            VIEW OUR MENU
          </Button>
        </div>
      </main>
    </HomeLayout>
  );
};

export default HomePage;
