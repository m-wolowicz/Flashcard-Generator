//Basic flashcards, which have a front "Who was the first president of the United States?", and a back "George Washington"

//Define a Node module that exports a constructor for creating basic flashcards:
module.exports = BasicCard;

//Constructor for the basic flash cards
// The constructor should accept two arguments
var BasicCard = function(front, back) {
	// contains the text on the front of the card.
	this.front = front;
	// contains the text on the back of the card.
	this.back = back;
};


// Couldn't I just do the following:
// exports.BasicCard = function(front, back) {
// 	this.front = front;
// 	this.back = back;
// };

//Remember to require this in the main file
// var basicCard = require("./BasicCard.js");
