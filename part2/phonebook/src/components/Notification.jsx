const Notification = ({ message }) => {
  if (message === null) return null;

  const succesStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  };

  return (
    <>
      <p style={succesStyle}>{message}</p>
    </>
  );
};

export default Notification;
