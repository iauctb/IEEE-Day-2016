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

   $('a').each(function(){
      $anchor = $(this).attr('href');
      if ( pattern.test($anchor) ) {
         $(this).on('click', function(event){
            console.log($($anchor));
            $('html, body').stop().animate({
               scrollTop: $($anchor).offset().top
            }, 1000, 'swing');
            event.preventDefault();
         })
      }
   })

});
