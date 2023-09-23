import React from "react";

function Header() {
  return (
    <header className="position-relative">
      <div className="container_fluid">
        <div className="row">
          <div className="col-12 header-wrap-h2 position-absolute padding-responsive">
            <h2 className="text-center text-white">Where do you want to go?</h2>
            <p className="text-center text-white second-title">
              Trips, experiences, and places. All in one service.
            </p>
            <form>
              <div className="d-flex flex-wrap justify-content-between col-12 mt-5">
                <div className="div-input-header d-flex">
                  <input
                    type="text"
                    placeholder="Destination, city"
                    className="input p-2 px-3"
                  />
                  <span className="input-icon">
                    <i className="fa-solid fa-magnifying-glass" />
                  </span>
                </div>
                <div className="div-input-header d-flex">
                  <select id="month" className="input p-2 px-3 text-secondary">
                    <option value="Any Month">Any Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                  <span className="input-icon">
                    <i className="fa-regular fa-calendar" />
                  </span>
                </div>
                <div className="div-input-header d-flex">
                  <select id="sort" className="input p-2 px-3 text-secondary">
                    <option value>Sort By Date</option>
                    <option value="lowtohigh">Price Low to High</option>
                    <option value="hightolow">Price High to Low</option>
                    <option value="name">Sort By Name</option>
                    <option value="popularity">Sort By Popularity</option>
                    <option value="reviewscore">Sort By Review Score</option>
                  </select>
                  <span className="input-icon">
                    <i className="fa-solid fa-arrows-up-down" />
                  </span>
                </div>
                <div className="div-input-header">
                  <input
                    type="submit"
                    placeholder="Destination, city"
                    className="input-btn text-white input p-2 px-3 w-100"
                    defaultValue="Search"
                  />
                </div>
              </div>
              <p className="text-white advanced-search" id="advanced-search">
                Advanced Search
              </p>
              <div
                className="d-flex flex-wrap justify-content-between col-12"
                id="wrap-second-input-header"
              >
                <div className="div-input-header">
                  <select
                    id="category"
                    className="input p-2 px-3 text-secondary"
                  >
                    <option value>All Categories</option>
                    <option value="Mountain">Mountain</option>
                    <option value="Rural">Rural</option>
                    <option value="Snow & Ice">Snow &amp; Ice</option>
                    <option value="Wildlife">Wildlife</option>
                  </select>
                  <span className="input-icon">
                    <i className="fa-solid fa-chevron-down" />
                  </span>
                </div>
                <div className="div-input-header">
                  <select
                    id="destinations"
                    className="input p-2 px-3 text-secondary"
                  >
                    <option value>Any destinations</option>
                    <option value="Mountain">Tokyo</option>
                    <option value="Rural">Seoul</option>
                    <option value="Snow & Ice">Paris</option>
                    <option value="London">London</option>
                    <option value="Venice">Venice</option>
                    <option value="Miami">Miami</option>
                    <option value="Rome">Rome</option>
                    <option value="Prague">Prague</option>
                    <option value="California">California</option>
                    <option value="Kyoto">Kyoto</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Santorini">Santorini</option>
                  </select>
                  <span className="input-icon">
                    <i className="fa-solid fa-chevron-down" />
                  </span>
                </div>
                <div className="div-input-header">
                  <input
                    type="text"
                    placeholder="Max budget ex .500"
                    className="input p-2 px-3"
                  />
                  <span className="input-icon">
                    <i className="fa-solid fa-dollar-sign" />
                  </span>
                </div>
                <div className="div-input-header invisible">
                  <input
                    type="text"
                    placeholder="Destination, city"
                    className="input p-2 px-3"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
