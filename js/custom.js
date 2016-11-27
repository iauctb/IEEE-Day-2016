// Typed.js
$(function(){
   $("#intro .typed span").typed({
      strings: ["مهندسان برق", "مهندسان الکترونیک", "مهندسان کامپیوتر", "مهندسان مخابرات", "دانشجویان برق", "دانشجویان الکترونیک", "دانشجویان کامپیوتر", "دانشجویان مخابرات", "اساتید دانشگاه", "همه‌", "همه‌ی دانشجویان", "دانشگاه آزاد تهران مرکزی"],
      typeSpeed: 80,
      backDelay: 1000,
      shuffle: true,
      loop: true,
   });
});

// Soft Scroll
$(function(){
   var pattern = /^(#)\w+/;

   $('a').on('click', function(event){
      $anchor = $(this).attr('href');
      if ( pattern.test($anchor) ) {
         $('html, body').stop().animate({
            scrollTop: $($anchor).offset().top
         }, 1000, 'swing');
         event.preventDefault();
      }
   })

});


// Owl carousel
$(function(){
  $(".owl-carousel").owlCarousel({
     loop: true,
     rtl:true,
     responsive:{
        0:{
            items: 3
        },
        768:{
            items: 5
        },
        992:{
            items: 8
        },
        1200:{
            items: 9
        }
    }
 });
});


// ATV Image
if ( $(window).outerWidth() > 768 ) {
   atvImg();
}

// countdown
$(function() {
   countdown(year,month,day,hour,minute)
})


// Google Map
var params;
window.onload = function () {

    //if (typeof google !== "undefined"){
    if (window.google && google.maps) {
        // Map script is already loaded
        console.log("Map script is already loaded. Initialising...");
        initializeMap();
    } else {
        console.log("Lazy loading Google map...");
        lazyLoadGoogleMap();
    }

};

function initialize(params) {
  var isDraggable = !('ontouchstart' in document.documentElement);
  var office = new google.maps.LatLng(35.76205957, 51.33975732);
  var mapOptions = {
      center: office,
      zoom: 15,
      scrollwheel: false,
      draggable: isDraggable,
      mapTypeControl: false,
      streetViewControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);

  var marker = new google.maps.Marker({
      position: office,
      map: map,
      title: "دانشگاه آزاد تهران مرکز",
      icon:'img/pointer.png'
  });
  marker.setMap(map);
}

function lazyLoadGoogleMap() {
  $.getScript("http://maps.google.com/maps/api/js?language=fa&callback=initializeMap")
  .done(function (script, textStatus) {
      console.log("Google map script loaded successfully");
  })
  .fail(function (jqxhr, settings, ex) {
      console.log("Could not load Google Map script: " + jqxhr);
  });
}

function initializeMap() {
  initialize(params);
}
