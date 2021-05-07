var searchResultsEl = document.querySelector("#searchResults")
var searchEl = document.querySelector("#searchForm")
var searchBtnEl = document.querySelector("#queryBtn")

function displayResults(event){
	event.preventDefault();

	var inputSearchVal = document.querySelector("#inputSearch").value

	//var text = document.createElement('h1')
	//text.textContent = data
	//searchResultsEl.append(text)

	console.log(inputSearchVal)
	searchMovieOrTv(inputSearchVal);
}

function searchMovieOrTv(inputSearchVal) {

	//Utelly database - returns streaming info on search * Son use this first
	fetch("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term="+ inputSearchVal +"&country=us", {
		method: "GET",
		headers: {
			"x-rapidapi-key": "cb566b1c57msh5161a956c5815e1p162df6jsn46969de8ab19",
			"x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com"
		}
	})
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		console.log(data);
		//call an additional function to display results
	})
	.catch(err => {
		//console.error(err);
	})
		console.log("post fetch");
}

//Movie Database *use for search*
// fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?i=tt4154796&r=json", {
// 	method: "GET",
// 	headers: {
// 		"x-rapidapi-key": 'cb566b1c57msh5161a956c5815e1p162df6jsn46969de8ab19',
// 		"x-rapidapi-host": 'movie-database-imdb-alternative.p.rapidapi.com',
// 	}
// 	})
// 	.then(function (response) {
// 		return response.json();
// 	})
// 	.catch(err => {
// 		//console.error(err);
// 	})

// 	.then(function (data) {
// 		console.log(data);
// 	})

// //Streaming Availability API endpoints
// fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&language=en", {
// 	method: "GET",
// 	headers: {
// 		"x-rapidapi-key": "cb566b1c57msh5161a956c5815e1p162df6jsn46969de8ab19",
// 		"x-rapidapi-host": "streaming-availability.p.rapidapi.com"
// 	}
// })
// //.then(response => {
// 	//console.log(response);
// 	.then(function (response) {
// 		return response.json();
// })
// .catch(err => {
// 	//console.error(err);
// })

// .then(function (data) {
//     console.log(data);
// })


function displayBtnResults(event){
	event.preventDefault();
	console.log("queryCheck")
	var selectedService = document.querySelector("input[name='service']:checked")
		console.log("selectedService",selectedService.value)
	var selectedGenre = document.querySelector("input[name='genre']:checked")
		console.log("selectedGenre",selectedGenre.value)
	var selectedMediaType = document.querySelector("input[name='media']:checked")
		console.log("selectedMediaType",selectedMediaType.value)

	searchStreamingService(selectedService.value, selectedGenre.value, selectedMediaType.value);
}

function searchStreamingService(selectedService, selectedGenre, selectedMediaType) {

    // Streaming Availability API endpoints
    fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=" + selectedService + "&type=" + selectedMediaType + "&genre=" + selectedGenre + "&page=1&language=en", {
        method: "GET",
        headers: {
            "x-rapidapi-key": "cb566b1c57msh5161a956c5815e1p162df6jsn46969de8ab19",
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com"
        }
    })
    // if (checkBox.checked == true){
    //     text.style.display = "block";
    // } else {
    //     text.style.display = "none";
    // }
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
	displayQueryResults(data)
    //call an additional function to display results
    })
    .catch(err => {
    //console.error(err);
    })
        console.log("post fetch");
}
function displayQueryResults(dataResults) {

}
function initGenreCheckboxes() {

    // Streaming Availability API endpoints
    fetch("https://streaming-availability.p.rapidapi.com/genres", {
        method: "GET",
        headers: {
            "x-rapidapi-key": "cb566b1c57msh5161a956c5815e1p162df6jsn46969de8ab19",
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com"
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    //call an additional function to display results
    })
    .catch(err => {
    //console.error(err);
    })
        console.log("post fetch");
}

searchEl.addEventListener('submit', displayResults)
searchBtnEl.addEventListener('click', displayBtnResults)
