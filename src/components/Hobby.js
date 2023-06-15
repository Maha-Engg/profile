import React from 'react'
import cooking from './cooking.png';
import {Link} from 'react-router-dom';

function Hobby() {
  return (
    <>
    <Link to='/about'  className='btn'  >Back</Link>
    <div className='home'>
    
    <h1 className='h3'> Cooking</h1>
    <img src={cooking} alt='hii' className='img'></img>

    </div>
    </>
  )
}

export default Hobby