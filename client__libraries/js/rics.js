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
      var i;
      var x = document.getElementsByClassName("slider__img");
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      x[slideIndex-1].style.display = "block";  
}