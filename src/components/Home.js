import React from 'react'
import Myimage from './Myimage.png';

function Home() {
  return (
    <>
    <div className='home'>
        <div className='home-content'>
        <h1>Hi, I' m <span >Mahalakshmi </span><br/> </h1>
            <h2> Full Stack Developer ( Fresher )</h2>
            <p> 
            I'm a quick learner who thrives in fast-paced environments. 
               <br/> With my highly organized and detail-oriented approach, 
                 <br/><br/>I'm dedicated to delivering high-quality work and exceeding expectations. 
                 <br/><br/>I'm always looking for new challenges <br/>and opportunities to 
                 grow both personally and professionally.
            </p>
            <a href='/' className='btn'> Hire Me </a>
        </div>
        <div className='home-img'>
            <div className='glowing-circle'>
              

                <div className='image'>
                    <img src={Myimage} alt='hii'/>

                </div>

            </div>
        </div>

    </div>
    </>
  )
}

export default Home