import React, { useEffect, useRef, useState } from "react";

function Navbar() {
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

  return (
    <nav
      className="navbar d-flex justify-content-between align-items-center position-fixed bg-transparent w-100"
      ref={navbarRef}
    >
      <h1 className="logo">
        G<strong>Tour</strong>
      </h1>
      <div className="menu">
        <li className="isShowResponsive">
          <a className="a-tag-navbar">
            Home
            <i className="fa-solid fa-chevron-down" />
          </a>
          <ul className="submenu">
            <li>
              <a>Home 1 - Background Image</a>
            </li>
            <li>
              <a>Home 2 - Youtube Video</a>
            </li>
            <li>
              <a>Home 3 - Google Inspired</a>
            </li>
            <li>
              <a>Home 4 - Travel Site</a>
            </li>
          </ul>
        </li>
        <li className="isShowResponsive">
          <a>
            Tours <i className="fa-solid fa-chevron-down" />
          </a>
          <ul className="submenu">
            <li>
              <a>
                Tour Classis Fullwidth{" "}
                <i className="fa-solid fa-chevron-right right-arrow-icon right-arrow-icon" />
              </a>
              <ul className="submenu2">
                <li>
                  <a>2 Columns</a>
                </li>
                <li>
                  <a>3 Columns</a>
                </li>
                <li>
                  <a>4 Columns</a>
                </li>
              </ul>
            </li>
            <li>
              <a>
                Tour Classis Sidebar{" "}
                <i className="fa-solid fa-chevron-right right-arrow-icon" />
              </a>
              <ul className="submenu2">
                <li>
                  <a>Right Sidebar</a>
                </li>
                <li>
                  <a>Left Sidebar</a>
                </li>
              </ul>
            </li>
            <li>
              <a>
                Tour Grid Fullwidth{" "}
                <i className="fa-solid fa-chevron-right right-arrow-icon" />
              </a>
              <ul className="submenu2">
                <li>
                  <a>2 Columns</a>
                </li>
                <li>
                  <a>3 Columns</a>
                </li>
                <li>
                  <a>4 Columns</a>
                </li>
              </ul>
            </li>
            <li>
              <a>
                Tour Grid Sidebar{" "}
                <i className="fa-solid fa-chevron-right right-arrow-icon" />
              </a>
              <ul className="submenu2">
                <li>
                  <a>Right Sidebar</a>
                </li>
                <li>
                  <a>Left Sidebar</a>
                </li>
              </ul>
            </li>
            <li>
              <a>
                Tour List Sidebar{" "}
                <i className="fa-solid fa-chevron-right right-arrow-icon" />
              </a>
              <ul className="submenu2">
                <li>
                  <a>Right Sidebar</a>
                </li>
                <li>
                  <a>Left Sidebar</a>
                </li>
              </ul>
            </li>
            <li>
              <a>
                Tour Header Type{" "}
                <i className="fa-solid fa-chevron-right right-arrow-icon" />
              </a>
              <ul className="submenu2">
                <li>
                  <a>Featured Image</a>
                </li>
                <li>
                  <a>Video</a>
                </li>
              </ul>
            </li>
            <li>
              <a>
                Tour Category{" "}
                <i className="fa-solid fa-chevron-right right-arrow-icon" />
              </a>
              <ul className="submenu2">
                <li>
                  <a>Rural</a>
                </li>
                <li>
                  <a>Snow &amp; Ice</a>
                </li>
                <li>
                  <a>Wildlife</a>
                </li>
                <li>
                  <a>Mountain</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="isShowResponsive">
          <a>
            Booking <i className="fa-solid fa-chevron-down" />
          </a>
          <ul className="submenu">
            <li>
              <a>
                Online Payment for Booking{" "}
                <i className="fa-solid fa-chevron-right right-arrow-icon" />
              </a>
              <ul className="submenu2">
                <li>
                  <a>Variable Tour Pricing</a>
                </li>
                <li>
                  <a>Simple Tour Pricing</a>
                </li>
              </ul>
            </li>
            <li>
              <a>
                Custom Booking Form{" "}
                <i className="fa-solid fa-chevron-right right-arrow-icon" />
              </a>
              <ul className="submenu2">
                <li>
                  <a>Booking Form + Sub Tour Date</a>
                </li>
                <li>
                  <a>Booking Form + Custom Date</a>
                </li>
              </ul>
            </li>
            <li>
              <a>
                Tour Durations{" "}
                <i className="fa-solid fa-chevron-right right-arrow-icon" />
              </a>
              <ul className="submenu2">
                <li>
                  <a>Single Day tour</a>
                </li>
                <li>
                  <a>Multiple Day tour</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Custom Booking URL for Affiliate Tour</a>
            </li>
            <li>
              <a>Custom Booking using custom HTMl &amp; Shortcode</a>
            </li>
            <li>
              <a>
                Header Options{" "}
                <i className="fa-solid fa-chevron-right right-arrow-icon" />
              </a>
              <ul className="submenu2">
                <li>
                  <a>Standard Background Header</a>
                </li>
                <li>
                  <a>Video Background Header</a>
                </li>
              </ul>
            </li>
            <li>
              <a>
                Layout Options{" "}
                <i className="fa-solid fa-chevron-right right-arrow-icon" />
              </a>
              <ul className="submenu2">
                <li>
                  <a>With Sidebar</a>
                </li>
                <li>
                  <a>Fullwidth</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="isShowResponsive">
          <a>
            Destinations <i className="fa-solid fa-chevron-down" />
          </a>
          <ul className="submenu">
            <li>
              <a>Destination Fullwidth</a>
            </li>
            <li>
              <a>Destination + Video Header</a>
            </li>
            <li>
              <a>Destination Right Sidebar</a>
            </li>
            <li>
              <a>Destination Left Sidebar</a>
            </li>
            <li>
              <a>Single Destination</a>
            </li>
            <li>
              <a>Single Destination + Video</a>
            </li>
          </ul>
        </li>
        <li className="isShowResponsive">
          <a>
            Pages <i className="fa-solid fa-chevron-down" />
          </a>
          <ul className="submenu">
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>FAQs</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
            <li>
              <a>Page Fullwidth</a>
            </li>
            <li>
              <a>Page + Video Background Header</a>
            </li>
            <li>
              <a>Page Right Sidebar</a>
            </li>
            <li>
              <a>Page Left Sidebar</a>
            </li>
          </ul>
        </li>
        <li className="isShowResponsive">
          <a>
            Blog <i className="fa-solid fa-chevron-down" />
          </a>
          <ul className="submenu">
            <li>
              <a>Blog Right Sidebar</a>
            </li>
            <li>
              <a>Blog Left Sidebar</a>
            </li>
            <li>
              <a>Blog Fullwidth</a>
            </li>
            <li>
              <a>Blog Grid Right Sidebar</a>
            </li>
            <li>
              <a>Blog Grid Left Sidebar</a>
            </li>
            <li>
              <a>Blog Grid Fullwidth</a>
            </li>
            <li>
              <a>Blog Full + Grid Right Sidebar</a>
            </li>
            <li>
              <a>Blog Full + Grid Left Sidebar</a>
            </li>
            <li>
              <a>Blog Full + Grid Fullwidth</a>
            </li>
          </ul>
        </li>
        <li className="isShowResponsive">
          <a>
            Shortcodes <i className="fa-solid fa-chevron-down" />
          </a>
          <ul className="submenu">
            <li>
              <a>Accordion &amp; Toggles</a>
            </li>
            <li>
              <a>Alert Boxes</a>
            </li>
            <li>
              <a>Animated Content</a>
            </li>
            <li>
              <a>Buttons &amp; Social Icons</a>
            </li>
            <li>
              <a>Columns</a>
            </li>
            <li>
              <a>Google Maps</a>
            </li>
            <li>
              <a>Image Frame &amp; Animation</a>
            </li>
            <li>
              <a>Image Teasers</a>
            </li>
            <li>
              <a>Pricing Tables</a>
            </li>
            <li>
              <a>Tabs</a>
            </li>
          </ul>
        </li>
        <li className="isShowResponsive">
          <a>
            Shop <i className="fa-solid fa-chevron-down" />
          </a>
          <ul className="submenu">
            <li>
              <a>Shop Fullwidth</a>
            </li>
            <li>
              <a>Shop Sidebar</a>
            </li>
            <li>
              <a>Single Product Fullwidth</a>
            </li>
            <li>
              <a>Single Product With Sidebar</a>
            </li>
          </ul>
        </li>
        <li>
          <i
            className="fa-solid fa-sliders icon-sliders mr-2"
            id="open-slidebar"
          />
          <i className="fa-solid fa-cart-shopping" />
        </li>
      </div>
    </nav>
  );
}

export default Navbar;
