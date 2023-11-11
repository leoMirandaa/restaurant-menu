import { useState, useEffect } from "react";

import { Button } from "antd";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import styles from "../../styles/scrollToTop.module.css";

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  return (
    <>
      {showTopBtn && (
        <Button
          type="primary"
          size="large"
          onClick={goToTop}
          className={styles.button}
          icon={<VerticalAlignTopOutlined />}
        />
      )}
    </>
  );
};
