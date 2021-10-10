// TODO: "before input" behaves unexpectedly, one input behind in what is currently in inputBox;

const timer = document.querySelector(".timer");
const prompt = document.querySelector(".prompt");
const inputBox = document.querySelector("input");
const startButton = document.querySelector(".start-button");

inputBox.addEventListener("beforeinput", onUserKey);
startButton.addEventListener("click", start);

var currentInput = ""; // user state variables
var currentIndex = 0;

testSentenceArray = [
  "The ",
  "dog ",
  "jumped ",
  "the ",
  "over ",
  "the ",
  "moon.",
];

function start() {
  //test function
  inputBox.value = "";
  currentInput = "";
  currentIndex = 0;
  console.log("script has started");
}

function log() {
  console.log("length of testSentenceArray is ", testSentenceArray.length);
  console.log("currentIndex is ", currentIndex);
  console.log("currentInput is ", currentInput);
  console.log();
}

function victory() {
  // test function
  console.log("victory!");
}

function onUserKey() {
  log();
  currentInput = inputBox.value;
  if (inputBox.value == testSentenceArray[currentIndex]) {
    currentIndex++;
    currentInput = "";
  }
  if (currentIndex == testSentenceArray.length - 1) {
    console.log("congratulations");
    return;
  }
  return;
}
