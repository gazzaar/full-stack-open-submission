const Persons = ({ filteredArray, onClick }) => {
  return (
    <>
      {filteredArray.map((person) => {
        return (
          <h3 key={person.id}>
            {person.name} {person.number}
            <button onClick={() => onClick(person.name, person.id)}>
              delete
            </button>
          </h3>
        );
      })}
    </>
  );
};
export default Persons;
