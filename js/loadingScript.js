$(document).ready(function(){
  console.log('Ready!!!');

  loadingFontSize();

});


function loadingFontSize() {

  $('h1').toggleClass("loaded");
  $('header').css("width", "220px")

}