import React from 'react'
import './ChatHeader.css'
import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import { Avatar } from '@mui/material';
import FE from '../img/FE.png'
import SE from '../img/SE.png'
import TE from '../img/TE.png'
import BE from '../img/BE.png'


function ChatHeader() {
  return (
    <div className="chatheader">
        
            <h3>
            <span className="hash"><SwipeRightAltIcon/>
            Class A</span>
            </h3>
            <Avatar src={FE}/>
            <Avatar src={SE}/>
            <Avatar src={TE}/>
            <Avatar src={BE}/>

            <HomeIcon />
            <PeopleAltIcon />
            <InfoIcon />
            <SettingsIcon />

        
    </div>
  )
}

export default ChatHeader