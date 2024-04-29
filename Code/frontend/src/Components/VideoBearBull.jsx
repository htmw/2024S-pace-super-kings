import React from 'react'
import bearbull from '../assets/bear-bull video.mp4'
import './videobearbull.css';

const VideoBearBull = () => {
  return (
    <>
    
<video className='video' autoPlay loop muted style={{}}>
<source src={bearbull} type="video/mp4" />
</video>
    </>
  )
}

export default VideoBearBull