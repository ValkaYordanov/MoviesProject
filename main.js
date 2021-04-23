
console.log(movies);

movies.forEach(movie => {
    fetch(`${movie.fetchUrl}${keyUrl}`)
    .then(response => { return response.json() })
    .then(data => {
 document.querySelector("#movieContainer").innerHTML +=
        `<section class="movieThumb" onclick="goToDetails('${data.imdbID}')" ><img src="${data.Poster}" alt="">
<p>${data.Title}</p> 

    </section>`

        });
    });



    
    function goToDetails(id){
                localStorage.setItem("movieId",`${id}`);
                window.location.href = "movieDetails.html";
    }

 