import React from 'react'
import dudeN from '../images/dudeN.png';
import icD from '../images/icon.png';
import '../styles/main.css';

export const Main = () => {
  return (
   
    <div className="mega-div">

        <div>
        <button><img className='icon' src={icD} /></button>
        </div>

        <div>
        <img className='dude' src={dudeN} />
        </div>

  </div>
  );
}