import React from "react";

function RecentTripsItem(props) {
    const {linkImg} = props
  return (
    <div className="footer-trips-img">
      <img src={linkImg} />
    </div>
  );
}

export default RecentTripsItem