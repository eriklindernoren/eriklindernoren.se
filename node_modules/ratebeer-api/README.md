Ratebeer API
=================

Ratebeer API is an unofficial JavaScript library for working with http://ratebeer.com data.
It was inspired by the Beer Advocate API by Charlie Hield: https://github.com/stursby/beer-advocate-api

Getting started
---------------

Ratebeer API can be installed via [NPM](https://www.npmjs.org/). (For more on NPM, see this [introduction](http://howtonode.org/05896bb828f0d7e9251dd5b4cfd72350896990bd/introduction-to-npm)). Make sure you’re in your projects directory, and run the following:

```bash
$ npm install ratebeer-api
```

Including the library
---------------------

Next, make sure to include Ratebeer API in your project.

```javascript
var rb = require('ratebeer-api');
```

Documentation
=============

Beers
-----

### Search

Search for a beer

```javascript
rb.beerSearch("Anchor Steam", function(beers) {
    console.log(beers);
});
```

### Beer page

Get a specific beer page

```javascript
rb.beerPage("/beer/dogfish-head-60-minute-ipa/7431/", function(beer) {
    console.log(beer);
});
```

Acknowledgements
================

Ratebeer API is not associated with Ratebeer.com. I love everything they've done for beer and making the info available to all of us.


**Ratebeer API** is inspired by the [Beer Advocate API](https://github.com/stursby/beer-advocate-api).  Thank you Charlie Hield for the work you did.  I hope my work with the Ratebeer API can be as beneficial.
