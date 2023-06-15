import React from 'react'
import thankyou from './thankyou.png';
import {Link} from 'react-router-dom'
import { AiOutlinePhone,AiOutlineGithub,AiOutlineLinkedin,AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
   <>
   <Link to='/intro'  className='btn'  >Back</Link>
   <div className='home'>
   <img src={thankyou} alt='hii' className='img'></img>
   <div>
    <h3 className='h3'> <AiOutlinePhone     className='icon'/>contact       - 6385658025</h3>
    <h3 className='h3'> <AiOutlineMail className='icon'/>  - mahacm98@gmail.com</h3>
    <a href='https://www.linkedin.com/in/mahacm' className='icon'> < AiOutlineLinkedin/> </a>
    <br/><a href='https://github.com/Maha-Engg ' className='icon'> < AiOutlineGithub/> </a>
    
   </div>

   </div>
   </>
  )
}

export default Contact