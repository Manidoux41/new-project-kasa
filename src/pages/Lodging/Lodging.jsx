import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import Collapse from "../../components/Collapse/Collapse";
import InfosAppart from "../../components/InfosAppart/InfosAppart";
import NotFound from "../NotFound/NotFound";

function Lodging({ apparts }) {
  const { logementId } = useParams();
  const appart = apparts.find((appart) => appart.id === logementId);

  return appart ? (
    <div className="lodging">
      <Carousel carouselPictures={appart.pictures} />
      <InfosAppart appart={appart} />
      <div className="otherInfo">
        <Collapse key={appart.id} title="Description" content={appart.description} />
        <Collapse
          title="Equipements"
          content={appart.equipments.map((equi, index) => {
            return <li key={index}>{equi}</li>;
          })}
        />
      </div>
    </div>
  ) : (
    <Navigate to="/error" replace={<NotFound />} />
  );
}

export default Lodging;
