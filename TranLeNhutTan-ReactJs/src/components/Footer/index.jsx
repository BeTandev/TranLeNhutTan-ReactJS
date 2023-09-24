import React from "react";
import RecentTripsItem from "./RecentTripsItem";
import SocialFooter from "./SocialFooter";
import ContactInfoItem from "./ContactInfoItem";

function Footer() {
  return (
    <footer className="mt-5 text-white py-5">
      <div className="container-fluid padding-responsive">
        <div className="row flex-column">
          <div className="col-12 d-flex justify-content-between mt-4 wrap-footer-item">
            <div className="footer-item awards">
              <h5 className="mb-3">Our Awards</h5>
              <p className="footer-font">
                London is a megalopolis of people, ideas and frenetic energy.
                The capital and largest city of the United Kingdom.
              </p>
              <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png" />
            </div>
            <div className="footer-item contact">
              <h5 className="mb-3">Contact Info</h5>

              <ContactInfoItem
                content="1-567-124-44227"
                iconContact="fa-solid fa-mobile-screen"
              ></ContactInfoItem>
              <ContactInfoItem
                content="184 Main Street East Perl Habour 8007"
                iconContact="fa-solid fa-location-dot"
              ></ContactInfoItem>
              <ContactInfoItem
                content="Mon - Sat 8.00 - 18.00 Sunday CLOSED"
                iconContact="fa-regular fa-clock"
              ></ContactInfoItem>

              <p className="wrap-icon-footer">

                <SocialFooter linkImg="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"></SocialFooter>
                <SocialFooter linkImg="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"></SocialFooter>
                <SocialFooter linkImg="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/YouTube_social_red_circle_%282017%29.svg/1200px-YouTube_social_red_circle_%282017%29.svg.png"></SocialFooter>
                <SocialFooter linkImg="https://static-00.iconduck.com/assets.00/pinterest-icon-2048x2048-os3lysf9.png"></SocialFooter>
                <SocialFooter linkImg="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-512.png"></SocialFooter>
                
              </p>
            </div>
            <div className="footer-item trips">
              <h5 className="mb-3">Recent Trips</h5>
              <div className="footer-trips-wrap-img d-flex justify-content-between">
                <RecentTripsItem linkImg="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg"></RecentTripsItem>
                <RecentTripsItem linkImg="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg"></RecentTripsItem>
                <RecentTripsItem linkImg="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg"></RecentTripsItem>
              </div>
              <div className="footer-trips-wrap-img d-flex justify-content-between mt-3">
                <RecentTripsItem linkImg="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg"></RecentTripsItem>
                <RecentTripsItem linkImg="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg"></RecentTripsItem>
                <RecentTripsItem linkImg="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg"></RecentTripsItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
