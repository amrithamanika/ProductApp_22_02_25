import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
const Navbar = () => {
  return (
    <div>
      <AppBar>
            <Toolbar>
                <Typography variant='h6'  component="div" sx={{ flexGrow: 1 }}>Productapp</Typography>
                <Button variant='contained'>Add</Button> &nbsp; &nbsp;
                <Button variant='contained'>View</Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar