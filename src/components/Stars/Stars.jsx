import star from "../../assets/images/svg/orangestar.svg";
import greystar from "../../assets/images/svg/greystar.svg";

function Stars({ rating }) {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="stars">
      {numbers.map((data, index) =>
        rating >= data ? (
          <img key={index} src={star} alt="" />
        ) : (
          <img key={index} src={greystar} alt="" />
        )
      )}
    </div>
  );
}

export default Stars;
