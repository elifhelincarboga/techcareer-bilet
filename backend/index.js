const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
require('dotenv/config')
const app = express()


//configuration
const port = process.env.PORT || 3000

//Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Routes
app.get('/', (req, res) => {
  res.send('Hello World!!')
})
app.use('/api', routes)

app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`))