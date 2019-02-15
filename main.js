    var songs = ["Chainsmokers.mp3","Alesso.mp3","Jonas Blue.mp3", "Robotaki.mp3"];
    var poster = ["img/chainsmokersbg.jpg","img/alesso.jpg","img/jonasblue.jpg", "img/robotaki.jpg"];
      
    var songTitle = document.getElementById("songTitle");
    var fillBar = document.getElementById("fill");
      
    var song = new Audio();
    var currentSong = 0;
    
    window.onload = playSong;
      function playSong(){
          
          song.src = songs[currentSong];
          
          songTitle.textContent = songs[currentSong];
          song.play();
          
      }
      
       function playOrPauseSong(){
           
           if(song.paused){
               song.play();
               $("#play img").attr("src","img/Pause.png");               
           }
           else{
               song.pause();
               $("#play img").attr("src","img/Play.png");  
               
           }
        }
      song.addEventListener('timeupdate', function(){
          
        var position = song.currentTime / song.duration;  
        fillBar.style.width = position *100 + '%';
       
      });

      $("#handle").bind("change", function() {
		song.currentTime = $(this).val();
		$("#handle").attr("max", song.duration);
	});
      
      function next(){
          
        currentSong++; 
        if(currentSong > 3){
            currentSong = 0;
            
        }
        
        playSong();
        $("#play img").attr("src","img/Pause.png");
        $("#image img").attr("src",poster[currentSong]);
        $("#bg img").attr("src",poster[currentSong]);
        
      }
      
      function pre(){
          
        currentSong--; 
        if(currentSong < 0){
            currentSong = 3;
            
        }
        
        playSong();
        $("#play img").attr("src","img/Pause.png");
        $("#image img").attr("src",poster[currentSong]);
        $("#bg img").attr("src",poster[currentSong]);
        
      }
