"use strict"

class AlbumCollection{
    constructor(artist,album,genre,stars,lyrics){
        this.artist = artist;
        this.album = album;
        this.genre = genre;
        this.stars = stars;
        this.lyrics = lyrics;
    }
}
module.exports = AlbumCollection;