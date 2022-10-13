import React from 'react'
import './detailform.css'
import Logo from '../img/L2.png'

function detailform() {
  return (
      <div className="detail-sidebar" >
      <div className="detail-logo">
          <img src={Logo} alt="logo" />
      </div>
    </div>
  )
}

export default detailform