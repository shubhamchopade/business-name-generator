const firstWord = document.getElementById("first-word");
const secondWord = document.getElementById("second-word");
const btn = document.getElementById("btn");
const btnPush = document.getElementById("btnPush");
const btnClr = document.getElementById("clearAll");
const displayWord = document.getElementById("final-word");
const wordListOne = document.getElementById("word-list-one");
const wordListTwo = document.getElementById("word-list-two");
const output = document.querySelector('.output')
let firstHalf = [];
let secondHalf = [];
let word;

btn.style.display = "none";
output.style.display = 'none'

btnPush.addEventListener("click", addToList);

function addToList() {
  if (firstWord.value == "" || secondWord.value == "") {
    btnPush.style.backgroundColor = "#F56566";
    firstWord.focus();
    alert("Fill both values");
  } else {
    strToArr(firstWord.value, firstHalf, wordListOne);
    strToArr(secondWord.value, secondHalf, wordListTwo);
    firstWord.value = "";
    secondWord.value = "";
    btnPush.style.backgroundColor = "#C8FDB5";
    btn.style.display = "block";
    output.style.display = "block";
    btn.focus();
  }
}

function strToArr(str, arrPush, wordList) {
  var splited = str.split(",");
  var uniq = [...new Set(splited)];
  uniq.filter((a) => arrPush.push(a));
  wordList.innerHTML += ` ${uniq}`;
}



btn.addEventListener("click", brandWord);

function brandWord() {
  var fullName;
  let maxNum1 = Math.floor(Math.random() * firstHalf.length);
  let maxNum2 = Math.floor(Math.random() * secondHalf.length);
  if (firstHalf[maxNum1] === secondHalf[maxNum2]) {
    return (fullName = firstHalf[maxNum1]);
  }
  fullName = firstHalf[maxNum1] + secondHalf[maxNum2];
  displayWord.innerHTML = fullName;
  btnPush.style.backgroundColor = "#FF8784";
}

document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    brandWord();
  }
};


btnClr.addEventListener("click", clearLists);
btnClr.style.backgroundColor = "#F56566";
btnClr.style.marginBottom = "60px";

function clearLists() {
  displayWord.innerHTML = "";
  wordListOne.innerHTML = "";
  wordListTwo.innerHTML = "";
  firstHalf = [];
  secondHalf = [];
}
