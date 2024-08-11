const NewPeople = ({
  newName,
  onChangeName,
  phone,
  onChangePhone,
  onClick,
}) => {
  return (
    <form>
      <div>
        name: <input value={newName} onChange={onChangeName} />
      </div>
      <div>
        phone number: <input value={phone} onChange={onChangePhone} />
      </div>
      <div>
        <button type='submit' onClick={onClick}>
          add
        </button>
      </div>
    </form>
  );
};

export default NewPeople;
