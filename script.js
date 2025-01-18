const CARDS = ["AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "0D", "JD", "QD", "KD", 
               "AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "0C", "JC", "QC", "KC", 
               "AH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "0H", "JH", "QH", "KH", 
               "AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "0S", "JS", "QS", "KS"];
var playingField = [];
var stock = [];
var trash = [];
var foundations = [0,0,0,0];
var hiddenCards = [0,1,2,3,4,5,6];

setUpMainMenu();

function setUpMainMenu(){
  document.getElementById("image_1").src = "images/"+["spades","diamonds","hearts","clubs"][Math.floor(Math.random()*4)]+"/"+["A",2,3,4,5,6,7,8,9,0,"J","Q","K"][Math.floor(Math.random()*13)]+".png";
  document.getElementById("image_2").src = "images/"+["spades","diamonds","hearts","clubs"][Math.floor(Math.random()*4)]+"/"+["A",2,3,4,5,6,7,8,9,0,"J","Q","K"][Math.floor(Math.random()*13)]+".png";
  document.getElementById("image_3").src = "images/"+["spades","diamonds","hearts","clubs"][Math.floor(Math.random()*4)]+"/"+["A",2,3,4,5,6,7,8,9,0,"J","Q","K"][Math.floor(Math.random()*13)]+".png";
  document.getElementById("image_4").src = "images/"+["spades","diamonds","hearts","clubs"][Math.floor(Math.random()*4)]+"/"+["A",2,3,4,5,6,7,8,9,0,"J","Q","K"][Math.floor(Math.random()*13)]+".png";
}

function setUpGame(){
  var remainingCards = CARDS;
  playingField = [];
  stock = [];
  foundations = [0,0,0,0];
  hiddenCards = [0,1,2,3,4,5,6];
  trash = [];
  for(let i = 0; i < 7; i ++){
    playingField.push([]);
    for(let j = 0; j <= i; j ++){
      playingField[i].push(remainingCards.splice(Math.floor(Math.random()*remainingCards.length),1)[0]);
    }
  }
  stock = remainingCards;
  updateScreen();
}

function updateScreen(){
  var maxLength = 0;
  var outputStrings = [];
  for(let i = 0; i < 7; i ++){
    maxLength = Math.max(maxLength, playingField[i].length);
  }
  for(let i = 0; i < maxLength; i ++){
    var string = "";
    for(let j = 0; j < 7; j ++){
      if(playingField[j].length > i){
        if(i >= hiddenCards[j]){
          string += playingField[j][i] + " ";
        } else {
          string += "XX ";
        }
      } else {
        string += "   ";
      }
    }
    outputStrings.push(string);
  }
  for(let i = 0; i < outputStrings.length; i ++){
    console.log(outputStrings[i]);
  }
}