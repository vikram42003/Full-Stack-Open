import { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <th>{text}</th>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  return (
    <div>
      <h2>Statistics</h2>
      {total ? (
        <table>
          <tbody>
            <StatisticLine text={"good"} value={good}/>
            <StatisticLine text={"neutral"} value={neutral}/>
            <StatisticLine text={"bad"} value={bad}/>
            <StatisticLine text={"total"} value={total}/>
            {/* Display average and positive percentage, handling NaN cases by defaulting to 0 */}
            <StatisticLine text={"average"} value={(good - bad) / total || 0}/>
            <StatisticLine text={"positive"} value={((good / total) * 100) + " %"}/>
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleGood() {
    setGood((g) => g + 1);
  }

  function handleNeutral() {
    setNeutral((n) => n + 1);
  }

  function handleBad() {
    setBad((b) => b + 1);
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={handleGood} text={"good"}/>
      <Button onClick={handleNeutral} text={"neutral"}/>
      <Button onClick={handleBad} text={"bad"}/>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
