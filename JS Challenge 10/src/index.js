const body = document.querySelector("body");
const btn = document.querySelector("button");

const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

function linearColor(){
  const randColorNum1 = Math.floor(Math.random() * 17);
  const randColorNum2 = Math.floor(Math.random() * 17);

  body.style.background = "Linear-Gradient(to right, " + colors[randColorNum1] + ", " + colors[randColorNum2] + ")"
}

btn.addEventListener("click", linearColor);