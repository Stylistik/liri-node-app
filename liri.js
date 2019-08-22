var axios = require("axios");
// console.log("Hello World");

// var argument = process.argv
// console.log(argument);

var operation = process.argv[2];

var movieName = process.argv[3];
// console.log(operation, movieName);

function getMovieData() {
    console.log(movieName)
    axios.get(`http://www.omdbapi.com/?t=${movieName}&apikey=7969af0b`).then(function(response){
    console.log(response)
    })
    // console.log(movieData)
}

if (operation==='movie-this'){
    getMovieData()

}

