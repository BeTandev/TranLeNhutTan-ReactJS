import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showSlideBar } from "../../store/showSlideBaraction";
import { data } from "../../data/mock";
import { Link } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navbarRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > headerHeight) {
        navbarRef.current.classList.add("scrolled");
      } else {
        navbarRef.current.classList.remove("scrolled");
      }

      if (isScrollingUp) {
        navbarRef.current.style.opacity = "1";
      } else {
        navbarRef.current.style.opacity = "0";
      }
    }

    setHeaderHeight(document.querySelector("header").offsetHeight);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerHeight, isScrollingUp]);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }

      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  let { params } = useSelector((state) => state.SHOWSLIDEBAR);
  useEffect(() => {
    if (params.checkShowSlideBar) {
      navbarRef.current.classList.add("none-react");
    } else {
      navbarRef.current.classList.remove("none-react");
    }
  }, [params.checkShowSlideBar]);

  function openSlideBar() {
    dispatch(showSlideBar((params = { checkShowSlideBar: true })));
  }

  const MenuItem = ({ item }) => {
    return (
      <li className="isShowResponsive float-left">
        <Link to={item.connect} className="a-tag-navbar">
          {item.title} <i className="fa-solid fa-chevron-down"></i>
        </Link>
        {item.subMenu && item.subMenu.length > 0 && (
          <ul className="submenu">
            {item.subMenu.map((subItem, index) => (
              <li key={index}>
                <Link to={subItem.connect}>{subItem.title} {subItem.subSubMenu && (<i class="fa-solid fa-chevron-right right-arrow-icon"></i>)}</Link>
                <hr class="hr-custom"></hr>
                {subItem.subSubMenu && subItem.subSubMenu.length > 0 && (
                  <ul className="submenu2">
                    {subItem.subSubMenu.map((subSubMenu, index) => (
                      <li key={index}>
                        <Link to={subSubMenu.connect}>{subSubMenu.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  const Menu = ({ data }) => {
    return (
      <ul className="d-flex align-items-center">
        {data.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
        <li className="ml-3">
          <i
            className="fa-solid fa-sliders icon-sliders mr-2"
            id="open-slidebar"
            onClick={openSlideBar}
          />
          <i className="fa-solid fa-cart-shopping" />
        </li>
      </ul>
    );
  };

  return (
    <nav
      className="navbar d-flex justify-content-between align-items-center position-fixed bg-transparent w-100"
      ref={navbarRef}
    >
      <h1 className="logo">
        G<strong>Tour</strong>
      </h1>
      <div className="menu">
        <Menu data={data} ></Menu>
      </div>
    </nav>
  );
}

export default Navbar;
