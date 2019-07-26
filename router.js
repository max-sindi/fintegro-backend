const router = require('express-promise-router')()
const entitiesController = require('./controllers/entities')

module.exports = (app) => {
  // lifecheck endpoint
  router.get('/', (req, res) => res.send('Yes it\'s Fintegro <3 test task API server' ))

  // main routes
  router.get('/entities', entitiesController.getEntitiesList)
  router.get('/entities/:id', entitiesController.getEntityDetail)
  router.post('/entities/:id', entitiesController.leaveFeedback)

  // apply router to app
  app.use('/api', router)
}
