//First Dice
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomImage;

var randomSourceChange = document.querySelectorAll("img")[0];

randomSourceChange.setAttribute("src", randomImageSource);

//Second Dice
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var randomDice = "dice" + randomNumber2 + ".png";

var randomDiceSource = "images/" + randomDice;

var randomDiceSourceChange = document.querySelector("img.img2");

randomDiceSourceChange.setAttribute("src", randomDiceSource)
