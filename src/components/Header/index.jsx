import React, { useRef, useState } from "react";
import InputItem from "./inputItem";

function Header() {
  const showAdvancedSearch = useRef(null);
  const [checkAdvancedSearch, setCheckAdvancedSearch] = useState(false);
  const [iconAdvanced, setIconAdvanced] = useState(true);
  let iconSearch = "";

  function isShowAdvancedSearch() {
    if (checkAdvancedSearch) {
      showAdvancedSearch.current.classList.remove("flex-react");
      setCheckAdvancedSearch(false);
      setIconAdvanced(true);
    } else {
      showAdvancedSearch.current.classList.add("flex-react");
      setCheckAdvancedSearch(true);
      setIconAdvanced(false);
    }
  }

  if (iconAdvanced) {
    iconSearch = <i class="fa-solid fa-chevron-down"></i>;
  } else {
    iconSearch = <i class="fa-solid fa-chevron-up"></i>;
  }

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
                <InputItem
                  placeholderInput="Destination, city"
                  iconInput="fa-solid fa-magnifying-glass"
                  nameInput="destination"
                ></InputItem>
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
                <InputItem isSubmit value="Search"></InputItem>
              </div>
              <div
                className="d-none flex-wrap justify-content-between col-12"
                id="wrap-second-input-header"
                ref={showAdvancedSearch}
              >
                <div className="div-input-header">
                  <select
                    id="category"
                    className="input p-2 px-3 text-secondary"
                  >
                    <option value="">All Categories</option>
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
                    <option value="">Any destinations</option>
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
                <InputItem
                  placeholderInput="Max budget ex .500"
                  iconInput="fa-solid fa-dollar-sign"
                  nameInput="budget"
                ></InputItem>
                <InputItem isInvisible></InputItem>
              </div>
              <p
                className="text-white advanced-search"
                id="advanced-search"
                onClick={isShowAdvancedSearch}
              >
                {iconSearch}Advanced Search
              </p>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
