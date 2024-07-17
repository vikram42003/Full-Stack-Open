import { useState } from "react";
import contactsService from "../services/contacts";

const PersonForm = ({ persons, setPersons, showNotification }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleAddPerson = event => {
    event.preventDefault();

    if (newName === "" || newNumber === "") {
      showNotification("failure", "Name or Number field cannot be empty");
      return;
    }

    if (persons.some(p => p.name === newName && p.number === newNumber)) {
      showNotification("failure", `${newName} is already added to the phonebook with the same number`);
      return;
    } else if (persons.some(p => p.name === newName)) {
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one ?`)) {
        const contactCopy = { ...persons.find(p => p.name === newName) };
        contactCopy.number = newNumber;
        contactsService
          .update(contactCopy.id, contactCopy)
          .then(() => {
            showNotification("success", `Successfully updated "${newName}"`);
            setPersons(persons.map(p => (p.name !== newName ? p : contactCopy)));
            setNewName("");
            setNewNumber("");
          })
          .catch(error => {
            console.log(error);
            showNotification("failure", `Failed to update "${newName}" - Reason: ${error.response.data.error}`);
          });
      }
    } else {
      contactsService
        .create({ name: newName, number: newNumber })
        .then(data => {
          showNotification("success", `Successfully added "${newName}"`);
          setPersons(p => [...p, data]);
          setNewName("");
          setNewNumber("");
        })
        .catch(error => {
          console.log(error);
          showNotification("failure", `Failed to add "${newName}" - Reason: ${error.response.data.error}`);
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleAddPerson}>
        <div>
          name: <input type="text" value={newName} onChange={e => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input type="text" value={newNumber} onChange={e => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
