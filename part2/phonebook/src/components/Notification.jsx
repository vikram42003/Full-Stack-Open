const Notification = ({ reqStatus, reqStatusText }) => {
  if (reqStatus === null || reqStatusText == null) return;

  const color = reqStatus === "success" ? "green" : "red";

  const notificationStyle = {
    color: color,
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  return (
    <div style={notificationStyle}>
      {reqStatusText}
    </div>
  )
};

export default Notification;
