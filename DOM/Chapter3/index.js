//Player 1
var randomNumber1 = Math.floor(Math.random() * 6 +1); //1 -6

var randomImage1 = "dice" + randomNumber1 +".png";//dice1.png to dice6.png

var randomImageSource1 = "images/" +randomImage1;


var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1)

//Player 2
var randomNumber2 = Math.floor(Math.random() * 6 +1); //1 -6

var randomImage2 = "dice" + randomNumber2 +".png";//dice1.png to dice6.png

var randomImageSource2 = "images/" +randomImage2;


var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource2)

//if palyer 1 win
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}

//if palyer 2 win
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
}
//draw math
else{
    document.querySelector("h1").innerHTML = "Draw Math!";
}