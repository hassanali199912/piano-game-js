const piano_keys = document.querySelectorAll(".piano-keys .key");
const volume_range = document.querySelector(".volume-control input");
const toggle_show_keys = document.querySelector(".toggle-key-showhide input");
const allKeys = [];
const audio = new Audio("tunes/a.wav");

piano_keys.forEach((key) => {
  allKeys.push(key.dataset.note);
  key.addEventListener("click", () => playSound(key.dataset.note));
});

function playSound(key) {
  audio.src = `tunes/${key}.wav`;
  audio.play();
  const keySelected = document.querySelector(`[data-note="${key}"]`);
  keySelected.classList.add("active");
  setTimeout(() => {
    keySelected.classList.remove("active");
  }, 200);
}

function changeVolume(e) {
  audio.volume = e.target.value;
}
function toggleHideShow() {
  piano_keys.forEach((key) => {
    key.classList.toggle("hide");
  });
}

function pressKey(e) {
  allKeys.includes(e.key) && playSound(e.key);
}

addEventListener("keydown", pressKey);
volume_range.addEventListener("input", changeVolume);
toggle_show_keys.addEventListener("click", toggleHideShow);
