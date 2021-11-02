import React from "react";
import styles from './Notification.module.css'
import { useSelector } from "react-redux";


const Notification = () => {
  const notificationState = useSelector((state) => state.notification);

  if (!notificationState) {
    return null;
  }
  if (notificationState.isError) {
    return <div className={styles.error}>{notificationState.message}</div>;
  } else {
    return <div className={styles.success}>{notificationState.message}</div>;
  }
};

export default Notification;
