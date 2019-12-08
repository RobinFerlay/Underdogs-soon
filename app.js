const express = require('express')
const path = require('path')

const app = express()

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'twig')

app.use(express.static(path.join(__dirname, '/public')))

app.get('/', async (req, res) => {
  res.render('homepage')
})
app.get('*', function(req, res) {
  res.redirect('/')
})

const appPort = 8080

app.listen(appPort, console.log('App listening on port ' + appPort))
