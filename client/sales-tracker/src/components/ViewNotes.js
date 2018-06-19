import React from 'react'

class ViewNotes extends React.Component {

  state = {
    notes: []
  }

  componentDidMount() {
    fetch('https://beer-rep-tracker.herokuapp.com/api/v1/notes')
    .then(response => response.json())
    .then(data => this.setState({notes: data}))
    .then(date => console.log(this.state.notes))
  }

  sliceDate = (date) => {
    const splitDate = date.split('')
    const sliceDate = splitDate.slice(0,10)
    return sliceDate.join('')
  }

  capitalize = (word) => {
    let splitWord = word.split('')
    splitWord[0] = splitWord[0].toUpperCase()
    return splitWord.join('')
  }

  render() {
    return (
      this.state.notes.map(entry => {
        return (
          <div class='notes-container'>
            <h2>{this.capitalize(entry.account)} - {this.sliceDate(entry.date)}</h2>
            <h3>Notes:</h3>
            <p>{entry.notes}</p>
            <h3>Presell:</h3>
            <p> {entry.quantity} {entry.package_type} {entry.beer} </p>
          </div>
        )
      })
    ) 
  }
}

export default ViewNotes