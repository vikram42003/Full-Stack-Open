const Persons = ({ personsToDisplay }) => {
  return (
    <div>
      {personsToDisplay.map((person) => {
        return (
          <div key={person.id}>
            {person.name} {person.number}
          </div>
        );
      })}
    </div>
  );
};

export default Persons;
