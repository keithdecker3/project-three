import React from 'react'

import {Row, Input, Button} from 'react-materialize'

class NotesForm extends React.Component {


  render() {
    return (
      <div className='form-container'>
        <div>
          <Row>
            <Input s={6} label="Account Name" value={this.props.account} />
            <Input s={4} label='Date' type='date' />
            <Input s={12} type='textarea' label='Notes' />
            <Input s={6} label='Beer' />
            <Input s={4} type='select' label="Package Type">
              <option value='1'>1/2 BBL</option>
              <option value='2'>1/6 BBL</option>
              <option value='3'>Case</option>
            </Input>
            <Input s={2} label='QTY' type='number' />
          </Row>  
        </div>
        <div>  
          <Button waves='light'>Submit</Button>  
        </div>   
      </div>
    )
  }
}

export default NotesForm