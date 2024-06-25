import { useState } from "react";
import contactsService from "../services/contacts";

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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

    contactsService
      .create({ name: newName, number: newNumber })
      .then((data) => {
        setPersons((p) => [...p, data]);
        setNewName("");
        setNewNumber("");
      });
  };

  return (
    <div>
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
  );
};

export default PersonForm;
