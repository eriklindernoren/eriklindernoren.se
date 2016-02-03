var rb = require('../index.js');

rb.config({'proxy': process.env['http_proxy']});

rb.beerSearch("Dogfish Head", function(beers) {
    console.log("========%s=======", "beerSearch");
    console.log(beers);
    console.log("========%s=======", "beerSearch");
});

rb.beerPage("/beer/dogfish-head-60-minute-ipa/7431/", function(beer) {
    console.log("========%s=======", "beerPage");
    console.log(beer);
    console.log("========%s=======", "beerPage");
});


