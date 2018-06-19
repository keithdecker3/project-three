import React from 'react'

import {Row, Input, Button} from 'react-materialize'
import Geocode from "react-geocode"
import AccountMap from './AccountMap'

require('dotenv').config()

class NotesForm extends React.Component {
  state = {
    date: '',
    notes: '',
    beer: '',
    packageType: '',
    quantity: '',
    showMap: false,
    lat: '',
    lng: '',
  }

  handleChange = (event) => {
    const name = event.target.name
    this.setState({[name]: event.target.value})
  }


  formSubmit = (event) => {
    event.preventDefault()
    const url = 'http://localhost:3000/api/v1/notes'
    const postData = {
      account: this.props.account,
      date: this.state.date,
      notes: this.state.notes,
      beer: this.state.beer,
      package_type: this.state.packageType,
      quantity: this.state.quantity,
    }
    console.log(postData)
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData),
    })
    .then(response => response.json())
    this.setState({
      date: '',
      notes: '',
      beer: '',
      packageType: '',
      quantity: ''
    })
  }


  geoCode = () => {
    this.setState({showMap: false})
    Geocode.setApiKey(process.env.MAP_KEY)
    Geocode.enableDebug()
    fetch(`https://beer-rep-tracker.herokuapp.com/api/v1/accounts/${this.props.account}`)
    .then(response => response.json())
    .then(response => {
      this.setState({mapAddress: response.address})
    })
    // .then(console.log(this.state.mapAddress))
    .then(response => Geocode.fromAddress(this.state.mapAddress)
    .then(
      response => {
        const { lat, lng } = response.results[0].geometry.location
        // console.log(lat, lng)
        this.setState({
          lat: lat,
          lng: lng,
          showMap: true
        })
        // console.log(this.state)
      },
      error => {
        console.error(error)
      }
    )) 
  }

  render() {
    return (
      <div className='form-container'>
        <h3>Add Notes</h3>
        <form onSubmit={this.formSubmit} id='notes-form'>
          <div>
            <Row>
              <Input s={6} label="Account Name" value={this.props.account} />
              <Input s={4} label='Date' type='date' name='date' value={this.state.date} onChange={this.handleChange} />
              <Input s={12} type='textarea' label='Notes' name='notes' value={this.state.notes} onChange={this.handleChange} />
              <Input s={6} label='Beer' name='beer' value={this.state.beer} onChange={this.handleChange} />
              <Input s={4} type='select' label="Package Type" name='packageType' value={this.state.packageType} onChange={this.handleChange} >
                <option value='1/2 BBL'>1/2 BBL</option>
                <option value='1/6 BBL'>1/6 BBL</option>
                <option value='Case'>Case</option>
              </Input>
              <Input s={2} label='QTY' type='number' name='quantity' value={this.state.quantity} onChange={this.handleChange} />
            </Row>  
          </div>
          <div>  
            <Button id='note-submit' waves='light' type='submit' form='notes-form'>Submit</Button> 
            <Button id='view-map' waves='light' type='submit' form='account-form' onClick={this.geoCode}>View Map</Button> 
          </div> 
          { this.state.showMap ? <AccountMap lat={this.state.lat} lng={this.state.lng} /> : '' }
        </form>  
      </div>
    )
  }
}

export default NotesForm