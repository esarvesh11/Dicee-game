var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png"); //images/dice1.png - images/dice6.png

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png"); //images/dice1.png - images/dice6.png

//Player 1 Wins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
//Player 2 WIns
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
//Draw
else{
    document.querySelector("h1").innerHTML = "Draw!📍";
}

