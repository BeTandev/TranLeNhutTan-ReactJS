import React from "react";
import WhyChooseUsItem from "./WhyChooseUsItem";

function WhyChooseUs() {
  return (
    <section id="Why-Choose-Us" className="mt-5">
      <div className="container-fluid padding-responsive">
        <div className="row flex-column">
          <h2 className="mx-auto">Why Choose Us</h2>
          <p className="text-center second-title">
            Here are reasons you should plan trip with us
          </p>
          <div className="d-flex justify-content-between mt-4 wrap-why-choose-us-item">
            <WhyChooseUsItem
              linkImg="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png"
              title="Handpicked Hotels"
              content="Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
            ></WhyChooseUsItem>

            <WhyChooseUsItem
              linkImg="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png"
              title="World Class Service"
              content="Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
            ></WhyChooseUsItem>

            <WhyChooseUsItem
              linkImg="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png"
              title="Best Price Guarantee"
              content="Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
            ></WhyChooseUsItem>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
