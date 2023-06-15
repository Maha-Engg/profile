import React from 'react'
import name from './name.jpeg'
import {Link} from 'react-router-dom'



function Header() {
 
 
 
    return (
    
    <>
    <div className='header'>
        <img src={name} alt='hii'/>
        <nav className='navbar'>
           <Link to='/'  className='active'>Home</Link>
           <Link to='/resume'  className='active'  >Resume</Link>
           <Link to='/skills'  className='active'  >Skills</Link>
           <Link to='/project'  className='active'  >Project</Link>
           <Link to='/about'  className='active'  >About</Link>
           <Link to='/contact'  className='active'  >Contact</Link>
           
           
           

        </nav>

    </div>
    </>
    
    )
}

export default Header;