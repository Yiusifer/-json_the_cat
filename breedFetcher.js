const request = require('request')

let fetch = (breed) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

    if (error) {
      console.log("Error:", error);
    };

    const data = JSON.parse(body);
    console.log(data[0].description);
    console.log(typeof data);


  })

}

fetch("siberian")