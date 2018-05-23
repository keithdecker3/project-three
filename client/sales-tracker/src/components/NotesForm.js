import React from 'react'

import {Row, Input, Button} from 'react-materialize'

const NotesForm = (props) => {
  return (
    <div className='form-container'>
      <div>
        <Row>
          <Input s={6}  label="Account Name" />
          <Input s={12} type='textarea' label='Notes' />
        </Row>  
      </div>
      <div>  
        <Button waves='light'>Submit</Button>  
      </div>   
    </div>
  )
}

export default NotesForm