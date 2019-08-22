require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
// console.log("Hello World");

// var argument = process.argv
// console.log(argument);

var operation = process.argv[2];



function getMovieData() {
    var movieName = process.argv[3];
    console.log(movieName)
    axios.get(`http://www.omdbapi.com/?t=${movieName}&apikey=7969af0b`).then(function(response){
    console.log(response)
    })
    // console.log(movieData)
}
function getSpotifySong() {
    var songName = process.argv[3];
    console.log(songName)
    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data.tracks.items[0]); 
      });
}
if (operation==='movie-this'){
    getMovieData()

} else if(operation==='concert-this'){
    console.log('concert-this requested')
} else if (operation==='spotify-this-song'){
    console.log('spotify requested')
    getSpotifySong()
} else if(operation==='do-what-it-says'){
    console.log('do-what-it-says requested')
}
 
