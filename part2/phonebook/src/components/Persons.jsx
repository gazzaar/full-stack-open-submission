const Persons = ({ filteredArray }) => {
  return filteredArray.map((person) => {
    return (
      <h3 key={person.name}>
        {person.name} {person.number}
      </h3>
    );
  });
};
export default Persons;
