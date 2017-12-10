const sinon=require('sinon')
const albumDatabaseCollection = require('../../config/database')
const AlbumCollectionRecords = require('../../model/album_query_collection')

describe("Find all the records from database using mock and stub", () => {
  it("calls the database collection and mocks and stubs", () => {
    //This is find method of a mongo collections
    const obj = {find: () => {}}

    //This is replacement Method
    const replacementMethod = () => obj
    //This is lead to albumDatabaseCollection.get() => find:() => {}
    sinon.stub(albumDatabaseCollection,"get",replacementMethod)

    //Mocking the object to pass the test without any dependency

    const mock = sinon.mock(obj)
    //find is the method name of the database collection
    mock.expects("find").
    once().
    withArgs({}, sinon.match.function)

    AlbumCollectionRecords.findAll()
    mock.verify()
    albumDatabaseCollection.get.restore()
  })

  it("Find the record for the appropriate album ID", (done) => {
    //This is find method of a mongo collections
    const obj={findOne: () => {}}
    const replacementMethod = () => obj
    sinon.stub(albumDatabaseCollection,"get",replacementMethod)

    const mock=sinon.mock(obj)
    //find is the method name of the database collection
    mock.expects("findOne").
    once().
    withExactArgs("id")

    AlbumCollectionRecords.findAlbum("583e4a96de5afe46dc4c09d9", done())
    mock.verify()
    albumDatabaseCollection.get.restore()
    done()
  })
})
