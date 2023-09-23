import React from "react";
import BestValueTripsItem from "./BestValueTripsItem";

function BestValueTrips() {
  return (
    <section id="Best-Value-Trips" className="mt-5">
      <div className="container-fluid padding-responsive">
        <div className="row flex-column">
          <h2 className="mx-auto">Best Value Trips</h2>
          <p className="text-center second-title">Best offers trips from us</p>
          <div className="col-12 d-flex justify-content-between mt-4 wrap-best-value-trips-item">
            
            <BestValueTripsItem
              connect="https://themes.themegoods.com/grandtour/demo/tour/french-autumn/"
              linkImg="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg"
              price="5,000"
              title="French Autumn"
              des="City Tours, Urban"
              reviews="4"
              date="5"
            ></BestValueTripsItem>

            <BestValueTripsItem
              connect="https://themes.themegoods.com/grandtour/demo/tour/grand-switzerland/"
              linkImg="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg"
              price="6,000"
              title="Grand Switzerland"
              des="Shopping, Mountain, Snow &amp; Ice"
              reviewers="4"
              date="6"
            ></BestValueTripsItem>

            <BestValueTripsItem
              connect="https://themes.themegoods.com/grandtour/demo/tour/discover-japan/"
              linkImg="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg"
              prevPrice="3,000"
              price="2,500"
              title="Discover Japan"
              des="City Tours, Iconic"
              reviewers="4"
              date="5"
            ></BestValueTripsItem>

          </div>
        </div>
      </div>
    </section>
  );
}

export default BestValueTrips;
