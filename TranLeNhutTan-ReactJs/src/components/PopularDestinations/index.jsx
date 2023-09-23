import React from "react";
import PopularDestinationsItem from "./PopularDestinationsItem";

function PopularDestinations() {
  return (
    <section id="Popular-Destinations" className="mt-5">
      <div className="container-fluid padding-responsive">
        <div className="row flex-column">
          <h2 className="mx-auto">Popular Destinations</h2>
          <p className="text-center second-title">
            World's best tourist destinations
          </p>
          <div className="col-12 d-flex justify-content-between mt-4 wrap-popular-item">
            <PopularDestinationsItem
              connect="https://themes.themegoods.com/grandtour/demo/destination/tokyo/"
              linkImg="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg"
              destination="Tokyo"
            ></PopularDestinationsItem>

            <PopularDestinationsItem
              connect="https://themes.themegoods.com/grandtour/demo/destination/seoul/"
              linkImg="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg"
              destination="Seoul"
            ></PopularDestinationsItem>

            <PopularDestinationsItem
              connect="https://themes.themegoods.com/grandtour/demo/destination/paris/"
              linkImg="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg"
              destination="Paris"
            ></PopularDestinationsItem>

            <PopularDestinationsItem
              connect="https://themes.themegoods.com/grandtour/demo/destination/london/"
              linkImg="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg"
              destination="London"
            ></PopularDestinationsItem>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularDestinations;
