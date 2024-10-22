const characters = [
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let generatePassword = document.getElementById("generate-password");
let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");

// Function to generate a random password
function getRandomPassword(neededSymbols) {
  let password = [];
  for (let i = 0; i < neededSymbols; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password.push(characters[randomIndex]);
  }
  return password.join(""); // Join array elements to form a string
}

// Event listener to generate passwords when the button is clicked
generatePassword.addEventListener("click", function () {
  let neededSymbols = 15;

  // Generate passwords
  let passOne = getRandomPassword(neededSymbols);
  let passTwo = getRandomPassword(neededSymbols);

  // Display generated passwords
  passwordOne.textContent = passOne;
  passwordTwo.textContent = passTwo;
});
