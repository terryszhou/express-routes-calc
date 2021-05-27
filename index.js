// import required modules
const express = require('express')

// configure express app
const app = express()
const PORT = 3000

// define routes
app.get('/add/:x/:y', (req, res) => {
  const add = parseInt(req.params.x) + parseInt(req.params.y)
  res.send(`${req.params.x} + ${req.params.y} = ${add}`)
})

app.get('/subtract/:x/:y', (req, res) => {
  const sub = parseInt(req.params.x) - parseInt(req.params.y)
  res.send(`${req.params.x} - ${req.params.y} = ${sub}`)
})

app.get('/multiply/:x/:y', (req, res) => {
  const mult = parseInt(req.params.x) * parseInt(req.params.y)
  res.send(`${req.params.x} * ${req.params.y} = ${mult}`)
})

app.get('/divide/:x/:y', (req, res) => {
  const div = parseInt(req.params.x) / parseInt(req.params.y)
  res.send(`${req.params.x} / ${req.params.y} = ${div}`)
})

// Bonus
app.get('/*', (req, res) => {
  const maths = {
    add: () => req.params[0].split('/').reduce((total, current) => parseInt(total) + parseInt(current)),
    subtract: () => req.params[0].split('/').reduce((total, current) => parseInt(total) - parseInt(current)),
    multiply: () => req.params[0].split('/').reduce((total, current) => parseInt(total) * parseInt(current)),
    divide: () => req.params[0].split('/').reduce((total, current) => parseInt(total) / parseInt(current)),
  }
  res.send(`${maths[req.query.math]()}`)
})

// listen on a port
app.listen(PORT, () => {
  console.log(`listening on port ${PORT} 🎧`)
})