import logo from './logo.svg';
import './App.css';
import React from 'react';


class HelloMessage extends React.Component {
  render() {  // afficher moi, se déclenche si changement de props, ou de state/état interne des data du composant
    return (  // return du JSX
      <div>
        Salut {this.props.name} {this.props.famille}
      </div>
    );
  }
}


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
        <br/>
        <HelloMessage name="Thomas" />

      </header>
    </div>
  );
}

export default App;
