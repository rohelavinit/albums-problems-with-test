
const expect = require('chai').expect
const albumCollectionMod = require('../../model/album_query_collection')
const dbAlbums = require('../../config/database')

describe('Album Collection', () => {
  afterEach(function(done) {
    var albumCollectionDB = dbAlbums.get('albums')
    albumCollectionDB.remove({}, done)
  })

  describe('Albums .create', () => {
    it('Album data should be inserted', (done) =>{
      const album = {
          artist : "abc",
          album : "abc",
          genre : "jazz",
          stars : "3",
          lyrics : true
      }

      albumCollectionMod.createAlbum(album, (err, albums) => {
        if (err) done(err)
        expect(albums.artist).to.equal("abc")
        // done()
      })

      albumCollectionMod.findAll( (err, albums) => {
        if (err) done(err)
        expect(albums[albums.length-1].artist).to.equal("abc")
        done()
      })
    })
  })
})
