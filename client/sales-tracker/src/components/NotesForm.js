import React from 'react'

import {Row, Input, Button} from 'react-materialize'

class NotesForm extends React.Component {
  state = {
    date: '',
    notes: '',
    beer: '',
    packageType: '',
    quantity: ''
  }

  handleChange = (event) => {
    const name = event.target.name
    this.setState({[name]: event.target.value})
  }


  formSubmit = (event) => {
    event.preventDefault()
    // console.log(this.state)
    const postData = {
      account: this.props.account,
      notes: this.state.notes,
      beer: this.state.beer,
      package_type: this.state.packageType,
      quantity: this.state.quantity
    }
    console.log(postData)
  }

  render() {
    return (
      <div className='form-container'>
        <form onSubmit={this.formSubmit} id='notes-form'>
          <div>
            <Row>
              <Input s={6} label="Account Name" value={this.props.account} />
              <Input s={4} label='Date' type='date' value={this.state.date} onChange={this.handleChange} />
              <Input s={12} type='textarea' label='Notes' value={this.state.notes} onChange={this.handleChange} />
              <Input s={6} label='Beer' value={this.state.beer} onChange={this.state.handleChange} />
              <Input s={4} type='select' label="Package Type" value={this.state.packageType} onChange={this.handleChange} >
                <option value='1'>1/2 BBL</option>
                <option value='2'>1/6 BBL</option>
                <option value='3'>Case</option>
              </Input>
              <Input s={2} label='QTY' type='number' value={this.state.quantity} onChange={this.handleChange} />
            </Row>  
          </div>
          <div>  
            <Button waves='light' type='submit' form='notes-form'>Submit</Button>  
          </div> 
        </form>  
      </div>
    )
  }
}

export default NotesForm