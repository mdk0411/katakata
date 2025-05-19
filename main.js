const typingArea = document.getElementById("typingArea");
const sound = new Audio("sounds/key1.mp3");

typingArea.addEventListener("input", () => {
  sound.currentTime = 0;
  sound.play();
});
