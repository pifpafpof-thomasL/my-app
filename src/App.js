import logo from './logo.svg';
import './App.css';
import React from 'react';
import HelloMessage from './Components/HelloMessage'
import TodoApp from './Components/TodoApp'
import Toggle from './Components/Toggle'
import Timer from './Components/Timer'


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
        <div className="App-frame">
          <HelloMessage name="Thomas" famille="Lechevalier" />
          <HelloMessage name="Thierry" color="blue" famille="Dupont" />
          <HelloMessage name="Thierry" color="red" />
        </div>
        <div className="App-frame">
          <Timer />
          <Timer delay="5000"/>
          <br/>
          <Toggle />
        </div>
        <div className="App-frame">
          <TodoApp />
        </div>

      </header>
    </div>
  );
}

export default App;
