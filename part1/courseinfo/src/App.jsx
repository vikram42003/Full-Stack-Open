const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content partsArray={[part1, part2, part3]} />
      <Total exercises={[part1.exercises, part2.exercises, part3.exercises]} />
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

const Part = ({ part: {name, exercises} }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Total = ({ exercises }) => {
  return (
    <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
  );
};

export default App;
