const Persons = ({ filteredArray, onClick }) => {
  return (
    <>
      {filteredArray.map((person) => {
        return (
          <h3 key={person.id} className='heading-tertiary'>
            {person.name}: {person.number}
            <button
              className='btn'
              onClick={() => onClick(person.name, person.id)}
            >
              Delete
            </button>
          </h3>
        );
      })}
    </>
  );
};
export default Persons;
