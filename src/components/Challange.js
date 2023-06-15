import React from 'react'
import thankyou from './chal.png';
import {Link} from 'react-router-dom'

function Chanllage() {
  return (
   <>
   <Link to='/about'  className='btn'  >Back</Link>
   <div className='home'>
   <img src={thankyou} alt='hii' className='img'></img>
   <div>
    <h2 className='h1'> Hlo Reader<br/><br/> I have Completed BE(CSE) degree at 2018.<br/>
    Software Work is  My Carrier and also My dream job<br/>
    but, I haven't enter in the IT field.<br/> After 5 Years,  i Learnd Full Stack by My friend support.
     <br/>now I am ready to get my carrier job.  after carrier gap Get a job is biggest challange.
     
     </h2>
   </div>
   </div>
   
   </>
  )
}

export default Chanllage