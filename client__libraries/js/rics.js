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
      let x = document.getElementsByClassName("slider").length ? document.getElementsByClassName("slider")[0].childNodes : [];
      let y = [];
      for (i = 0; i < x.length; i++) {
            if (x[i].nodeName.toLowerCase() === "picture"){
                  y.push(x[i]);
            }
      }
      
      if (y.length) {
            if (n > y.length) {slideIndex = 1}
            if (n < 1) {slideIndex = y.length}
            for (i = 0; i < y.length; i++) {
                  y[i].style.display = "none";  
            }
            y[slideIndex-1].style.display = "block";  
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

var ricsVideo, videoIndex, youtubeid, playerid;
function playricsVideo(videoIndex, youtubeid) {
      let playVideoButton = document.getElementById("playricsVideoBtn" + videoIndex);
      playVideoButton.style.display = "none";
      let posterElement = document.getElementById("videoPoster" + videoIndex);
      posterElement.style.display = "none";
      if (youtubeid) {
            playYTVideo(videoIndex, youtubeid);
      } else {
            ricsVideo = document.getElementById("ricsvideo" + videoIndex);
            ricsVideo.play();
      }
}

function playYTVideo(videoIndex, youtubeid) {
      videoIndex = videoIndex;
      youtubeid = youtubeid;
      playerid = 'player' + videoIndex;
      document.getElementById("ricsvideo" + videoIndex).innerHTML = "<div id='" + playerid + "' datasrc='" + youtubeid + "'></div>";
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function getVideoId(){
      return document.getElementById(playerid).attributes.datasrc.nodeValue;
};

var player = {};
function onYouTubeIframeAPIReady() {
      player[videoIndex] = new YT.Player(playerid, {
            videoId: getVideoId(),
            playerVars: {
                  controls: 1,
                  showinfo: 0,
                  rel: 0,
                  showsearch: 0,
                  iv_load_policy: 3
              },
            events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
            }
      });
}

function onPlayerReady(event) {
      event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
            done = true;
      }
}

function stopVideo() {
      player[videoIndex].stopVideo();
}

function expandTable() {
      let modalElement = document.getElementById("ricsLighbox");
      let bodyElement = document.body;
      modalElement.style.display = "block";
      bodyElement.style.overflow = "hidden";
      bodyElement.classList.add("fixed--body");
}

function closeLightbox() {
      let modalElement = document.getElementById("ricsLighbox");
      let bodyElement = document.body;
      modalElement.style.display = "none";
      bodyElement.style.overflow = "auto";
      bodyElement.classList.remove("fixed--body");
}

function toggleMenu(thisElement, menuIndex) {
      let showElement = document.getElementById("menu" + menuIndex);
      let chevronElement = document.getElementsByClassName("ricsnav__chevronicon");
      if (!showElement.offsetWidth) {
            hidenav();
            hideDropdown();
            showElement.style.display = "block";
            chevronElement[0].classList.add("ricsnav--chevronactive");
            // thisElement.parentNode.childNodes[1].classList.add("ricsnav--leftlistactive");
      } else {
            hidenav();
            hideDropdown();
      }
      hideSearch();
}

function hidenav() {
      let navElements = document.getElementsByClassName("ricssubnav__submenunav");
      for (var i = 0; i < navElements.length; i++) {
            navElements[i].style.display = "none";
      }
      // let menuLinkElements = document.getElementsByClassName("ricsnav__leftlink");
      // for (var i = 0; i < menuLinkElements.length; i++) {
      //       menuLinkElements[i].classList.remove("ricsnav--leftlistactive");
      // }
      let chevronElement = document.getElementsByClassName("ricsnav__chevronicon");
      for (var i = 0; i < chevronElement.length; i++) {
            chevronElement[i].classList.remove("ricsnav--chevronactive");
      }
}

function toggleSubMenu(thisElement, menuIndex, drpdwnIndex) {
      let showElement = document.getElementById("menu" + menuIndex + "drpdwn" + drpdwnIndex);
      if (!showElement.offsetWidth) {
            hideDropdown();
            showElement.style.display = "block";
            thisElement.classList.add("ricssubnav--chevronactive");
            thisElement.parentNode.childNodes[1].classList.add("ricssubnav--submenuactive");
      } else {
            hideDropdown();
      }
}

function hideDropdown() {
      let navElements = document.getElementsByClassName("ricssubnav__drpdwnlistcont");
      for (var i = 0; i < navElements.length; i++) {
            navElements[i].style.display = "none";
      }
      let menuLinkElements = document.getElementsByClassName("ricssubnav__submenulink");
      for (var i = 0; i < menuLinkElements.length; i++) {
            menuLinkElements[i].classList.remove("ricssubnav--submenuactive");
      }
      let chevronElement = document.getElementsByClassName("ricssubnav__chevronicon");
      for (var i = 0; i < chevronElement.length; i++) {
            chevronElement[i].classList.remove("ricssubnav--chevronactive");
      }
}

function viewFullBreadcrumb() {
      let breadcrumbElement = document.getElementsByClassName("ricsbreadcrumb__navlistcont");
      breadcrumbElement[0].classList.add("remove-ovrflw--hdn");
}

function seemoreTag(tagContIndex) {
      let tagContElement = document.getElementById("taginfo" + tagContIndex);
      tagContElement.classList.add("seemore--tag");
      for (var i = 0; i < tagContElement.childNodes.length; i++) {
            if (tagContElement.childNodes[i].classList) {
                  tagContElement.childNodes[i].classList.remove("dis--none");
            }
      }
}

function appendCustomClass(elementClassName, checkClass, addClass) {
      var elements = document.getElementsByClassName(elementClassName);
      if (elements.length) {
            var parentNode = elements[0].parentNode;
            checkClassName(parentNode, checkClass, addClass);
      }
}

function checkClassName(parentNode, checkClass, addClass) {
      if (parentNode.classList.contains(checkClass)) {
            parentNode.classList.add(addClass);
      } else {
            parentNode = parentNode.parentNode;
            checkClassName(parentNode, checkClass, addClass);
      }
}

function checkNAddBGClass(elementClassName, checkClass, addClass, removeClass) {
      var elements = document.getElementsByClassName(elementClassName);
      if (elements.length) {
            for (var i = 0; i < elements.length; i++) {
                  if (elements[i].classList.contains(addClass)) {
                        checkClassName(elements[i], checkClass, addClass);
                        if (removeClass) {
                              elements[i].classList.remove(addClass);
                        }
                  }
            }
      }
}

appendCustomClass("cardlayout", "container--spacing", "mob-flxdir--row");
appendCustomClass("latestarticle", "container--spacing", "container-brdr--bot");
checkNAddBGClass("ricsinfographic", "container--spacing", "bg--offwhite");
checkNAddBGClass("ricsartcf--scndry", "container--spacing", "bg--sclyt", true);