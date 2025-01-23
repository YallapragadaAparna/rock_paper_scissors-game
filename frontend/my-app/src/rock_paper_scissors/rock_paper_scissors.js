import React, { useState } from 'react';
import "./rock_paper_scissors.css";

const RockPaperScissors = () => {
  const options = ["rock", "paper", "scissors"];
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [userWins, setUserWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    setComputerChoice(computerChoice);
    
    determineWinner(choice, computerChoice);
  };

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      setResult("It's a draw!");
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      setResult("You won!");
      setUserWins(userWins + 1);
    } else {
      setResult("You lost!");
      setComputerWins(computerWins + 1);
    }
  };

  return (
    <div className="App">
      <h1>Rock, Paper, Scissors Game</h1>
      <div className="choices">
        <button onClick={() => handleUserChoice('rock')}>Rock</button>
        <button onClick={() => handleUserChoice('paper')}>Paper</button>
        <button onClick={() => handleUserChoice('scissors')}>Scissors</button>
      </div>
      {userChoice && computerChoice && (
        <div className="result">
          <p>Your choice: {userChoice}</p>
          <p>Computer's choice: {computerChoice}</p>
          <p>{result}</p>
        </div>
      )}
      <div className="score">
        <p>You won: {userWins} times</p>
        <p>Computer won: {computerWins} times</p>
      </div>
    </div>
  );
};

export default RockPaperScissors;
