require('dotenv').config()
require('./db')

const express = require('express')
const app = express()

function main() {
  app.use(express.static(require('path').join(__dirname, 'public')))

  app.use(require('morgan')('dev'))// logger
  app.use(express.json())
  app.use(express.urlencoded({extended: false}))
  app.use(require('cors')())


  // before api_declaring errorHandler
  app.use((err, request, response, next) => {
    console.log('Error before api declaring: ', err.message)
  })

  require('./router')(app)

  // api errorHandler
  app.use((err, request, response, next) => {
    console.log('Error in response', err)
    response.status(501).json(err)
  })

  console.log('Server ran at port ', process.env.PORT)
}


main()

module.exports = app
