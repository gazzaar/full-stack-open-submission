import phonebook from '../services/phonebook';
const Persons = ({ filteredArray }) => {
  const handleRmove = (name, id) => {
    if (window.confirm(`DO you sure u want to delte ${name}`)) {
      return phonebook.remove(id);
    }
  };
  return (
    <>
      {filteredArray.map((person) => {
        return (
          <h3 key={person.id}>
            {person.name} {person.number}
            <button onClick={() => handleRmove(person.name, person.id)}>
              delete
            </button>
          </h3>
        );
      })}
    </>
  );
};
export default Persons;
