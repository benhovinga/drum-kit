const soundsFolder = "./sounds/";
const soundsExt = ".mp3";
const drumSounds = {
  w: "tom-1",
  a: "tom-2",
  s: "tom-3",
  d: "tom-4",
  j: "snare",
  k: "crash",
  l: "kick-bass",
};

// Click events
for (const drum of document.querySelectorAll(".drum")) {
  if (drumSounds.hasOwnProperty(drum.innerHTML)) {
    drum.addEventListener("click", function () {
      let audio = new Audio(
        soundsFolder + drumSounds[this.innerHTML] + soundsExt
      );
      audio.play();
      buttonAnimation(this.innerHTML);
    });
  }
}

// Keyboard events
document.addEventListener("keydown", function (event) {
  if (drumSounds.hasOwnProperty(event.key)) {
    let audio = new Audio(soundsFolder + drumSounds[event.key] + soundsExt);
    audio.play();
    buttonAnimation(event.key);
  }
});

// Animate
function buttonAnimation(key) {
  let button = document.querySelector("." + key);
  button.classList.add("pressed");
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 200);
}
