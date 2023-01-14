import "./styles/nav-header.styles.css";
const NotificationHeader = () => {
  return (
    <>
      <div className="nav-header">
        <div className="nav-count">
          <span>Notifications</span>
          <span>3</span>
        </div>
        <span>Mark all as read</span>
      </div>
    </>
  );
};

export default NotificationHeader;
