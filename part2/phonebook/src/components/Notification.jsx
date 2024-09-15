const Notification = ({ message }) => {
  if (message === null) return null;

  return (
    <>
      <p className='notification'>{message}</p>
    </>
  );
};

export default Notification;
