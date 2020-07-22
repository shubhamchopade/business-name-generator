const firstWord = document.getElementById("first-word");
const secondWord = document.getElementById("second-word");
const btn = document.getElementById("btn");
const btnPush = document.getElementById("btnPush");
const displayWord = document.getElementById("final-word");
const wordListOne = document.getElementById("word-list-one");
const wordListTwo = document.getElementById("word-list-two");
const output = document.querySelector(".output");
let firstHalf = [];
let secondHalf = [];
let word;

clearLists();

btnPush.addEventListener("click", addToList);
btn.addEventListener("click", brandWord);

function addToList() {
  if (btnPush.innerText === "Enter different combination") {
    clearLists();
    firstWord.disabled = false;
    secondWord.disabled = false;
    btnPush.innerText = "Push";
  } else if (firstWord.value == "" || secondWord.value == "") {
    btnPush.style.backgroundColor = "#F56566";
    firstWord.focus();
    alert("Fill both values");
  } else {
    strToArr(firstWord.value, firstHalf, wordListOne);
    strToArr(secondWord.value, secondHalf, wordListTwo);
    firstWord.value = "";
    secondWord.value = "";
    btnPush.innerText = "Enter different combination";
    btn.style.display = "block";
    output.style.display = "block";
    firstWord.disabled = true;
    secondWord.disabled = true;
    btn.focus();
    btnPush.style.backgroundColor = "#B7E39F";
  }
}

function strToArr(str, arrPush, wordList) {
  var splited = str.split(",");
  var uniq = [...new Set(splited)];
  console.log(uniq);
  uniq.filter((a) => arrPush.push(a));
  wordList.innerHTML += ` ${uniq}`;
}

function randomName(firstHalf, secondHalf) {
  var fullName, lastName;
  let randomNumber = (max) => Math.floor(Math.random() * max);
  let maxNum1 = Math.floor(Math.random() * firstHalf.length);
  let maxNum2 = Math.floor(Math.random() * secondHalf.length);
  fullName =
    firstHalf[maxNum1].slice(randomNumber(firstHalf[maxNum1].length)) +
    secondHalf[maxNum2].slice(randomNumber(firstHalf[maxNum1].length));
  if (fullName === lastName) {
    return randomName(firstHalf, secondHalf);
  }
  displayWord.innerHTML = fullName;
  lastName = fullName;
}

function brandWord() {
  randomName(firstHalf, secondHalf);
}

function clearLists() {
  displayWord.innerHTML = "";
  wordListOne.innerHTML = "";
  wordListTwo.innerHTML = "";
  firstHalf = [];
  secondHalf = [];
  btn.style.display = "none";
  output.style.display = "none";
}
