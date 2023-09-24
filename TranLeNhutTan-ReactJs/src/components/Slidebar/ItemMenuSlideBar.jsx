import React from "react";
import { Link } from "react-router-dom";

function ItemMenuSlideBar(props) {
    const {connect, content} = props
  return (
    <p>
      <Link to={connect}>{content}</Link>
    </p>
  );
}

export default ItemMenuSlideBar;
