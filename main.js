
let movies = [
    {
        "image": "../Images/the-midnight-sky.jpg",
        "title": "The midnight sky",
        "youtubeId": "https://www.youtube.com/watch?v=Gb8ZbP6qAzE"
    },
    {
        "image": "../Images/Space_Sweepers.jpg",
        "title": "Space Sweepers",
        "youtubeId": "https://www.youtube.com/watch?v=H1WYnJF1Pwo"
    }
];

fetch("http://www.omdbapi.com/?i=tt3896198&apikey=5bd7e0a3")
    .then(response => { return response.json() })
    .then(movies => {
        movies.forEach(movie => {
            document.querySelector("#movieContainer").innerHTML +=
                `<section class="movieThumb"><img src="${movie.Poster}" alt="">
        <p>${movie.Title}</p>

    </section>`

        });
    });






