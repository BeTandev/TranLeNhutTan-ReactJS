// let headerHeight = document.querySelector("header").offsetHeight;
// let navbar = document.querySelector(".navbar");

// let isScrollingUp = false;

// window.addEventListener("scroll", function () {
//   let currentScrollPos = window.pageYOffset;

//   if (currentScrollPos > headerHeight) {
//     navbar.classList.add("scrolled");
//   } else {
//     navbar.classList.remove("scrolled");
//   }

//   if (isScrollingUp) {
//     navbar.style.opacity = "1";
//   } else {
//     navbar.style.opacity = "0";
//   }
// });

// window.addEventListener("wheel", function (event) {
//   if (event.deltaY < 0) {
//     isScrollingUp = true;
//   } else if (event.deltaY > 0) {
//     isScrollingUp = false;
//   }
// });


// let advancedSearch = document.getElementById('advanced-search')
// let wrapSecondInputHeader = document.getElementById('wrap-second-input-header')
// let isShowAdvanced = false
// advancedSearch.addEventListener("click", function(){
//   if(isShowAdvanced){
//     wrapSecondInputHeader.style.setProperty("display", "none", "important");
//     isShowAdvanced = false
//   } else {
//     wrapSecondInputHeader.style.setProperty("display", "flex", "important");
//     isShowAdvanced = true
//   }
// })



// let openSlidebar = document.getElementById('open-slidebar')
// let slideBar = document.getElementById('slidebar')
// let closeTab = document.getElementById('close-tab')

// openSlidebar.addEventListener("click", function(){
//   slideBar.style.setProperty("display", "block", "important");
//   navbar.style.setProperty("display", "none", "important");
//   slideBar.style.setProperty("animation", "openSlideBar .3s ease")
// })
// closeTab.addEventListener("click", function(){
//   slideBar.style.setProperty("display", "none", "important");
//   navbar.style.setProperty("display", "flex", "important");
// })