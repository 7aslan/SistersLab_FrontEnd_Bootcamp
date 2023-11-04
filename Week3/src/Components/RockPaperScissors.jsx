import React, { useState } from 'react'


const options = ["rock","paper","scissors"];

const RockPaperScissors = () => {

  const [humanChoice, setHumanChoice] = useState(null);
  const [computerChoice, setComputerChoice ] = useState(null);
  const [result, setResult] = useState(null);
  const [humanWin, setHumanWin] = useState(0);
  const [computerWin, setComputerWin] = useState(0);

  const handleChoice = (choice) =>{
    const randomIndex = Math.floor(Math.random() * options.length);
    const computerChoice = options[randomIndex]
    setHumanChoice(choice)
    setComputerChoice(computerChoice);
    winner(choice, computerChoice);
    
  };

  const winner = (user, computer) =>{
    if (user === computer){
      setResult("Draw")
    } else if(
      (user==="rock" && computer==="scissors")||
      (user==="paper" && computer==="rock")||
      (user==="scissors" && computer==="paper")
    ){
      setResult("You won");
      setHumanWin(humanWin+1);
    }else{
      setResult("Computer Won");
      setComputerWin(computerWin+1);
    }
  };




  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <div>
        <button onClick={()=> handleChoice("rock")}>Rock</button>
        <button onClick={()=> handleChoice("paper")}>Paper</button>
        <button onClick={()=> handleChoice("scissors")}>Scissors</button>
      </div>
      {humanChoice && computerChoice && result && (
        <div>
          <p>You : {humanChoice}</p>
          <p>Computer : {computerChoice}</p>
          <p>Result : {result}</p>
        </div>
      )}
      <div>
        <p>You Won: {humanWin} times.</p>
        <p>Computer Won: {computerWin} times. </p>
      </div>

    </div>
  );
};

export default RockPaperScissors;