const request = require('request'); //request the library

const fetchBreedDescription = function(catBreed, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + catBreed, (error, response, body) => {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    const data = JSON.parse(body); //turn data from a string into an object
    if (data[0] === undefined) { //if the data is not found
      callback(error, "Breed is not found");
    } else {
    callback(error, data[0]['description']);
		}
    //console.log(data[0]); // Print the data
  
	
	
  });
};


module.exports = { fetchBreedDescription };