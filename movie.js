let movieId;
window.onload = movieId=localStorage.getItem("movieId");

let youtube = {
    getIdFromUrl: function (videoIdOrUrl) {
        if (videoIdOrUrl.indexOf('http') === 0) {
            return videoIdOrUrl.split('v=')[1];
        }
        else {
            return videoIdOrUrl;
        }
    },
    generateThumbnailUrl: function (videoIdUrl) {
        return 'https://i3.ytimg.com/vi/' + youtube.getIdFromUrl(videoIdOrUrl) + '/default.jpg';
    },
    generateEmbedUrl: function (videoIdOrUrl) { return 'https://www.youtube.com/embed/' + youtube.getIdFromUrl(videoIdOrUrl); }
};


let details;
fetch(`http://www.omdbapi.com/?i=${movieId}${keyUrl}`)
.then(response => {return response.json()})
.then(data => {



// Add data to the view
    details = /*html*/ `
    <article>
    <h2>${data.Title}</h2>
    <figure class="embedVideo">
        <iframe id="movieUrl" frameborder="0"></iframe>
        <figcaption>Trailer</figcaption>
    </figure>
    </article>
    <article>
        <p>${data.Plot}</p>
    <ul>
        <li>Director: ${data.Director}</li>
        <li>Actors: ${data.Actors}</li>
        <li>Year: ${data.Year}</li>
        <li>Age: ${new Date().getFullYear()-data.Year} years</li>
        <li>Rating: ${data.imdbRating}</li>
        
    </ul>
    </article>
    <article class="arrows"></article>
    `;
        document.querySelector('main').innerHTML = details;
    

        // Check for youtube link
movies.forEach(movie => {
    fetch(`${movie.fetchUrl}${keyUrl}`)
    .then(allMovies => { return allMovies.json() })
    .then(movieData => {
        if(movieData.imdbID == movieId){
    document.querySelector('#movieUrl').src = youtube.generateEmbedUrl(movie.youtubeId);
        }
    })




})
})

