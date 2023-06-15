import React from 'react'
import weakness from './weakness.png';
import {Link} from 'react-router-dom'

function Weakness() {
  return (
    <>
    <Link to='/about'  className='btn'  >Back</Link>
    <div className='home'>
    
    <img src={weakness} alt='hii' className='img'></img>
    <h1 className='h3'> I Don't Know</h1>

        </div>
        </>
  )
}

export default Weakness