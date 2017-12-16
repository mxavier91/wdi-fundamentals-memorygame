console.log("Up and running!");


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne)
var cardTwo = cards[2];
cardsInPlay.push(cardTwo)

console.log("User flipped queen")
console.log("User flipped king")

if (cardsInPlay.length === 2){
	alert("true")
}
if (cardsInPlay[0] === cardTwo){
	alert("You found a Match");
}
else{
	alert("Sorry, try again")
}