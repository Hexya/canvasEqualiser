// FULL SCREEN
var full =document.querySelector('.full');
full.addEventListener("click",toggleFullScreen);
 function toggleFullScreen() {
   var all = document.querySelector("body");
   if (!document.mozFullScreen && !document.webkitFullScreen) {
     if (all.mozRequestFullScreen) {
       all.mozRequestFullScreen();
     } else {
       all.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
     }
   } else {
     if (document.mozCancelFullScreen) {
       document.mozCancelFullScreen();
     } else {
       document.webkitCancelFullScreen();
     }
   }
 }
