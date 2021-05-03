
//Streaming Availability API endpoints
fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&language=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "cb566b1c57msh5161a956c5815e1p162df6jsn46969de8ab19",
		"x-rapidapi-host": "streaming-availability.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

//Movie Database *use for search*
fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?i=tt4154796&r=json", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "cb566b1c57msh5161a956c5815e1p162df6jsn46969de8ab19",
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

//Utelly database - returns streaming info on search * Son use this first
fetch("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=bojack&country=uk", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "cb566b1c57msh5161a956c5815e1p162df6jsn46969de8ab19",
		"x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});