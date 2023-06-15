import React from 'react';
import pjt from './pjt.png';
import {Link} from 'react-router-dom';


function Project() {
  return (
    <>
    <Link to='/intro'  className='btn'  >Back</Link>
    <div className='home'>
    

        <img src={pjt} alt='hii' className='img'></img>
        <div>
        <a href='https://master--zesty-sunshine-a0dec5.netlify.app/' className='btn1'>Password Generator</a>
        <br/><br/><a href='https://master--gilded-meringue-8a4a5d.netlify.app/' className='btn1'>Length Converter</a>
        <br/><br/><a href='https://main--lustrous-sorbet-1934d3.netlify.app/' className='btn1'>Real Time Character Counter</a>
        <br/><br/><a href='https://elegant-praline-c2f088.netlify.app/' className='btn1'>Gym Website</a>
        </div>

    </div>
    </>
  )
}

export default Project