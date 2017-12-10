require('../helper')

const http = require('http')
const dbAlbums = require('../../config/database')
var server

const album = {
    artist : "test5",
    album : "test5",
    genre : "test5",
    stars : "3",
    lyrics : true
  }

before(function() {
  server = http.createServer(require('../../app'))
  server.listen(0)
  browser.baseUrl = 'http://localhost:' + server.address().port
})

beforeEach(function(done) {
  var dbCollection = dbAlbums.get('albums')
  dbCollection.insert(album, done)

  return browser.ignoreSynchronization = true
})

afterEach(function() {
  var dbCollection = dbAlbums.get('albums')
  dbCollection.remove({})
})

after(function(){
  server.close()
})

describe('Albums', () => {
  describe('Given a browser', () => {
    describe('When I visit the Albums website', () => {
      it('Then I see a welcome page', () => {
        browser.get('/')

        element(by.css('h1')).getText().then((text) => {
          expect(text).to.equal('OMG Albums!')
        })

        element(by.css('a')).click()
      })
    })
  })

  describe('Given I am on the welcome page', () => {
    describe('When I click on "Let me see the albums right now"', () => {
      it('Then I see a title indicating it is the Albums Index page with lists of albums', () => {
        browser.get('/albums/')

        element(by.css('h1')).getText().then((text) => {
          expect(text).to.equal('Albums')
        })

        element(by.css('th')).getText().then((text) => {
          expect(text).to.equal('Artist')
        })

        element(by.css('td')).getText().then((text) => {
          expect(text).to.equal('test5')
        })
      })
    })
  })

  describe('Given I am on Albums index page', () => {
    describe('When I click on "New Albums" link', () => {
      it('Then I see a title indicating it is Create Albums page', () => {
        browser.get('/albums/new/')

        element(by.css('label')).getText().then((text) => {
          expect(text).to.equal('Create Album')
        })

        element(by.id('album')).getText().then((text) => {
          expect(text).to.equal('Album')
        })

        element(by.id('artist')).getText().then((text) => {
          expect(text).to.equal('Artist')
        })

        element(by.id('genre')).getText().then((text) => {
          expect(text).to.equal('Genre')
        })

        element(by.id('cancel')).click()
      })
    })
  })

  describe('Given I am on Albums index page', () => {
    describe('When I click on "Cancel" link', () => {
      it('Then I see a title indicating it is the Albums Index page with lists of albums', () => {
        browser.get('/albums/')

        element(by.css('h1')).getText().then((text) => {
          expect(text).to.equal('Albums')
        })

        element(by.css('th')).getText().then((text) => {
          expect(text).to.equal('Artist')
        })

        element(by.css('td')).getText().then((text) => {
          expect(text).to.equal('test5')
        })
      })
    })
  })

})
