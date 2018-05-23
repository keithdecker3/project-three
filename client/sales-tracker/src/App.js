import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AccountForm from './components/AccountForm'
import NotesForm from './components/NotesForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AccountForm />
      </div>
    );
  }
}

export default App;
