import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0));
  const handleRandom = () => {
    const randomNum = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNum);
  };
  const handleVotes = () => {
    setVote((prevVote) => {
      const newVote = [...prevVote];
      newVote[selected] += 1;
      return newVote;
    });
  };

  let index;
  const handleMostVotes = () => {
    let biggestVote = 0;
    vote.forEach((item, i) => {
      if (item > biggestVote) {
        biggestVote = item;
        index = i;
      }
    });
    return biggestVote;
  };
  handleMostVotes();

  return (
    <>
      <h1>Anecdotes of the day</h1>
      <div>{anecdotes[selected]}</div>
      <button onClick={handleVotes}>vote</button>
      <button onClick={handleRandom}>next anecdotes</button>
      <h2>Anecdotes with most votes</h2>
      <div>{anecdotes[index]}</div>
    </>
  );
};

export default App;
