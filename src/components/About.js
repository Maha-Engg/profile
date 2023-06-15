import React from 'react'
import {Link} from 'react-router-dom'

function About() {
  return (
    <>
    <Link to='/intro'  className='btn'  >Back</Link>
    <h1 className='h1'> About Me</h1>
    <div className='home'>
    <Link to='/Education'  className=' btn'  >Education</Link>
    <Link to='/Challange'  className=' btn'  >challenges</Link>
    <Link to='/Experience'  className=' btn'  >Experience</Link>
    <Link to='/Strength'  className=' btn'  >Strength</Link>
    <Link to='/Weakness'  className=' btn'  >Weakness</Link>
    <Link to='/Hobby'  className=' btn'  >Hobby</Link>
    
    </div>

    </>
  )
}

export default About