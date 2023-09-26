import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showSlideBar } from "../../store/showSlideBarAction";
import ItemMenuSlideBar from "./ItemMenuSlideBar";

function Slidebar() {
  const dispatch = useDispatch()
  let {params} = useSelector(state => state.SHOWSLIDEBAR)
  const slideBarRef = useRef(null)
  console.log(params)
  
  useEffect(() => {
    if(params.checkShowSlideBar){
      slideBarRef.current.classList.add("block-react")
    }else{
      slideBarRef.current.classList.remove("block-react")
    }
  }, [params.checkShowSlideBar])

  function closeSlideBar(){
    dispatch(showSlideBar(params = {checkShowSlideBar: false}))
  }
  return (
    <section id="slidebar" ref={slideBarRef}>
      <p className="close-tab" id="close-tab" onClick={closeSlideBar}>
        <i className="fa-solid fa-x" />
      </p>
      <div className="wrap-menu-slidebar">
        <ItemMenuSlideBar connect="https://themes.themegoods.com/grandtour/demo/" content="Home"></ItemMenuSlideBar>
        <ItemMenuSlideBar connect="https://themes.themegoods.com/grandtour/demo/home-2/#" content="Tours"></ItemMenuSlideBar>
        <ItemMenuSlideBar connect="https://themes.themegoods.com/grandtour/demo/tour/the-new-california/" content="Booking"></ItemMenuSlideBar>
        <ItemMenuSlideBar connect="https://themes.themegoods.com/grandtour/demo/home-2/#" content="Destinations"></ItemMenuSlideBar>
        <ItemMenuSlideBar connect="https://themes.themegoods.com/grandtour/demo/" content="Pages"></ItemMenuSlideBar>
        <ItemMenuSlideBar connect="https://themes.themegoods.com/grandtour/demo/" content="Blog"></ItemMenuSlideBar>
        <ItemMenuSlideBar connect="https://themes.themegoods.com/grandtour/demo/" content="Shortcodes"></ItemMenuSlideBar>
        <ItemMenuSlideBar connect="https://themes.themegoods.com/grandtour/demo/" content="Shop"></ItemMenuSlideBar>
      </div>
      <div className="wrap-tours-slidebar mt-5">
        <div className="tour-slidebar-item first-tour-slidebar-item">
          <strong className="price-tour-slidebar">$3,900</strong>
          <strong className="title-tour-slidebar">Swiss Alps Trip</strong>
          <p className="vote-tour-slidebar">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-regular fa-star" />
          </p>
        </div>
        <div className="tour-slidebar-item mt-3 second-tour-slidebar-item">
          <strong className="price-tour-slidebar">$3,900</strong>
          <strong className="title-tour-slidebar">Swiss Alps Trip</strong>
          <p className="vote-tour-slidebar">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-regular fa-star" />
          </p>
        </div>
      </div>
      <div className="wrap-icon-slidebar">
        <i className="fa-brands fa-square-facebook" />
        <i className="fa-brands fa-twitter" />
        <i className="fa-brands fa-youtube" />
        <i className="fa-brands fa-pinterest" />
        <i className="fa-brands fa-instagram" />
      </div>
    </section>
  );
}

export default Slidebar;
