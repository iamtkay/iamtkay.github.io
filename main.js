var quotesArray = [
 //"today is the most important day of my life.",
 "forever a student of the game.",
 "i'm trying to keep it alive and not compromise the feeling we love. you trying to keep it deprived and only co-sign what radio does - kendrick lamar"
];

$(document).ready(function(){

  // ========
  // QUOTE 
  // ========
  var numOfQuotes          = quotesArray.length;
  var randomQuoteFromArray = quotesArray[Math.floor(Math.random()*numOfQuotes)];
  
  $('.main-quote').append(randomQuoteFromArray);

  // =========
  // NAVBAR 
  // =========
  $('.navbar > ul > li, .main-heading').click(function(){
    $('html, body').animate({
        scrollTop: 710
    }, 500);
  });

  // =======================
  // SCROLL TOP TOP TRIGGER
  // =======================

  $('.scroll-to-top-trigger').click(function(){
    $('html, body').animate({
        scrollTop: 0
    }, 500);
  });

});