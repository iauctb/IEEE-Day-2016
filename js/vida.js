function vida(element) {
   var video = $(element)[0];
   var interval;
   var duration = video.duration;
   var has_hour = true;

   function secToHMS(secs, type) {
      var sec_num = parseInt(secs, 10);
      var hours   = Math.floor(sec_num / 3600);
      var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      var seconds = sec_num - (hours * 3600) - (minutes * 60);

      if ( type == 'duration' && hours == 0) {
         has_hour = false;
      }

      if ( has_hour ) {
         if (hours < 10) {hours   = '0' + hours + ':';}
      } else {
         hours = '';
      }
      if (minutes < 10) {minutes = '0' + minutes + ':';}
      if (seconds < 10) {seconds = '0' + seconds;}
      return hours + minutes + seconds;
   }

   $('.vida-play-duration').text(secToHMS(duration, 'duration'))

   function  updateProgress() {
      $('.vida-play-progressbar .vida-play-passed').css('width', (video.currentTime / duration) * 100 + '%')
      $('.vida-play-elapsed').text(secToHMS(video.currentTime, 'elaped'))
   }

   function playPause() {
       if (video.paused){
          video.play();
          $('.vida-controls .vida-play-icon .gb').removeClass('gb_play_arrow gb_repeat').addClass('gb_pause');
          interval = setInterval(function(){ updateProgress() }, 500);
       } else {
          video.pause();
          $('.vida-controls .vida-play-icon .gb').removeClass('gb_pause').addClass('gb_play_arrow');
          clearInterval(interval)
       }
   }

   video.onended = function(){
      $('.vida-controls .vida-play-icon .gb').removeClass('gb_pause gb_play_arrow').addClass('gb_repeat');
   };

   $('.vida-poster').on('click', function() {
      $('.vida-poster').fadeOut()
      playPause()
   })

   $('.vida-video, .vida-controls .vida-play-icon').on('click', function() {
      playPause()
   })

   $('.vida-play-progressbar').on('click', function(event){
      video.currentTime = ((event.pageX - $(this).offset().left) / $(this).outerWidth()) * duration;
      updateProgress()
   })

}

vida('#video1');
