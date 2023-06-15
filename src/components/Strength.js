import React from 'react'
import strength from './strength.png';
import {Link} from 'react-router-dom'

function Strength() {
  return (
    <>
    <Link to='/about'  className='btn'  >Back</Link>
    <div className='home'>
    <img src={strength} alt='hii' className='img'></img>
    <div>
        <h1 className='h2'> Hard Work</h1><br/>
        <h1 className='h2'> Self Motivated</h1><br/>
        <h1 className='h2'> Self Learner</h1>
    </div>
        </div>
        </>
  )
}

export default Strength