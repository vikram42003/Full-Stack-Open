import { useState, useEffect } from "react";

import contactsService from "./services/contacts";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    contactsService.getAll().then((data) => setPersons(data));
  }, []);

  const personsToDisplay = persons.filter((person) =>
    person.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter query={query} setQuery={setQuery} />

      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />

      <h3>Numbers</h3>
      <Persons personsToDisplay={personsToDisplay} />
    </div>
  );
};

export default App;
