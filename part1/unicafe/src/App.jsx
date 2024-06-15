import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad;

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

      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      {/* if the division results to "NaN" then render 0 */}
      <p>average {((good - bad) / total) || 0}</p>
      <p>positive {(good / total) || 0}</p>
    </div>
  )
}

export default App