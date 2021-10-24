const timer = document.querySelector(".timer");
const prompt = document.querySelector(".prompt");
const inputBox = document.querySelector("input");
const startButton = document.querySelector(".start-button");
// const txtgen = require("txtgen");
// const sentence = txtgen.sentence();
// alert(sentence);

inputBox.addEventListener("input", onUserKey); // run procedures each time key is entered into box
startButton.addEventListener("click", startTimer); // refresh state to default

var currentInput = ""; // user state variables
var currentIndex = 0;
var refreshIntervalID;
var totalTime = 90000;
var testStarted = false;

const testSentenceArray = ["The ", "dog ", "jumped ", "over ", "the ", "moon."];

function onUserKey() {
  currentInput = inputBox.value;
  if (!testStarted) {
    return;
  }

  if (inputBox.value == testSentenceArray[currentIndex]) {
    currentIndex++;
    // currentInput = "";
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
  console.log("refreshIntervalID is ", refreshIntervalID);
}

function reset() {
  testStarted = false;
  inputBox.value = "";
  currentInput = "";
  currentIndex = 0;
  console.log("state reset");
  clearInterval(refreshIntervalID);
  totalTime = 90000;
  log();
}

function victory() {
  let wpm = findWPM(totalTime);
  console.log(`Victory, you got ${wpm} WPM!`);
  reset();
}

function startTimer() {
  reset();
  testStarted = true;
  refreshIntervalID = setInterval(printTime, 1000);

  function printTime() {
    console.log("print time");
    totalTime = totalTime - 1000;
    if (totalTime == 0) {
      reset();
    }
    timer.innerText = formatTime(totalTime);
  }
  function formatTime(ms) {
    let sec = Math.floor(ms / 1000);
    let min = Math.floor(sec / 60);
    sec = sec % 60;
    min = min % 60;
    if (sec.toString().length < 2) {
      sec = "0" + sec;
    }
    return min + ":" + sec;
  }
}

function findWPM(ms) {
  let elapsedTime = (90000 - ms) / 60000;
  let totalWords = testSentenceArray.length;
  let wpm = (totalWords / elapsedTime).toFixed(1);
  return wpm;
}
