import React, { Component } from 'react';
import './App.css';

import AccountForm from './components/AccountForm'
import NotesForm from './components/NotesForm'
import Header from './components/Header'
import AccountSelect from './components/AccountSelect'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AccountSelect />
      </div>
    );
  }
}

export default App;
