import React from "react";
import { Link } from "react-router-dom";

function BestValueTripsItem(props) {
    const {connect, linkImg, altImg, prevPrice, price, title, des, reviewers, date} = props

  return (
    <Link to={connect} className="best-value-trips-item animation-jump">
      <img
        src={linkImg}
        alt={altImg}
      />
      <p className="py-1 px-3 best-value-trips-price-item">{prevPrice && <del className="mr-2">${prevPrice}</del>}${price}</p>
      <div className="best-value-trips-item-content p-3">
        <strong>{title}</strong>
        <p className="mt-2">{des}</p>
        <div className="d-flex justify-content-between best-value-trips-item-infor">
          <span className="d-flex align-middle">
            <i className="fa-solid fa-star" style={{ color: "#01ec6b" }} />
            <i className="fa-solid fa-star" style={{ color: "#01ec6b" }} />
            <i className="fa-solid fa-star" style={{ color: "#01ec6b" }} />
            <i className="fa-solid fa-star" style={{ color: "#01ec6b" }} />
            <i className="fa-regular fa-star" style={{ color: "#cccccc" }} />
            <span> {reviewers} reviewers</span>
          </span>
          <span className="best-value-trips-item-infor-right">
            <i className="fa-regular fa-clock" /> {date} days
          </span>
        </div>
      </div>
    </Link>
  );
}

export default BestValueTripsItem;
