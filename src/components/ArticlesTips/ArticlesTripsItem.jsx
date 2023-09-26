import React from "react";
import { Link } from "react-router-dom";

function ArticlesTripsItem(props) {
    const {linkImg, date, title, des, connect, altImg} = props
  return (
    <div className="articles-tips-item animation-jump">
      <img
        src={linkImg}
        alt={altImg}
      />
      <div className="best-value-trips-item-content p-4">
        <strong className="d-block">{date}</strong>
        <strong className="mt-2 d-block">
          {title}
        </strong>
        <p className="mt-3">
          {des}
        </p>
        <p className="mt-5 text-secondary">
          <Link to={connect} className="text-secondary">
            Read More
            <i className="fa-solid fa-chevron-right" />
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ArticlesTripsItem