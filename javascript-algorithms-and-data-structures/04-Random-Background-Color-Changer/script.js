/* This code primarily serves the function of changing the webpage background color to a random dark color upon clicking a button */

/* This snippet defines an array darkColorsArr that contains hexadecimal color codes representing various dark colors. */
const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

/* The getRandomIndex function generates a random index for the array. Math.random() produces a random number between 0 and 1.
By multiplying this number by the length of the array (darkColorsArr.length) and using Math.floor() to round down, we obtain a
valid array index. */
function getRandomIndex() {
  const randomIndex = Math.floor(darkColorsArr.length * Math.random());
  return randomIndex;
}

// Accessing DOM Elements
const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

/* The changeBackgroundColor function first calls getRandomIndex to obtain a random index, then selects the corresponding color from
the darkColorsArr array. It updates the text content of bgHexCodeSpanElement to display the selected color code and changes the background
color of the <body> element to this color. */
function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()];

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}

/* Binding the Click Event */
const btn = document.querySelector("#btn");

btn.onclick = changeBackgroundColor;
