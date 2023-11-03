import React, { useState } from 'react';

const options = ["rock", "paper", "scissors"];

const RockPaperScissors = () => {
  const [human, setHuman] = useState(null);
  const [computer, setComputer] = useState(null);
  const [result, setResult] = useState(null);
  const [humanWin, setHumanWin] = useState(0);
  const [computerWin, setComputerWin] = useState(0);

  const randomItemByComputer = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    setComputer(options[randomIndex]);
  };

  const handleHumanOption = (value) => {
    setHuman(value);
    randomItemByComputer();
    Winner(value);
  };

  const Winner = (humanChoice) => {
    if (humanChoice === computer) {
      setResult("Draw");
    } else if (
      (humanChoice === "rock" && computer === "scissors") ||
      (humanChoice === "paper" && computer === "rock") ||
      (humanChoice === "scissors" && computer === "paper")
    ) {
      setResult("You Won");
      setHumanWin((prevHumanWin) => prevHumanWin + 1);
      setComputerWin((prevComputerWin) => prevComputerWin);
    } else {
      setResult("Computer Won");
      setHumanWin((prevHumanWin) => prevHumanWin);
      setComputerWin((prevComputerWin) => prevComputerWin + 1);
    }
  };

  return (
    <div className='RockPaperScissors'>
      <h1>Rock,Paper,Scissors Game</h1>
      <div className='options'>
        {options.map((option) => (
          <button key={option} onClick={() => handleHumanOption(option)}>
            {option}
          </button>
        ))}
      </div>

      {human && (
        <div className='result'>
          <p>You: {human}</p>
          <p>Computer: {computer}</p>
          <p>Result: {result}</p>
        </div>
      )}

      <div className='total-score'>
        <p>You won: {humanWin} times</p>
        <p>Computer won: {computerWin} times</p>
      </div>
    </div>
  );
};


export default RockPaperScissors;