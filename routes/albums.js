const express = require('express')
const router = express.Router()
const AlbumCollectionRecords=require('../model/album_query_collection')


router.get('/', (req,res) => {
  AlbumCollectionRecords.findAll((err,albums) => {
    res.render('albums/index', {albums:albums})
  })
})

router.get('/new', (req,res) => {
  res.render('albums/new')
})

router.post('/new', (req,res) => {
  AlbumCollectionRecords.createAlbum(req.body, (err,album)=>{
      res.redirect('/albums')
  })
})

router.get('/:id', (req,res) => {
  AlbumCollectionRecords.findAlbum(req.params.id,(err,album)=>{
    res.render('albums/show', {album:album})
  })
})

router.get('/edit/:id', (req,res) => {
  AlbumCollectionRecords.findAlbum(req.params.id,(err,album)=>{
    res.render('albums/edit', {album:album})
  })
})

router.patch('/:id', (req,res) => {
  AlbumCollectionRecords.updateAlbum(req.body, req.params.id, (err,album)=>{
    AlbumCollectionRecords.findAlbum(req.params.id,(err,album)=>{
      res.render('albums/show',{album:album})
    })
  })
})

router.delete('/:id', (req,res) => {
  AlbumCollectionRecords.deleteAlbum(req.params.id, (err,album)=>{
    AlbumCollectionRecords.findAlbum(req.params.id,(err,album)=>{
      res.redirect('/albums')
    })
  })
})

module.exports = router
