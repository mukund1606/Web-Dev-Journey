var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var player1 = document.getElementsByClassName('img1')[0];
var player2 = document.getElementsByClassName('img2')[0];
player1.setAttribute('src', "./images/Dice"+randomNumber1+".png");
player2.setAttribute('src', "./images/Dice"+randomNumber2+".png");

if(randomNumber1 > randomNumber2){
  document.querySelector('h1').innerHTML = "🚩 Player 1 Won";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector('h1').innerHTML = "Player 2 Won 🚩";
}
else{
  document.querySelector('h1').innerHTML = "It's a Draw";
}