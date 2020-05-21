// var myIndex = 0;
// carousel();
// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("slider__img");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";  
//     }
//     myIndex++;
//     if (myIndex > x.length) {myIndex = 1}    
//     x[myIndex-1].style.display = "block";  
//     setTimeout(carousel, 5000);    
// }
      
// function showHideMenu (navId) {
//       var navigationList = document.getElementsByClassName("ricssubnav__submenulistcont");
//       for (var i = 0; i < navigationList.length; i++) {
//          navigationList[i].style.display = "none";
//       }
//       var nav = document.getElementById("navId");
//       nav.style.display = "none";
// }

var slideIndex = 1;
gotoSlide(slideIndex);

function gotoSlide(n) {
      showDivs(slideIndex += n);
}

function showDivs(n) {
      let i;
      let x = document.getElementsByClassName("slider__img");
      if (x.length) {
            if (n > x.length) {slideIndex = 1}
            if (n < 1) {slideIndex = x.length}
            for (i = 0; i < x.length; i++) {
                  x[i].style.display = "none";  
            }
            x[slideIndex-1].style.display = "block";  
      }
}

function openSearch() {
      let searchLinkElement = document.getElementsByClassName("ricsnav--searchlink");
      searchLinkElement[0].style.display = "none";
      let searchInputElement = document.getElementsByClassName("ricsnav__rightsearchform");
      searchInputElement[0].style.display = "block";
      let rightNavElement = document.getElementsByClassName("ricsnav__rightlistcont");
      rightNavElement[0].classList.add("search--open");
      if (window.innerWidth <= 576) {
            hidenav();
      }
}

function hideSearch() {
      let searchLinkElement = document.getElementsByClassName("ricsnav--searchlink");
      searchLinkElement[0].style.display = "block";
      let searchInputElement = document.getElementsByClassName("ricsnav__rightsearchform");
      searchInputElement[0].style.display = "none";
      let rightNavElement = document.getElementsByClassName("ricsnav__rightlistcont");
      rightNavElement[0].classList.remove("search--open");
}

let ricsVideo = document.getElementById("ricsvideo");

function playricsVideo() {
      let playVideoButton = document.getElementById("playricsVideoBtn");
      playVideoButton.style.display = "none";
      let posterElement = document.getElementsByClassName("ricsartimgntxt__videoposter");
      posterElement[0].style.display = "none";
      ricsVideo.play();
}

function expandTable() {
      let modalElement = document.getElementById("ricsLighbox");
      let bodyElement = document.body;
      modalElement.style.display = "block";
      bodyElement.style.overflow = "hidden";
}

function closeLightbox() {
      let modalElement = document.getElementById("ricsLighbox");
      let bodyElement = document.body;
      modalElement.style.display = "none";
      bodyElement.style.overflow = "auto";
}

function toggleMenu(thisElement, elementId) {
      let showElement = document.getElementById(elementId);
      let breadcrumbElement = document.getElementsByClassName("ricsbreadcrumb");
      if (!showElement.offsetWidth) {
            hidenav();
            showElement.style.display = "block";
            thisElement.classList.add("ricsnav--leftlistactive");
            breadcrumbElement[0].classList.remove("hide--submenu");
      } else {
            hidenav();
            breadcrumbElement[0].classList.add("hide--submenu");
      }
      hideSearch();
}

function hidenav() {
      let navElements = document.getElementsByClassName("ricssubnav__submenunav");
      navElements[0].style.display = "none";
      navElements[1].style.display = "none";
      let menuLinkElements = document.getElementsByClassName("ricsnav__leftlink");
      menuLinkElements[0].classList.remove("ricsnav--leftlistactive");
      menuLinkElements[1].classList.remove("ricsnav--leftlistactive");
}

function viewFullBreadcrumb() {
      let breadcrumbElement = document.getElementsByClassName("ricsbreadcrumb__navlistcont");
      breadcrumbElement[0].classList.add("remove-ovrflw--hdn");
}