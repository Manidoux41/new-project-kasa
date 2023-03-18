import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Carousel from '../../components/Carousel/Carousel';
import NotFound from '../NotFound/NotFound';

function Lodging({apparts}) {
  const {logementId} = useParams()
  const appart = apparts.find((appart) => appart.id === logementId)
  const {
    id,
    title,
    location,
    pictures,
    tags,
    host,
    rating,
    equipments,
    description,
  } = appart || {};

  return appart ? (
    <div className='lodging'>
      <Carousel carouselPictures={pictures} />
    </div>
  ) : (
    <Navigate to='/error' replace={<NotFound />} />
  )
}

export default Lodging