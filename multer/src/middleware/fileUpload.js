const multer = require("multer");
const util = require("util")

// Storage Engin That Tells/Configures Multer for where (destination) and how (filename) to save/upload our files
const storageEnggine = multer.diskStorage({
  destination : (req, file, cb) => {
    cb(null, "./assets/images") //important this is a direct path fron our current file to storage location
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

// The Multer Middleware that is passed to routes that will receive income requests with file data (multipart/formdata)
// Single File Route Handler
uploadFileMiddleware = multer({storage: storageEnggine}).single('image')

module.exports = uploadFileMiddleware