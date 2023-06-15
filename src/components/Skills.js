import React from 'react'
import {Link} from 'react-router-dom'
function Skills() {
  return (
    <>
    <Link to='/intro'  className='btn'  >Back</Link>
    <div className='home'>
              
        <ul>
           <li className='btn'> HTML</li>
           <li className='btn'> CSS</li></ul>
           <ul>
           <li className='btn'> JAVASCRIPT</li></ul>
           <ul>
           <li className='btn'> BOOTSTRAP</li>
           <li className='btn'> REACT</li></ul>
           <ul>
           <li className='btn'> NODE.JS</li>
           <li className='btn'> EXPRESS.JS</li></ul>
           <ul>
           <li className='btn'> MONGODB</li></ul>
           <ul>
           <li className='btn'> BASIC-UI/UX</li>
        </ul>
        <div></div>

    </div>
    </>
  )
}

export default Skills