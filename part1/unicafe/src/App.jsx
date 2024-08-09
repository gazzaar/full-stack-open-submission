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

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  );
};

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
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={all} />
          <StatisticLine text='average' value={average ? average : 0} />
          <StatisticLine
            text='positive'
            value={positivePercentage ? ` ${positivePercentage} % ` : 0}
          />
        </tbody>
      </table>
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
