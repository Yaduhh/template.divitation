const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("play-pause-btn");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");
const disc = document.getElementById("disc");

playPauseBtn.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    disc.classList.add("animate-spin");
} else {
    audio.pause();
    disc.classList.remove("animate-spin");
  }
});

audio.addEventListener("ended", function() {
  playPauseBtn.classList.remove("playing");
});

console.log("Holaaa")
