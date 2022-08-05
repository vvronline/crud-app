import { AppBar, Toolbar ,styled} from '@mui/material'
import React from 'react'
import {NavLink} from 'react-router-dom'

const Tabs =styled(NavLink)`
font-size:20px;
margin-right:20px;
color:inherit;
text-decoration:none;

`

function NavBar() {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Tabs to='/all' >All Reacords</Tabs>
                <Tabs to='/addrecord'>Create Reacord</Tabs>
              
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar