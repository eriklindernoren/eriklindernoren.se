
var request = require('request'),
    cheerio = require('cheerio');

request('http://www.ratebeer.com/beer/dogfish-head-60-minute-ipa/7431/', function (error, response, html) {
    if (!error && response.statusCode == 200) {
	var $ = cheerio.load(html);
	var beer_data = cheerio.load($('#container').children('span').eq(0)
				     .children('table').eq(0).children('tr').eq(1)
				     .children('td').eq(1).children('div').eq(0)
				     .children('div').eq(0).children('small').eq(0)
				     .html());
	var beer_rating = beer_data.root().children('a').eq(0)
	    .children('big').eq(0).text();
	var beer_ibu = beer_data('*:contains("IBU")').eq(0).next().text();
        var beer_calories = beer_data('*:contains("EST. CALORIES")').eq(0)
	    .next().text();
        var beer_abv = beer_data('*:contains("ABV")').eq(0).next().text();
	
	console.log(beer_rating);
	console.log(beer_ibu);
	console.log(beer_calories);
	console.log(beer_abv);
    }
});


 
