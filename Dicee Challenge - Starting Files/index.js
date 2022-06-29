var name1= prompt("Enter Player 1 Name");
var name2=prompt("Enter Player 2 Name");
player1=document.querySelectorAll("p")[0].innerHTML=name1;
player2=document.querySelectorAll("p")[1].innerHTML=name2;


var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
var imageName1="dice"+ randomNumber1+ ".png";
var imageSource1="images/"+imageName1;
document.querySelectorAll("img")[0].setAttribute("src",imageSource1);

var randomNumber2=Math.floor(Math.random()* 6) +1 ;
var imageName2="dice"+randomNumber2+".png";
var imageSource2="images/"+imageName2;
document.querySelectorAll("img")[1].setAttribute("src",imageSource2);

if (randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML=player1 + " Wins!! 🥳";
}
else if (randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML=player2 +" Wins!! 🥳";
}
else{
  document.querySelector("h1").innerHTML="DRAW!! 😐";
}
