const timer = document.querySelector(".timer");
const prompt = document.querySelector(".prompt");
const inputBox = document.querySelector("input");
const startButton = document.querySelector(".start-button");

inputBox.addEventListener("input", onUserKey);
startButton.addEventListener("click", reset); // refresh state to default

var currentInput = ""; // user state variables
var currentIndex = 0;

testSentenceArray = ["The ", "dog ", "jumped ", "over ", "the ", "moon."];

function onUserKey() {
  currentInput = inputBox.value;

  if (inputBox.value == testSentenceArray[currentIndex]) {
    currentIndex++;
    currentInput = "";
    inputBox.value = "";
    if (currentIndex == testSentenceArray.length) {
      log();
      victory();
      return;
    }
  }
  log();
  return;
}

function log() {
  console.log(
    "testSentenceArray has ",
    testSentenceArray.length - 1,
    " indexes"
  );
  console.log("currentIndex is ", currentIndex);
  console.log("currentInput is ", currentInput);
  console.log("current word is ", testSentenceArray[currentIndex]);
}

function reset() {
  inputBox.value = "";
  currentInput = "";
  currentIndex = 0;
  console.log("state reset");
}

function victory() {
  console.log("victory!");
  reset();
}
ad;
