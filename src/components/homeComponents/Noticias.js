import React from 'react';
import noti from '../../data/arraynoti';
import '../stylesHome/noticias.css';

const Noticias = () => {
  return (
    <div className='noticias'>

      <ul className='lista-noti'>
        {noti.map((item, idx)=>(

          <li key={idx} className='lista-lista'> 
          <div className='cada-noti'>
            <div className='owner'>
            {item.owner}

            </div>
            <div className='desc'>
              {item.descrip}

            </div>
            <img src={item.img} alt={idx} />
          </div>
          </li>


        ))}
      </ul>
         
        </div>
  )
}

export default Noticias