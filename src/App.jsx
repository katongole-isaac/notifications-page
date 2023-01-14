import React from "react";
import "./app.css";
import NotificationCard from "./components/NotificationCard";
import NotificationHeader from "./components/NotificationHeader";
import NotificationList from "./components/NotificationList";
import data from "./data.toml";

export default function () {
  return (
    <>
      <div className="container">
        <NotificationHeader />
        <div className="notification-list">
          <NotificationList />
        </div>
      </div>
    </>
  );
}
