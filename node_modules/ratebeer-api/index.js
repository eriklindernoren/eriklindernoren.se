var _request = require('request'),
    cheerio = require('cheerio');

exports.config = function(options) {
  this.request = _request.defaults(options);
}

exports.beerSearch = function(query, callback) {
  
  if (!this.request) {
    this.request = _request;
  }
  
  this.request.post({
    url:     'http://www.ratebeer.com/findbeer.asp',
    form:    { BeerName: query }
  }, function(error, response, html){
    if (!error && response.statusCode == 200) {
      
      var $ = cheerio.load(html);
      
      var beers = [];
      
      $('table.results tr').each(function(index) {
        
        // One beer listing
        var tr = $(this);
	if (index == 0) { return;}
        // Beer details
        var beer = tr.children('td').children('a').eq(0),
            beer_name = beer.text(),
            beer_url = beer.attr('href');
        
        // Data to return
        var data = {
          beer_name: beer_name,
          beer_url: beer_url,
        };
        
        // Add to beer array
        beers.push(data);
        
      });
      
      callback(JSON.stringify(beers));
      
    }
    
  });
  
}

exports.beerPage = function(url, callback) {
  
  var url = "http://ratebeer.com" + url;
  
  if (!this.request) {
    this.request = _request;
  }
  
  this.request(url, function (error, response, html) {
    
    if (!error && response.statusCode == 200) {
      
      var $ = cheerio.load(html);
      
      var beer = [];
      
      // Beer name
      var beer_name = $('h1').text();
      // Beer data
      var beer_data = cheerio.load($('#container').children('span').eq(0)
				   .children('table').eq(0).children('tr').eq(1)
				   .children('td').eq(1).children('div').eq(0)
				   .children('div').eq(0).children('small').eq(0)
				   .html());
      var beer_ratings_count = beer_data('*:contains("RATINGS:")').eq(0).next().text();
      var beer_rating = beer_data('a:contains("WEIGHTED AVG:")').eq(0)
	    .children('big').eq(0).text();
      var beer_ibu = beer_data('*:contains("IBU")').eq(0).next().text();
      var beer_calories = beer_data('*:contains("EST. CALORIES")').eq(0)
	    .next().text();
      var beer_abv = beer_data('*:contains("ABV")').eq(0).next().text();
      
      // Data to return
      var data = {
        beer_name: beer_name,
        beer_ratings_count: beer_ratings_count,
        beer_rating: beer_rating,
	beer_ibu: beer_ibu,
	beer_calories: beer_calories,
	beer_abv: beer_abv,
      };
      
      // Add to beer array
      beer.push(data);
      
      callback(JSON.stringify(beer));
      
    }
    
  });
  
}

