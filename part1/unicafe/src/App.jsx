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

const StaticLine = ({ text, value }) => (
  <p>
    {text}: {value}
  </p>
);
const Statistics = (props) => {
  const { good, neutral, bad } = props;
  let all = good + neutral + bad;
  let calculate = good * 1 + neutral * 0 + bad * -1;
  let average = calculate / all;
  let positivePercentage = (good / all) * 100;

  if (good == 0 && neutral == 0 && bad == 0) {
    return (
      <>
        <h2>statistics</h2>
        <StaticLine text='No feedback given' />
      </>
    );
  }

  return (
    <>
      <h2>statistics</h2>
      <StaticLine text='good' value={good} />
      <StaticLine text='neutral' value={neutral} />
      <StaticLine text='bad' value={bad} />
      <StaticLine text='all' value={all} />
      <StaticLine text='average' value={average ? average : 0} />
      <StaticLine
        text='positive'
        value={positivePercentage ? ` ${positivePercentage} % ` : 0}
      />
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
