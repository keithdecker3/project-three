import React, { Component } from 'react';
import './App.css';


import Header from './components/Header'
import AccountSelect from './components/AccountSelect'

class App extends Component {
  state = {
    accounts: []
  }

  componentDidMount() {
    fetch('https://beer-rep-tracker.herokuapp.com/api/v1/accounts')
    .then(response => response.json())
    .then(data => this.setState({accounts: data}))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AccountSelect accounts={this.state.accounts} />

      </div>
    )
  }
}

export default App;
