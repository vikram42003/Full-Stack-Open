import { useState, useEffect } from "react";
import contactsService from "./services/contacts";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

/* BUGS
  - each notification should last its own 5 seconds, but if you do something like -
    add a number wait 3 seconds and then click delete then the notification for delete only 
    lasts 2 seconds beacuse the setTimeout from add event sets the state of reqStatus and reqStatusTect to null 
  
*/

const App = () => {
  const [persons, setPersons] = useState([]);
  const [query, setQuery] = useState("");
  const [reqStatus, setReqStatus] = useState(null);
  const [reqStatusText, setReqStatusText] = useState(null);

  useEffect(() => {
    contactsService.getAll().then((data) => setPersons(data));
  }, []);

  const handleDeletePerson = (id, name) => {
    if (!window.confirm(`Delete ${name} ?`)) return;
    contactsService
      .deleteContact(id)
      .then(() => {
        showNotification("success", `Successfully deleted ${name}`);
        setPersons(persons.filter((p) => p.id !== id));
      })
      .catch((error) => {
        console.log(error);
        showNotification(
          "failure",
          `Failed to delete "${name}"`
        );
      });
  };

  const showNotification = (status, text) => {
    setReqStatus(status);
    setReqStatusText(text);

    setTimeout(() => {
      setReqStatus(null);
      setReqStatusText(null);
    }, 5000);
  };

  const personsToDisplay = persons.filter((person) =>
    person.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification reqStatus={reqStatus} reqStatusText={reqStatusText} />

      <Filter query={query} setQuery={setQuery} />

      <h3>Add a new</h3>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        showNotification={showNotification}
      />

      <h3>Numbers</h3>
      <Persons
        personsToDisplay={personsToDisplay}
        handleDeletePerson={handleDeletePerson}
      />
    </div>
  );
};

export default App;
