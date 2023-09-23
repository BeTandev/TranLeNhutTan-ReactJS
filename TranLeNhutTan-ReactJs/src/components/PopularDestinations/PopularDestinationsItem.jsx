import React from "react";
import { Link } from "react-router-dom";

function PopularDestinationsItem(props) {
    const {connect, linkImg, altImg, destination} = props
  return (
    <Link to={connect} className="popular-item animation-jump bg-transparent">
      <img
        src={linkImg}
        alt={altImg}
      />
      <p className="text-white bg-transparent">{destination}</p>
    </Link>
  );
}

export default PopularDestinationsItem