import React from 'react';
import './Sidebar.css';
import AddIcon from '@mui/icons-material/Add';
import Vein from './Vein.js';
import SchoolIcon from '@mui/icons-material/School';
import { Avatar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

function Sidebar() {
  return (
    <div className="sidebar">
      {/* <div className="sidebar-top">
        <h3>Veins</h3>
        <AddIcon className='add-vein' />
      </div> */}

      <div className="sidebar-veins">
        <div className="vein-header">
          <div className="vein-name">
            <h4>Veins</h4>
          </div>
            <AddIcon className='add-vein' />
        </div>
        <div className="vein-list">
          <Vein />
          <Vein />
          <Vein />
          <Vein />
        </div>
      </div>
      <div className="sidebar-year">
        <SchoolIcon className='year' fontSize='large'/>
        <div className="year-input">
          <h3>FE</h3>
        </div>
      </div>
      <div className="profile">
        <Avatar src='https://i.pinimg.com/236x/ee/b9/3d/eeb93dd730e12d78f46d19de34432182.jpg'/>
        <div className="profile-info">
          <h3>Display Name</h3>
        </div>
          <div className="exit">
              <LogoutIcon />
          </div>
        </div>
    </div>
  )
}

export default Sidebar