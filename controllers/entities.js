const Entity = require('../models/Entity')

const getEntitiesList = async (request, response) => {
  // supporting search query
  const condition = !request.query.q ? {} : {name: { "$regex": `.*${request.query.q}.*`}}
  response.json( await Entity.find(condition, 'name').limit(20))
}

const getEntityDetail = async (request, response) => {
  !request.query.q
    ? response.json( await Entity.findById(request.params.id))
    : await Entity.findById(request.params.id).then((data) => {
      // can't find true solution for subquering
        response.json({subEntities: data.subEntities.filter(each => new RegExp(request.query.q).test(each.name))})
      })

}

const leaveFeedback = async (request, response) => {
  const update = {'$push': {feedbacks: request.body}}
  response.json( await Entity.findByIdAndUpdate(request.params.id, update))
}

module.exports = {
  getEntitiesList,
  getEntityDetail,
  leaveFeedback,
}