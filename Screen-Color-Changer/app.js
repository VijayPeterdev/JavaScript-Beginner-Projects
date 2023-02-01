const button = document.querySelector("button");

const body = document.querySelector("body");

const color = ["red", "green", "yellow", "pink", "orange", "rose"];

const ColorChange = () => {
  randomNumber = parseInt(Math.random() * color.length);

  body.style.backgroundColor = color[randomNumber];
};
