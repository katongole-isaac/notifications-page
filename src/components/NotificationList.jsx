import NotificationCard from "./NotificationCard";

import { data } from "../data";

const NotificationList = () => {
  return (
    <>
      {data.map((notitfication) => (
        <NotificationCard key={notitfication.alt} {...notitfication} />
      ))}
    </>
  );
};

export default NotificationList;
