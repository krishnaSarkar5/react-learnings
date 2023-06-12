import React from 'react'
import './ButtonPad.css'
import { Button } from '@mui/material'

const ButtonPad = () => {
  return (
    <Button variant="contained" className="buttonPad">
      <span className="buttonValue">5</span>
    </Button>
    
  )
}

export default ButtonPad