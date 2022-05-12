const request = require('request')

/*let fetch = (breed) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

    if (error) {
      console.log("Error:", error);
    };

    const data = JSON.parse(body);
    console.log(data[0].description);
    console.log(typeof data);


  })

}

fetch("siberian")*/

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    /*if (error) {
       return error;
    } else {*/
    const data = JSON.parse(body);
    return data[0].description;


  })

};

module.exports = { fetchBreedDescription };

fetchBreedDescription("siberian")