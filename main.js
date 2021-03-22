
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


movies.forEach(movie => {
    document.querySelector("#movieContainer").innerHTML +=
        `<section class="movieThumb"><img src="${movie.image}" alt="">
        <p>${movie.title}</p>

    </section>`

});



