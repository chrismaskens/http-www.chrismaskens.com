$(document).ready(function(){
  console.log('Ready!!!');

  loadingFontSize();

});


function loadingFontSize() {

  $('#h1Header').toggleClass("loaded");
  $('header').css("width", "220px")

}