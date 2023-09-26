import React from "react";
import ArticlesTripsItem from "./ArticlesTripsItem";

function ArticlesTrips() {
  return (
    <section id="Articles-Tips" className="mt-5">
      <div className="container-fluid padding-responsive">
        <div className="row flex-column">
          <h2 className="mx-auto">Articles &amp; Tips</h2>
          <p className="text-center second-title">
            Explore some of the best tips from around the world
          </p>
          <div className="col-12 d-flex justify-content-between mt-4 wrap-articles-tips-item">
            
            <ArticlesTripsItem
              linkImg="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg"
              date="DECEMBER 10, 2016"
              title="Memorial Day to Someone Told Me to Travel"
              des="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."
              connect="https://themes.themegoods.com/grandtour/demo/my-memorial-day-tribute-to-someone-who-told-me-to-travel/"
            ></ArticlesTripsItem>

            <ArticlesTripsItem
              linkImg="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg"
              date="DECEMBER 10, 2016"
              title="7 Tips For Nomads On A Budget Trips"
              des="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."
              connect="https://themes.themegoods.com/grandtour/demo/7-tips-for-nomads-on-a-budget/"
            ></ArticlesTripsItem>

            <ArticlesTripsItem
              linkImg="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg"
              date="DECEMBER 10, 2016"
              title="Taking A Travel Blog Victory Lap"
              des="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."
              connect="https://themes.themegoods.com/grandtour/demo/taking-a-travel-blog-victory-lap/"
            ></ArticlesTripsItem>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticlesTrips;
