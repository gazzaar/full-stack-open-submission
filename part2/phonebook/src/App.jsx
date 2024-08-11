import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');
  const handleNewName = (event) => {
    setNewName(event.target.value);
  };
  const handleSubmitName = (event) => {
    event.preventDefault();
    if (!handleExistingName(newName)) {
      setPersons([...persons, { name: newName }]);
    }
    setNewName('');
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type='submit' onClick={handleSubmitName}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return <h3 key={person.name}>{person.name}</h3>;
      })}
    </div>
  );
};

export default App;
