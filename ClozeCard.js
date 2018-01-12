//Cloze-Deleted flashcards, which present partial text "... was the first president of the United States.", and the full text when the user requests it "George Washington was the first president of the United States."

//Define a Node module that exports a constructor for creating cloze-deletion flashcards:
module.exports = ClozeCard;

//Constructor for the cloze-deletion flashcards
// The constructor should accept two arguments: "text" and "cloze".
var ClozeCard = function(text, cloze) {
	this.text = text;
	//Cloze property that contains only the cloze-deleted portion of the text.
	this.cloze = cloze;
	//The constructed object should have a partial property that contains only the partial text.

	//The constructed object should have a fullText property that contains only the full text.

	//The constructor should throw or log an error when the cloze deletion does not appear in the input text.

};
