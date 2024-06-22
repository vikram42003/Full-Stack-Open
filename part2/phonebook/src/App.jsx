import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [query, setQuery] = useState("");

  const personsToDisplay = persons.filter((person) =>
    person.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleAddPerson = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      window.alert(`${newName} is already added to the phonebook`);
      return;
    }

    if (newNumber === "") {
      window.alert("Number field cannot be empty");
      return;
    }

    setPersons((p) => [...p, { name: newName, number: newNumber, id: persons.length + 1 }]);
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter shown with{" "}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div>
        <h2>Add a new</h2>
        <form onSubmit={handleAddPerson}>
          <div>
            name:{" "}
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div>
            number:{" "}
            <input
              type="text"
              value={newNumber}
              onChange={(e) => setNewNumber(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>

      <div>
        <h2>Numbers</h2>
        <div>
          {personsToDisplay.map((person) => {
            return (
              <div key={person.id}>
                {person.name} {person.number}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
