//import libs
const express = require('express')
const cors = require('cors')
const bookRoutes = require('./routes/bookRoutes.js')
const os = require('os')
const PORT = process.env.PORT || 8000

require('dotenv').config()
const app = express()
// This middleware is used to enable Cross Origin Resource Sharing This sets Headers to allow access to our client application
app.use(cors())

app.get('/', (req, res) => {
  const hostname = os.hostname()
  try{
    res.status(200).end(`Hello ${hostname}, welcome to our API !`)
  }catch{
    res.status(400).end(e.message)
  }
})

app.use("/books", bookRoutes)

app.listen(PORT, () => {
  console.info(`Server allready listening for request on http://localhost:${PORT}`)
})
