var rb = require('../index.js');
var beerList = [];
rb.beerSearch("Dogfish Head", function(beers) {
    beerPages(JSON.parse(beers));
});

function beerPages(beers) {
    //console.log(beers.length);
    for (i = 0; i < beers.length; i++) {
	//console.log(beers[i]);
	rb.beerPage(beers[i]["beer_url"], function(beer) {
	    console.log(beer);
	});
    }
}
