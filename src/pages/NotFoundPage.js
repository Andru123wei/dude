import React from 'react'
import pnf from '../images/404.jpg'
import '../styles/NotFoundPage.css'

const NotFoundPage = () => {
  return (
    <div className='div-pnf'>
      <img className='pnf' src={pnf} />
    </div>
  );
};

export default NotFoundPage;