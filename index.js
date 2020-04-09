const { fetchBreedDescription } = require('./breedFetcher');
const args = process.argv.slice(2); //input from command line
const catBreed = args[0]; //define catbreed into a string

fetchBreedDescription(catBreed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error); // Print the error if one occurred
  } else {
    console.log(desc);
  }
});