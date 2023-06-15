import React from 'react'
import deg from './deg.png';
import {Link} from 'react-router-dom'

function Education() {
  return (
    <>
    <Link to='/about'  className='btn'  >Back</Link>
    <div className='home'>
    <img src={deg} alt='hii' className='img'></img>
        <div>
            <h1 className='h3'>  Green's Technology </h1><br/>
            <h3 className='h3'> Full Stack Developer </h3>
            <a  href='https://www.linkedin.com/posts/mahacm_activity-7068903985281187840-Hv4z?utm_source=share&utm_medium=member_desktop' className='h3'>My Certificate</a>
            <br/><br/><br/>
        <h1 className='h3'>Anna University</h1><br/>
        <h3 className='h3'>BE (CSE) -2018</h3>
        <h3 className='h3'>CGPA-6.31</h3>
        <br/><br/><br/>
            <h1 className='h3'> TamilNadu State Board</h1><br/>
            <h3 className='h3'> HSC-2014  ( 71% )</h3><br/>
            <h3 className='h3'>SSLC-2012 ( 81% )</h3>
        </div>
        </div>
        </>
  )
}

export default Education