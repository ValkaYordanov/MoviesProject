
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
}

document.querySelector('#movieUrl').src = youtube.generateEmbedUrl(movies[0].youtubeId);