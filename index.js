for (const drum of document.querySelectorAll(".drum")) {
  drum.addEventListener("click", function () {
    console.log(drum.className);
  });
}
