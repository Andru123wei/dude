import React from 'react';
import '../styles/home.css';
import icHome from '../images/iconHome.png';

const Home = () => {
    
  return (
    <div>
        <header className='header'>
            <input type='text' />
            <label>Dude</label>
            <button>
                <img src={icHome} ></img>
            </button>


        </header>


    </div>
  )
}

export default Home