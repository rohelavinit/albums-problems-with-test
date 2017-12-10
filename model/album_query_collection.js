
"use strict"
const albumDatabaseCollection = require('../config/database')

class AlbumCollectionRecords{
  static findAll(cb){
    const collection = albumDatabaseCollection.get('albums')
    collection.find({}, cb)
  }

  static findAlbum(id, cd){
    const collection = albumDatabaseCollection.get('albums')
    collection.findOne({_id:id}, cd)
  }

  // static updateAlbum(albumObj, id, cd){
  //   const collection = albumDatabaseCollection.get('albums')
  //   collection.findAndModify({
  //     query:{_id:id},
  //     update:{$set:albumObj}
  //   }, cd)
  // }

  static updateAlbum(albumObj, id, cd) {
    console.log("id",id,"obj",albumObj);
    const collection = albumDatabaseCollection.get('albums')
    collection.update({ _id: id},{ '$set': albumObj }, cd)
  }

  static deleteAlbum(id, cd){
    const collection = albumDatabaseCollection.get('albums')
    collection.remove({_id:id}, cd)
  }

  static createAlbum(albumObj, cd){
    const collection = albumDatabaseCollection.get('albums')
    collection.insert(albumObj, cd)
  }
}

module.exports=AlbumCollectionRecords
