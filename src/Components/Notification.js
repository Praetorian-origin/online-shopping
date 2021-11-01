import React from "react";
import styles from './Notification.module.css'
const Notification = ({ message, isError }) => {
  if (message === null) {
    return null;
  }
  if (isError) {
    return <div className={styles.error}>{message}</div>;
  } else {
    return <div className={styles.success}>{message}</div>;
  }
};

export default Notification;
