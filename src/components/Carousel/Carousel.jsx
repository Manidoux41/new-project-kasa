import React, { useState } from 'react'
import leftArrow from '../../assets/images/svg/left-arrow.svg'
import rightArrow from '../../assets/images/svg/right-arrow.svg'

function Carousel({carouselPictures}) {
  
  const [indexPic, setIndexPic] = useState(0)

  const incrementImage = () => {
    setIndexPic((indexPic + 1) % carouselPictures.length);
  }

  const decrementImage = () => {
    setIndexPic(
      (indexPic + carouselPictures.length - 1) % carouselPictures.length
    )
  };

  return (
    <div className='carousel'>
       <img src={leftArrow} alt="left" className={(carouselPictures.length != 1) ? "left-arrow" : "arrow-invisible"} onClick={decrementImage}/>
       <img src={carouselPictures[indexPic]} alt="/" />
       <p className='quantity'>{indexPic + 1} / {carouselPictures.length}</p>
       <img src={rightArrow} alt="right" className={(carouselPictures.length != 1) ? "right-arrow" : "arrow-invisible"} onClick={incrementImage}/>
    </div>
  )
}

export default Carousel