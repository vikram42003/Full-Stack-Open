import { useState } from "react";
import contactsService from "../services/contacts";

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleAddPerson = (event) => {
    event.preventDefault();

    if (newName === "" || newNumber === "") {
      window.alert("Name or Number field cannot be empty");
      return;
    }

    if (persons.some((p) => p.name === newName && p.number === newNumber)) {
      alert(
        `${newName} is already added to the phonebook with the same number`
      );
      return;
    } else if (persons.some((p) => p.name === newName)) {
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one ?`
        )
      ) {
        const contactCopy = { ...persons.find((p) => p.name === newName) };
        contactCopy.number = newNumber;
        contactsService.update(contactCopy.id, contactCopy).then(() => {
          setPersons(
            persons.map((p) => (p.name !== newName ? p : contactCopy))
          );
          setNewName("");
          setNewNumber("");
        });
      }
    } else {
      contactsService
        .create({ name: newName, number: newNumber })
        .then((data) => {
          setPersons((p) => [...p, data]);
          setNewName("");
          setNewNumber("");
        });
    }
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
