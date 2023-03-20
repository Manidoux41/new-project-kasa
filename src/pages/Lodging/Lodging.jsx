import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Carousel from '../../components/Carousel/Carousel';
// import SlideShow from '../../components/Carousel/SlideShow';
import NotFound from '../NotFound/NotFound';

function Lodging({apparts}) {
  const {logementId} = useParams()
  const appart = apparts.find((appart) => appart.id === logementId)
 
  return appart ? (
    <div className='lodging'>
      <Carousel carouselPictures={appart.pictures} />
      {/* <SlideShow pics={appart.pictures} /> */}
      <div className="ident">
        <h3>{appart.title}</h3>
        <p>{appart.location}</p>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  ) : (
    <Navigate to='/error' replace={<NotFound />} />
  )
}

export default Lodging