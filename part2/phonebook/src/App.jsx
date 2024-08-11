import { useState } from 'react';
import Search from './components/Search';
import NewPeople from './components/NewPeople';
import Persons from './components/Persons';

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

  return (
    <div>
      <h2>Phonebook</h2>
      <Search onChange={handleFilter} />
      <h2>add a new</h2>
      <NewPeople
        newName={newName}
        onChangeName={handleNewName}
        phone={phone}
        onChangePhone={handlePhone}
        onClick={handleSubmitName}
      />
      <h2>Numbers</h2>
      <Persons filteredArray={filteredPersons} />
    </div>
  );
};

export default App;
