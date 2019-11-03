import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
function Browser() {
    window.location.href="https://reactjs.org"
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link
          className="App-link"
         onClick={Browser}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </header>
    </div>
  );
}

export default connect(
    //mapStateToProps,
    //mapDispatchToProps

)(App) ;
