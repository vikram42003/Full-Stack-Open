const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content partsArray={parts} />
      <Total exercises={parts} />
    </div>
  );
};

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = ({ partsArray }) => {
  return (
    <div>
      <Part part={partsArray[0]} />
      <Part part={partsArray[1]} />
      <Part part={partsArray[2]} />
    </div>
  );
};

const Part = ({ part: { name, exercises } }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Total = ({ exercises }) => {
  let total = exercises.reduce(
    (accumulator, currentPart) => accumulator + currentPart.exercises,
    0
  );
  return <p>Number of exercises {total}</p>;
};

export default App;
