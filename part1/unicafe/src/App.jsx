import { useState } from 'react';
const Button = ({ name, onClick }) => {
  return <button onClick={onClick}>{name}</button>;
};
const Feedback = (props) => {
  return (
    <>
      <h2>give feedback</h2>
      <Button name='good' onClick={props.goodFeedback} />
      <Button name='neutral' onClick={props.neutralFeedback} />
      <Button name='bad' onClick={props.badFeedback} />
    </>
  );
};
const Statistics = (props) => {
  const { good, neutral, bad } = props;
  return (
    <>
      <h2>statistics</h2>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodFeedback = () => {
    setGood(good + 1);
  };

  const handleBadFeedback = () => {
    setBad(bad + 1);
  };
  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1);
  };

  return (
    <div>
      <Feedback
        goodFeedback={handleGoodFeedback}
        badFeedback={handleBadFeedback}
        neutralFeedback={handleNeutralFeedback}
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
