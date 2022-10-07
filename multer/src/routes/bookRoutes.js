const express = require('express')
const fileUpload = require('../middleware/fileUpload.js')
const {getBooks, addBooks, updateBooks, getBooksById, deleteBooks} = require('../controller/booksController.js')

const routes = express.Router()

routes.get('/', getBooks)
routes.get('/:id', getBooksById)
routes.post('/', fileUpload, addBooks)
routes.put('/:id', fileUpload, updateBooks)
routes.delete('/:id', deleteBooks)

module.exports = routes