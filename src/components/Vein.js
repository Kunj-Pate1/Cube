import React from 'react';
import './Vein.css';
import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt';

function Vein({id,vein}) {
  return (
    <div className='vein'>
        <h4>
            <span className="hash"><SwipeRightAltIcon/></span>Class A
        </h4>
    </div>
  );
}

export default Vein;