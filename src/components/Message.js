import { Avatar } from '@mui/material'
import React from 'react'
import './Message.css'

function Message() {
  return (
    <div className="message">
        <Avatar />
        <div className="info">
            <h4>Display Name
                <span className='timestamp'>
                    XX,XXX xx/xx/xx XX:XX
                </span>
            </h4>
            <p>Sample message</p>
        </div>
    </div>
  )
}

export default Message