const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        courseNames={[part1, part2, part3]}
        exercises={[exercises1, exercises2, exercises3]}
      />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  );
};

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = ({ courseNames, exercises }) => {
  return (
    <div>
      <Part courseName={courseNames[0]} exercise={exercises[0]} />
      <Part courseName={courseNames[1]} exercise={exercises[1]} />
      <Part courseName={courseNames[2]} exercise={exercises[2]} />
    </div>
  );
};

const Part = ({courseName, exercise}) => {
  return <p>{courseName} {exercise}</p>;
};

const Total = ({ exercises }) => {
  return (
    <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
  );
};

export default App;
