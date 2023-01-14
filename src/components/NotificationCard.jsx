import "./styles/notitication-card.styles.css";
const NotificationCard = ({
  userName,
  time,
  srcUrl,
  alt,
  bolder_comment_text,
  comment,
  commentMsg,
  commentImage,
  read,
}) => {
  return (
    <>
      <div className={`card-wrapper ${!read && "card-bg-lightblue"}`}>
        <div className="notify-card">
          <div className="card-image-wrapper">
            <img src={srcUrl} alt={alt} />
          </div>
          <div className="card-text-section">
            <div className="card-text-wrapper">
              <div className="card-inner-text-wrapper">
                <div>
                  <span className="user-name"> {userName}</span> &nbsp;
                  <span className="comment">{comment} </span> &nbsp;
                  <span className="comment-text-bold">
                    {bolder_comment_text}
                  </span>
                </div>
                {!read && (
                  <div className="card-red-dot" style={{ zIndex: 1 }}></div>
                )}
              </div>
              <span className="card-time-display">{time}</span>
            </div>

            {commentImage && (
              <div className="card-inner-image-wrapper">
                <img src={commentImage} alt={alt} />
              </div>
            )}
          </div>
        </div>
        {commentMsg && <div className="comment-msg">{commentMsg} </div>}
      </div>
    </>
  );
};

export default NotificationCard;
