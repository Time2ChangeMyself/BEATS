const playButton = document.querySelector('#play-pause');
const video = document.querySelector('.work__video');
const playCurrentBar = document.querySelector('.controls__current-bar');
const volumeCurrentBar = document.querySelector('.controls__volume-current-bar');
const volumeFullBar = document.querySelector('.controls__volume-full-bar')
const dot = document.querySelector('.controls__dot');

console.log(video.volume)




const togglePlayPause = () => {
  if(video.paused) {
    playButton.classList.add('play');
    playButton.classList.remove('pause')
    video.play();
  } else {
    playButton.classList.remove('play');
    playButton.classList.add('pause');
    video.pause();
  }
}

playButton.addEventListener('click', e => {
  e.preventDefault();
  togglePlayPause()
})

video.addEventListener('timeupdate', e => {
  let dotPosition = video.currentTime / video.duration;
  playCurrentBar.style.width = dotPosition*100 +"%";
  // volumeCurrentBar.style.width = *100 +"%";
  dot.style.left = dotPosition*100 +"%";

})

volumeFullBar.addEventListener('click', e => {
  console.log(e);
  let currentStyle = window.getComputedStyle(volumeFullBar)
  let volumeBarWidth = parseInt(currentStyle.getPropertyValue('width'));
  video.volume = e.offsetX / volumeBarWidth; 
  const volumeDot = document.querySelector('.controls__dot-volume');
  volumeDot.style.left = video.volume*100 + "%";
  volumeCurrentBar.style.width = video.volume*100 + "%";
})
