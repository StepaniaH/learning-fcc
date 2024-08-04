// The purpose of this code is to generate a pyramid-shaped pattern composed od characters and print it to the console.

// Variable Definitions
const character = "!";
const count = 10;
const rows = [];
let inverted = false;

// Defining the Function to Pad Rows
function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

// Generating Each Level of the Pyramid
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(
      padRow(i, count),
    ); /*The `unshift` method adds elements to the beginning of the array */
  } else {
    rows.push(
      padRow(i, count),
    ); /*The `push` method adds elements to the end of the array */
  }
}

// Concatenating the Result and Outputting
let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
