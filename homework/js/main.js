var quote = {
	quote: '',
	character: '',
	scene: 0,
	swearing: false,

}

function Quote(quote, character, scene, swearing){
	this.quote = quote;
	this.character = character;
	this.scene = scene || 0;
	this.swearing = swearing || false;
}

Quote.prototype = quote;

quotes = {
	quotes: [
	new Quote("Ah, nice marmot.","Dude", 20),
	new Quote("Obviously you're not a golfer.","Dude", 2),
	new Quote("Don't be fatuous, Jeffrey.","Maude", 16),
	new Quote("Ah, that must be exhausting.","Dude", 6),
	new Quote("Eight-year-olds, Dude.","Walter", 11),
	new Quote("And let's also not forget--let's not forget, Dude--that keeping wildlife, uh, an amphibious rodent, for uh, you know, domestic, within the city--that ain't legal either.","Walter", 22),
	new Quote("I'm sorry, I wasn't listening.","Dude", 29),
	new Quote("Fuck sympathy! I don't need your fucking sympathy, man,I need my fucking Johnson!","Dude", 22, true),
	new Quote("Come on Dude. Hey fuck it man. Let's go bowling.","Walter", 40, true),
	new Quote("You said it, man. Nobody fucks with the Jesus.","Jesus", 11, true),
	new Quote("Do you see what happens when you find a stranger in the Alps?","Walter", 26, true),
	],

	sortByCharacter: function(){
		return this.quotes.sort(function(quoteA, quoteB){
			if(quoteA.character < quoteB.character)
				return -1;
			else if(quoteA.character > quoteB.character)
				return 1;
			else
				return 0;
		})
	},

	sortByScene: function(){
		return this.quotes.sort(function(quoteA, quoteB){
			return quoteA.scene - quoteB.scene;
		})
	},

	removeSwearing: function(){
		return this.quotes.filter(function(quote){
			return quote.swearing === false;
		})
	} 

}

function Quotes(quotes){
	this.quotes = quotes || this.quotes
}

Quotes.prototype = quotes;


function clearGallery(){
	$("#gallery" ).html("");	
}

//I could change this to so the html isn't literal somehow. Make a jquery object with the html structure and then just append the correct contents.
function appendQuoteToGallery(quote, gallery){
	gallery.append("<li><p class=\"quote\">\"" + quote.quote + "\"</p><p class=\"character\">" + quote.character + "</p></li>");
}

function appendQuotesToGallery(quotes){
	var gallery = $("#gallery");

	quotes.forEach(function(quote){
		appendQuoteToGallery(quote, gallery);
	})
}

var qs = new Quotes();
qs_clean = new Quotes(qs.removeSwearing());
clearGallery();
appendQuotesToGallery(qs_clean.sortByScene());



