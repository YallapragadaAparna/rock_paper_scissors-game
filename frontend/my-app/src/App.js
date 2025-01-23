/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import React from 'react';
import RockPaperScissors from './rock_paper_scissors/rock_paper_scissors';  // Adjust the path if necessary

function App() {
  return (
    <div className="App">
      <RockPaperScissors />
    </div>
  );
}

export default App;


