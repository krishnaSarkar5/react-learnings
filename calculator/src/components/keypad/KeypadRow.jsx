import React from 'react'
import './KeypadRow.css'
import ButtonPad from '../button/ButtonPad'

const KeypadRow = () => {
  return (
    <>
    <div className="keypadRow">
        <div className="keypadCol">
            <ButtonPad />
        </div>

        <div className="keypadCol">
            <ButtonPad />
        </div>

        <div className="keypadCol">
            <ButtonPad />
        </div>

        <div className="keypadCol">
            <ButtonPad />
        </div>

        <div className="keypadCol">
            <ButtonPad />
        </div>
    </div>    
</>
  )
}

export default KeypadRow