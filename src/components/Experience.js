import React from 'react'
import chall from './chall.png';
import {Link} from 'react-router-dom'

function Experience() {
  return (
    <>
    <Link to='/about'  className='btn'  >Back</Link>
    <div className='home'> 

    <img src={chall} alt='hii' className='img'></img>
    <h1 className='h2'> Sorry No Experience</h1>

    </div>
    </>
  )
}

export default Experience