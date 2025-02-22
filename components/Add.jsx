import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <TextField variant ="outlined" label="name"/><br></br>&nbsp;&nbsp;<br></br>
        <TextField variant ="outlined" label="price"/><br></br>&nbsp;&nbsp;<br></br>
        <TextField variant ="outlined" label="stock"/><br></br>&nbsp;&nbsp;<br></br>
        <TextField variant ="outlined" label="description"/><br></br>&nbsp;&nbsp;<br></br>
        <TextField variant ="outlined" label="image"/><br></br><br></br>&nbsp;&nbsp;
        <Button variant="contained">add</Button>

    </div>
  )
}

export default Add