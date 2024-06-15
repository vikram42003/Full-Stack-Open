import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  return (
    <div>
      <h2>Statistics</h2>
      {total ? (
        <>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {total}</p>
          {/* Display average and positive percentage, handling NaN cases by defaulting to 0 */}
          <p>average {(good - bad) / total || 0}</p>
          <p>positive {((good / total) * 100).toFixed(1)} %</p>
        </>
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

      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
