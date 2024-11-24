import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <p className={styles["footer-text"]}>© 2024 BHIVE Workspace. All rights reserved.</p>
      <p className={styles["footer-text"]}>Powered by BHIVE</p>
    </div>
  );
};

export default Footer;
