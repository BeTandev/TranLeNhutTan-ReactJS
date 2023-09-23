import React, { useEffect, useRef, useState } from "react";

function Slidebar() {
  return (
    <section id="slidebar">
      <p className="close-tab" id="close-tab">
        <i className="fa-solid fa-x" />
      </p>
      <div className="wrap-menu-slidebar">
        <p>
          <a>Home</a>
        </p>
        <p>
          <a>Tours</a>
        </p>
        <p>
          <a>Booking</a>
        </p>
        <p>
          <a>Destinations</a>
        </p>
        <p>
          <a>Pages</a>
        </p>
        <p>
          <a>Blog</a>
        </p>
        <p>
          <a>Shortcodes</a>
        </p>
        <p>
          <a>Shop</a>
        </p>
      </div>
      <div className="wrap-tours-slidebar">
        <div className="tour-slidebar-item first-tour-slidebar-item">
          <strong className="price-tour-slidebar">$3,900</strong>
          <strong className="title-tour-slidebar">Swiss Alps Trip</strong>
          <p className="vote-tour-slidebar">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-regular fa-star" />
          </p>
        </div>
        <div className="tour-slidebar-item mt-3 second-tour-slidebar-item">
          <strong className="price-tour-slidebar">$3,900</strong>
          <strong className="title-tour-slidebar">Swiss Alps Trip</strong>
          <p className="vote-tour-slidebar">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-regular fa-star" />
          </p>
        </div>
      </div>
      <div className="wrap-icon-slidebar">
        <i className="fa-brands fa-square-facebook" />
        <i className="fa-brands fa-twitter" />
        <i className="fa-brands fa-youtube" />
        <i className="fa-brands fa-pinterest" />
        <i className="fa-brands fa-instagram" />
      </div>
    </section>
  );
}

export default Slidebar;
