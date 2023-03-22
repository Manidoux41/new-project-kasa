import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import InfosAppart from "../../components/InfosAppart/InfosAppart";
// import SlideShow from '../../components/Carousel/SlideShow';
import NotFound from "../NotFound/NotFound";

function Lodging({ apparts }) {
  const { logementId } = useParams();
  const appart = apparts.find((appart) => appart.id === logementId);

  return appart ? (
    <div className="lodging">
      <Carousel carouselPictures={appart.pictures} />
      <InfosAppart appart={appart} />
    </div>
  ) : (
    <Navigate to="/error" replace={<NotFound />} />
  );
}

export default Lodging;
