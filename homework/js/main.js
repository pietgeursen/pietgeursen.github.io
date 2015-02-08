var quote = {
	quote: '',
	character: ''
}

function Quote(quote, character){
	this.quote = quote;
	this.character = character;
}

Quote.prototype = quote;

quotes = [
	new Quote("Ah, nice marmot.","Dude"),
	new Quote("Obviously you're not a golfer.","Dude"),
	new Quote("Don't be fatuous, Jeffrey.",""),
	new Quote("That must be exhausting.",""),
	new Quote("Eight-year-olds, Dude.",""),
	new Quote("And let's also not forget--let's not forget, Dude--that keeping wildlife, uh, an amphibious rodent, for uh, you know, domestic, within the city--that ain't legal either.",""),
	new Quote("I'm sorry, I wasn't listening.",""),
]

console.log(quotes[0]);

function clearGallery(){
	$("#gallery" ).html("");	
}

function appendQuoteToGallery(quote, gallery){
	gallery.append("<li><p class=\"quote\">\"" + quote.quote + "\"</p><p class=\"character\">" + quote.character + "</p></li>");
}

var gallery = $("#gallery");

clearGallery();
appendQuoteToGallery(quotes[0], gallery);



