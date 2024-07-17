const Persons = ({ personsToDisplay, handleDeletePerson }) => {
  return (
    <div>
      {personsToDisplay.map((person) => {
        return (
          <div key={person.id}>
            {person.name} {person.number} &nbsp;&nbsp;
            <button type="button" onClick={() => handleDeletePerson(person.id, person.name)}>
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};


export default Persons;

/*
Copying db.json incase I accidently delete all contacts
{
  "persons": [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": "1"
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": "2"
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": "3"
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": "4"
    },
    {
      "id": "f485",
      "name": "Zagreus",
      "number": "4242574"
    },
    {
      "id": "ac9b",
      "name": "Another",
      "number": "1234567890"
    }
  ]
}
*/
