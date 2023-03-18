import React from 'react'

function Carousel({carouselPictures}) {
    
  return (
    <div className='carousel'>
       <img src={carouselPictures[0]} alt="" />
    </div>
  )
}

export default Carousel