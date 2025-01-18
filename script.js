setUpMainMenu();


function setUpMainMenu(){
  document.getElementById("image_1").src = "images/"+["spades","diamonds","hearts","clubs"][Math.floor(Math.random()*4)]+"/"+["A",2,3,4,5,6,7,8,9,0,"J","Q","K"][Math.floor(Math.random()*13)]+".png";
  document.getElementById("image_2").src = "images/"+["spades","diamonds","hearts","clubs"][Math.floor(Math.random()*4)]+"/"+["A",2,3,4,5,6,7,8,9,0,"J","Q","K"][Math.floor(Math.random()*13)]+".png";
  document.getElementById("image_3").src = "images/"+["spades","diamonds","hearts","clubs"][Math.floor(Math.random()*4)]+"/"+["A",2,3,4,5,6,7,8,9,0,"J","Q","K"][Math.floor(Math.random()*13)]+".png";
  document.getElementById("image_4").src = "images/"+["spades","diamonds","hearts","clubs"][Math.floor(Math.random()*4)]+"/"+["A",2,3,4,5,6,7,8,9,0,"J","Q","K"][Math.floor(Math.random()*13)]+".png";
}
