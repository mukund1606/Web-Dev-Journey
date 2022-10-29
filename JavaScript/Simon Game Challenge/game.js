var gamePatern = [];
var userClickedPattern = [];
var level = 0;

var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence(){
  level++;
  $('h1').text('Level '+ level);
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePatern.push(randomChosenColour);
  $('#'+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio('./sounds/' + randomChosenColour + '.mp3')
  audio.play();
  userClickedPattern = [];
}

$('.btn').click(function (){
  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  var audio = new Audio('./sounds/' + userChosenColor + '.mp3')
  audio.play();
  animatePress(userChosenColor);
  checkAnswer(level);
})

function checkAnswer(currentLevel){
  if(gamePatern.length == userClickedPattern.length){
    for(var i = 0; i < currentLevel; i++){
      if(gamePatern[i] != userClickedPattern[i]){
        gamePatern = [];
        level = 0;
        $('h1').text('Game Over, Press Any Key to Restart');
        $('body').toggleClass("game-over");
        setTimeout(()=>$('body').toggleClass("game-over"),200)
        return;
      }
    }
    setTimeout(nextSequence, 1000);
  }
  else{
    for(var i = 0; i < userClickedPattern.length; i++){
      if(gamePatern[i] != userClickedPattern[i]){
        level = 0;
        gamePatern = [];
        $('body').toggleClass("game-over");
        setTimeout(()=>$('body').toggleClass("game-over"),200)
        $('h1').text('Game Over, Press Any Key to Restart ');
      }
    }
  }
}

function animatePress(currentColor){
  $('#'+currentColor).toggleClass('pressed')
  setTimeout(()=>{
  $('#'+currentColor).toggleClass('pressed')
},100);
}

$(document).keydown(function (){
  if(level === 0){
    nextSequence();
  }
});