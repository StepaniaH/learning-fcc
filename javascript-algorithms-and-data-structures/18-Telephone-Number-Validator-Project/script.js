const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

function validatePhoneNumber(number) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
  return regex.test(number);
}

checkBtn.addEventListener("click", () => {
  const phoneNumber = userInput.value.trim();

  if (!phoneNumber) {
    alert("Please provide a phone number");
    return;
  }

  const isValid = validatePhoneNumber(phoneNumber);
  resultsDiv.textContent = isValid
    ? `Valid US number: ${phoneNumber}`
    : `Invalid US number: ${phoneNumber}`;
});

clearBtn.addEventListener("click", () => {
  userInput.value = "";
  resultsDiv.textContent = "";
});
