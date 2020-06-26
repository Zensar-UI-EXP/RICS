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

var videoElement, playerid;
function playricsVideo(thisElement, youtubePlayer) {
      checkNPlay(thisElement.parentNode, youtubePlayer)
}

function checkNPlay(parentNode, youtubePlayer){
      var classnameList = [];
      var localNameList = [];
      if (parentNode) {
            for (var i = 0; i < parentNode.childNodes.length; i++) {
                  if (parentNode.childNodes[i].classList && parentNode.childNodes[i].classList.length) {
                        classnameList.push(parentNode.childNodes[i].classList.toString());
                  } else {
                        classnameList.push("");
                  }
                  localNameList.push(parentNode.childNodes[i].localName);
            }
            var videoIndex = classnameList.indexOf("ricsartimgntxt__video");
            var videoPosterIndex = localNameList.indexOf("picture");
            var playIconIndex = classnameList.indexOf("icon icon--play");
            if (videoPosterIndex > -1) {
                  parentNode.childNodes[videoPosterIndex].style.display = "none";
            }
            if (playIconIndex > -1) {
                  parentNode.childNodes[playIconIndex].style.display = "none";
            }
            if (videoIndex > -1) {
                  if (youtubePlayer) {
                        playYTVideo(parentNode.childNodes[videoIndex]);
                  } else {
                        parentNode.childNodes[videoIndex].play();
                  }
            } else {
                  parentNode = parentNode.parentNode;
                  checkNPlay(parentNode, youtubePlayer);
            }
      }
}

var player = {};
var ytPlayerIndex = 0;
function playYTVideo(videoElement) {
      videoElement = videoElement;
      playerid = 'player' + ytPlayerIndex;
      var videoURL = videoElement.attributes.datasrc.nodeValue.split('v=')[1];
      videoElement.innerHTML = "<div id='" + playerid + "' datasrc='" + videoURL + "'></div>";
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[ytPlayerIndex];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function getVideoId(){
      return document.getElementById(playerid).attributes.datasrc.nodeValue;
};

function onYouTubeIframeAPIReady() {
      player[ytPlayerIndex] = new YT.Player(playerid, {
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
      ytPlayerIndex++;
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
      // bodyElement.classList.add("fixed--body");
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

function appendCustomClass(elementClassName) {
      var elements = document.getElementsByClassName(elementClassName);
      if (elements.length) {
            var checkClass = elements[0].attributes.datacheckclass ? elements[0].attributes.datacheckclass.nodeValue : "container--spacing";
            var addClass = elements[0].attributes.dataaddclass ? elements[0].attributes.dataaddclass.nodeValue : "mob-flxdir--row";
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

appendCustomClass("cardlayout");
// appendCustomClass("latestarticle", "container--spacing", "container-brdr--bot");
// checkNAddBGClass("ricsinfographic", "container--spacing", "bg--offwhite");
// checkNAddBGClass("ricsartcf--scndry", "container--spacing", "bg--sclyt", true);

function hidecookieElement () {
      var cookieElement = document.getElementsByClassName("ricscookies");
      if (cookieElement.length) {
            cookieElement[0].style.display = "none";
      }
}

function getCookies(){
      var pairs = document.cookie.split(";");
      var cookies = {};
      for (var i=0; i<pairs.length; i++){
        var pair = pairs[i].split("=");
        cookies[(pair[0]+'').trim()] = unescape(pair.slice(1).join('='));
      }
      if (cookies["AcceptRICSCookie"]) {
            hidecookieElement();
      }
      // return cookies;
}

function checkNSetCookies() {
      var myDate = new Date();
      myDate.setMonth(myDate.getMonth() + 12);
      console.log(myDate);
      document.cookie = "AcceptRICSCookie=1; expires= "+ myDate +"; path=/";
      hidecookieElement();
}

getCookies();

function calculateWidth() {
      var propertyElementList = document.getElementsByClassName("propertylist__cont");
      var applyStyleElement = document.getElementsByClassName("propertylist__inner");
      var calculateWidth = propertyElementList.length * 265;
      if (calculateWidth && applyStyleElement.length && window.innerWidth <= 768) {
            applyStyleElement[0].style.width = calculateWidth + "px";
      } 
}

calculateWidth();

function validateEmail (emailAddress) {
      var emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(emailAddress);
}

function validateNameEmail(e, thisElement){
      var nameElement = document.getElementById("ricsNewslettername");
      var emailElement = document.getElementById("ricsNewsletteremail");
      var elementClassname = "info";
      var msgElements = document.getElementsByClassName("ricsnewsltr__messagecontainer");
      var subscrbeSuccessElement = document.getElementsByClassName("ricsnewsltr__subscribsuccess");
      var formEelment = document.getElementsByClassName("ricsnewsltr__form");
      var validate = true;
      for (var i = 0; i < msgElements.length; i++) {
            msgElements[i].style.display = "none";
      }
      if (!nameElement.value && !emailElement.value){
            elementClassname = "error--namenemail";
            nameElement.focus();
            validate = false;
      } else if (!nameElement.value) {
            elementClassname = "error--name";
            nameElement.focus();
            validate = false;
      } else if (!emailElement.value) {
            elementClassname = "error--email";
            emailElement.focus();
            validate = false;
      } else if (!validateEmail(emailElement.value)) {
            elementClassname = "error--validemail";
            emailElement.focus();
            validate = false;
      }
      if (!validate) {
            var displayMsgElement = document.getElementsByClassName(elementClassname);
            displayMsgElement[0].style.display = "block";
            thisElement.setAttribute("disabled", true);
            e.preventDefault();
      } else {
            formEelment[0].style.display = "none";
            subscrbeSuccessElement[0].style.display = "block";
            e.preventDefault();
      }
}

function unsubscribe(e) {
      var subscrbeSuccessElement = document.getElementsByClassName("ricsnewsltr__unsubscribsuccess");
      var formEelment = document.getElementsByClassName("ricsnewsltr__form");
      formEelment[0].style.display = "none";
      subscrbeSuccessElement[0].style.display = "block";
      e.preventDefault();
}

function removedisable () {
      var newsletterButtonElement = document.getElementsByClassName("ricsnewsltr__btn");
      if (newsletterButtonElement.length) {
            newsletterButtonElement[0].removeAttribute("disabled");
      }
}

function onlyAlphabets(e, t) {
      try {
            if (window.event) {
                  var charCode = window.event.keyCode;
            }
            else if (e) {
                  var charCode = e.which;
            }
            else { return true; }
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
                  return true;
            else
                  return false;
      }
      catch (err) {
          console.log(err.Description);
      }
}

function checkNAddRemoveClass(parentNode, checkClass, addClass) {
      if (parentNode.classList.contains(checkClass)) {
            if (parentNode.classList.contains(addClass)){
                  parentNode.classList.remove(addClass);
            } else {
                  parentNode.classList.add(addClass);
            }
            
      } else {
            parentNode = parentNode.parentNode;
            checkNAddRemoveClass(parentNode, checkClass, addClass);
      }
}

function expandCollapse(thisElement) {
      checkNAddRemoveClass(thisElement, "filtersection__options", "filtersection--collapsed");
}

var dropdownElement = document.querySelector(".dropdown");
if (dropdownElement){
      dropdownElement.onclick = function(e){
            for (var i = 0; i < e.srcElement.childNodes.length; i++){
                  if (e.srcElement.childNodes[i].nodeName.toLowerCase() == "select"){
                        e.srcElement.childNodes[i].select();
                  }
            }
      }
}

var selectedFilterList = [];
var thisElementList = [];
function selectFilter(thisElement, removeValue) {
      var filterText = "";
      var inputIndex = -1;
      var removeValue = document.body.clientWidth < 768 ? true : removeValue;
      for (var i = 0; i < thisElement.childNodes.length; i++){
            if (thisElement.childNodes[i].offsetWidth || document.body.clientWidth < 768) {
                  if (thisElement.childNodes[i].name && thisElement.childNodes[i].nodeName.toLowerCase() === "input"){
                        inputIndex = i;
                        filterText += thisElement.childNodes[i].name + ':';
                  } else if (thisElement.childNodes[i].innerText) {
                        filterText += thisElement.childNodes[i].innerText;
                  }
            }
      }
      var index = selectedFilterList.indexOf(filterText);
      if (index === -1) {
            selectedFilterList.push(filterText);
            thisElement.childNodes[inputIndex].checked = true;
            thisElementList.push(thisElement);
      } else {
            if (removeValue) {
                  selectedFilterList.splice(index, 1);
                  thisElement.childNodes[inputIndex].checked = false;
                  thisElementList.splice(index, 1);
            } else {
                  selectedFilterList[index] = "";
                  thisElement.childNodes[inputIndex].checked = false;
                  selectedFilterList[index] = "";            
            }
      }
      generateFilterHTML();
}

function generateFilterHTML () {
      if (document.body.clientWidth > 768) {
            appliedFilterElement = document.getElementsByClassName("filtersection--appliedfilterdesktop"); 
      } else {
            appliedFilterElement = document.getElementsByClassName("filtersection--appliedfiltermobile");
      }
      var clearAllFilterElement = document.getElementsByClassName("filtersection__clearall");
      var closeElement = document.getElementsByClassName("filtersection--onlyclose");
      var applyCloseElement = document.getElementsByClassName("filtersection--applyclose");
      if (selectedFilterList.length) {
            appliedFilterElement[0].style.display = "block";
            clearAllFilterElement[0].style.display = "block";
            closeElement[0].style.display = "none";
            applyCloseElement[0].style.display = "block";
            applyCloseElement[1].style.display = "block";
      } else {
            appliedFilterElement[0].style.display = "none";
            clearAllFilterElement[0].style.display = "none";
            closeElement[0].style.display = "block";
            applyCloseElement[0].style.display = "none";
            applyCloseElement[1].style.display = "none";
      }
      var filterHTML = "";
      for (var i = 0; i < selectedFilterList.length; i++){
            if (selectedFilterList[i]) {
                  var splitValue = selectedFilterList[i].split(":");
                  filterHTML += "<li class='filtersection__appliedfilterlist'>";
                  filterHTML += "<label class='filtersection__appliedfilterkey'>" + splitValue[0] + ":</label>";
                  filterHTML += "<strong class='filtersection__appliedfiltervalue'>" + splitValue[1] + "</strong>";
                  filterHTML += "<a href='javascript:void(0)' class='filtersection__clearfilter' title='Clear "+ selectedFilterList[i] +"' onclick='clearFilter("+ i +", true)'></a></li>";
            }
      }
      appliedFilterElement[0].innerHTML = filterHTML;
}

function clearFilter (index, removeValue) {
      selectFilter(thisElementList[index], removeValue);
}

function clearAllFilter () {
      for (var i = 0; i < selectedFilterList.length; i++){
            clearFilter(i, false);
      }
      selectedFilterList = [];
      thisElementList = [];
      generateFilterHTML();
}

function openFilter(thisElement){
      thisElement.classList.add("special--refineactive");
      var filterElement = document.getElementsByClassName("filtersection");
      filterElement[0].style.display = "block";
      document.body.classList.add("fixed--layout");
}

function closeFilter(){
      var refineElement = document.getElementsByClassName("special--refineactive");
      refineElement[0].classList.remove("special--refineactive");
      var filterElement = document.getElementsByClassName("filtersection");
      filterElement[0].style.display = "none";
      document.body.classList.remove("fixed--layout");
}
