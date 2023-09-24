import React from "react";
import { Link } from "react-router-dom";

function SocialFooter(props) {
    const {connect, linkImg} = props
  return (
    <Link to={connect}>
      <img src={linkImg} />
    </Link>
  );
}

export default SocialFooter