const NewPeople = ({
  newName,
  onChangeName,
  phone,
  onChangePhone,
  onClick,
}) => {
  return (
    <form className='form'>
      <div className='input-container'>
        <label htmlFor='name'>Name:</label>
        <input id='name' value={newName} onChange={onChangeName} />
      </div>
      <div className='input-container'>
        <label htmlFor='phone'>Phone Number:</label>
        <input value={phone} id='phone' onChange={onChangePhone} />
      </div>
      <div className='input-container'>
        <button className='btn btn-add' type='submit' onClick={onClick}>
          Add
        </button>
      </div>
    </form>
  );
};

export default NewPeople;
