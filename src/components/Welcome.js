import React from 'react'
import start from './start.png';
import {Link} from 'react-router-dom';


function Welcome() {
  return (
    <>
    <div className='home'>
    <img src={start}  className='img' alt='hii'/>
    <Link to='/intro'  className='btn'  >Welcome</Link>
    </div>
    </>
  )
}

export default Welcome