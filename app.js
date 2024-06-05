const btnGenerate = document.getElementById("button-submit");
const passwordOutput = document.getElementById("password-output");

const combinedArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "?",
  "!",
  "$",
  "&",
  "@",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

let password = [];

function dashInsert(password) {
  return password.match(/.{1,4}/g).join("-");
}

function passwordGenerator() {
  passwordOutput.innerText = "";
  for (let i = 0; i <= 11; i++) {
    password.push(
      combinedArray[Math.floor(Math.random() * combinedArray.length)]
    );
  }
  passwordOutput.innerText = dashInsert(password.join(""));
}

btnGenerate.addEventListener("click", () => {
  password = [];
  passwordOutput.innerText = "Generating...";
  setTimeout(() => {
    passwordGenerator();
  }, 2000);
});
