import { useState, useEffect } from 'react';
import Search from './components/Search';
import NewPeople from './components/NewPeople';
import Persons from './components/Persons';
import phonebook from './services/phonebook';
import Notification from './components/Notification';
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [phone, setPhone] = useState('');
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState(null);

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
      phonebook.create({ name: newName, number: phone }).then((response) => {
        setPersons([
          ...persons,
          {
            name: response.data.name,
            number: response.data.number,
            id: response.data.id,
          },
        ]);
        setNewName('');
        setPhone('');
        setMessage(`Added ${response.data.name}`);
      });
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
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

  const handleRmove = (name, id) => {
    if (window.confirm(`DO you sure u want to delte ${name}`)) {
      phonebook
        .remove(id)
        .then((resolve) => {
          setPersons(persons.filter((person) => person.id !== resolve.data.id));
          setMessage(`Deleted ${resolve.data.name}`);
          setTimeout(() => {
            setMessage(null);
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    phonebook.getAll().then((resolve) => {
      setPersons(resolve.data);
    });
  }, []);

  return (
    <div>
      <h2 className='heading-primary'>Phonebook</h2>
      <Search onChange={handleFilter} />
      <Notification message={message} />
      <h2 className='heading-secondary'>Add a new</h2>
      <NewPeople
        newName={newName}
        onChangeName={handleNewName}
        phone={phone}
        onChangePhone={handlePhone}
        onClick={handleSubmitName}
      />
      <h2 className='heading-secondary'>Numbers</h2>
      <Persons onClick={handleRmove} filteredArray={filteredPersons} />
    </div>
  );
};

export default App;
