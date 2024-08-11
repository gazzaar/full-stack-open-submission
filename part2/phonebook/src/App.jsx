import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [phone, setPhone] = useState('');
  const [filter, setFilter] = useState('');

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };
  const handleSubmitName = (event) => {
    event.preventDefault();
    if (!handleExistingName(newName)) {
      if (!newName) {
        alert('please enter the name');
        return;
      }
      setPersons([
        ...persons,
        { name: newName, number: phone, id: persons.length + 1 },
      ]);
    }
    setNewName('');
    setPhone('');
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleExistingName = (value) => {
    const exist = persons.some((person) => {
      if (person.name.trim() == value.trim()) {
        alert(`${value} is already added to phonebook`);
        return true;
      }
    });
    return exist;
  };

  const handleFilter = (event) => {
    setFilter(event.target.value.toLowerCase());
  };

  const filteredPersons = persons.filter((person) => {
    const modifiedName = person.name.toLowerCase().replace(/\s+/g, '');
    return modifiedName.includes(filter);
  });
  console.log(filteredPersons);

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          {' '}
          filter shown with: <input type='text' onChange={handleFilter} />
        </div>
        <h2>add a new</h2>
      </form>
      <form>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          phone number: <input value={phone} onChange={handlePhone} />
        </div>
        <div>
          <button type='submit' onClick={handleSubmitName}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((person) => {
        return (
          <h3 key={person.name}>
            {person.name} {person.number}
          </h3>
        );
      })}
    </div>
  );
};

export default App;
