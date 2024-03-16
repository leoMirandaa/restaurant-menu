import React, { useEffect, useState } from "react";

import { Menu, theme } from "antd";

import { menuOptions } from "@/utils/menuOptions";
import styles from "../../styles/sidebar.module.css";

export const MenuItems = ({ isDrawerOpen, setOpenDrawer }: any) => {
  const [currentSection, setCurrentSection] = useState(menuOptions[0].key);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { useToken } = theme;
  const { token } = useToken();
  useEffect(() => {
    const handleScroll = () => {
      // Find all sections in the main layout
      const sections = document.querySelectorAll("section");

      // Determine the current section in view
      let newCurrentSection = null;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 300 && rect.bottom >= 10) {
          // Adjust threshold as needed
          newCurrentSection = section.id;
        }
      });

      // Update the current section in state
      setCurrentSection(newCurrentSection);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Run only once on component mount

  const handleMenuClick = (e) => {
    isDrawerOpen && setOpenDrawer(false);
    setCurrentSection(e.key);
  };
  return (
    <>
      <Menu
        className={styles.menuContainer}
        mode="inline"
        selectedKeys={[currentSection]}
        onClick={handleMenuClick}
        items={menuOptions.map((option) => ({
          key: option.key,
          icon: option.icon,
          label: option.label,
        }))}
      />
    </>
  );
};
