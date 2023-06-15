import React from 'react'
import {Link} from 'react-router-dom'

function Resume() {
  return (
    <>
    <Link to='/intro'  className='btn'  >Back</Link>
    <div className='home'>
    <a href="./Mahalakshmi-Fresher(1)(1).pdf" download className="resume btn"> Download Resume</a>
    
    
      </div>
    
    </>
  )
}

export default Resume