// Presening all movies from the genereal movies array
movies.forEach(movie => { // for each movie
    fetch(`${movie.fetchUrl}${keyUrl}`) // fetch api data
    .then(response => { return response.json() }) //retun the data in json format
    .then(data => {
        // Add data about the movie to the movieContaine
 document.querySelector("#movieContainer").innerHTML +=
        `<section class="movieThumb" onclick="goToDetails('${data.imdbID}')" >
            <img src="${data.Poster}" alt="">
            <p>${data.Title}</p> 
        </section>`
        });
    });

    // Go to a new html page movieDetail, where a specific movie is presented based on its id
    function goToDetails(id){
                localStorage.setItem("movieId",`${id}`); // Save the id in localStorage
                window.location.href = "movieDetails.html"; // Go to new page
    }

 