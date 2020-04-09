const request = require('request'); //request the library
const args = process.argv.slice(2); //input from command line
const catBreed = args[0]; //define catbreed into a string

request('https://api.thecatapi.com/v1/breeds/search?q=' + catBreed, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	
  const data = JSON.parse(body); //turn data from a string into an object
  //console.log(data[0]); // Print the data
  if (data[0] === undefined) { //if the data is not found
    console.log('Breed is not found.');
  } else {
    //console.log(typeof data) //should return object
    console.log(`Description: ${data[0]['description']}`); //description of the cat
  }
});