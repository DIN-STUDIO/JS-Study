// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const title = document.getElementsByTagName("h2");

title[0].addEventListener("mouseenter", onMouseEnter);
title[0].addEventListener("mouseleave", onMouseLeave);
window.addEventListener("contextmenu", onRightClk);
window.addEventListener("resize", onResize);

// console.log(title[0])

function onMouseEnter() {
  title[0].innerHTML = "Mouse is here~";
  title[0].style.color = colors[0]; // 초록색
}

function onMouseLeave() {
  title[0].innerHTML = "Mouse is gone~";
  title[0].style.color = colors[1]; // 파란색
}

function onRightClk(event) {
  event.preventDefault();
  title[0].innerHTML = "Mouse is right clicked";
  title[0].style.color = colors[2];
}

function onResize() {
  title[0].innerHTML = "Browser is resized";
  title[0].style.color = colors[3];
}

const superEventHandler = {
  onMouseEnter,
  onMouseLeave,
  onRightClk,
  onResize
};
