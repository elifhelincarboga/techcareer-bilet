const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080

//Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



app.get('/', (req, res) => {
  res.send('Hello World!!')
})

app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`))