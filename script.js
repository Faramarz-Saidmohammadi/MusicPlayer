const musicContainer = document.getElementById('music-container');
const title = document.getElementById('title');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const audio = document.getElementById('audio');
const cover = document.getElementById('cover');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Songs 
const songs = ['hey' , 'summer' , 'ukulele'];

// SelectedMusic
let selectedSong = 2;

loadSong(songs[selectedSong]);

// loadSong
function loadSong(song){
  title.innerHTML = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`
}

function updateSong(){
  const isPlaying = musicContainer.classList.contains('play');

  if(isPlaying){
    pauseSong();
  } else {
    playSong();
  }

}

// playSong function
function playSong(){
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
 
  audio.play();
}
// playSong function
function pauseSong(){
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  playBtn.querySelector('i.fas').classList.add('fa-play');
 
  audio.pause();
}

// previous song
function prevSong(){
  selectedSong--;
  if(selectedSong < 0){
    selectedSong = songs.length - 1;
  }

  loadSong(songs[selectedSong]);
  audio.play();
}

// NextSong
function nextSong(){
  selectedSong++;
  if(selectedSong > songs.length - 1){
    selectedSong = 0;
  }

  loadSong(songs[selectedSong]);
  audio.play();
}

// Update Progress Function
function updateProgress(){
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  progress.style.width = `${(currentTime / duration) * 100}%`;

}

// Set Progress Function
function setProgress(e){
  const width = this.clientWidth;
  const offsetX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = `${(offsetX / width) * duration}`;

  
}

// Events

playBtn.addEventListener('click' , updateSong);
prevBtn.addEventListener('click' , prevSong);
nextBtn.addEventListener('click' , nextSong);
audio.addEventListener('timeupdate' , updateProgress);
progressContainer.addEventListener('click' , setProgress);
audio.addEventListener('ended' , nextSong);

