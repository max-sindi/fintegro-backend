const mongoose = require('mongoose')
const {Types} = mongoose.Schema

//TODO: it would be nice to add some validation
const schema = new mongoose.Schema({
  name: Types.String,
  subEntities: [{
    name: Types.String
  }],
  feedbacks: [{
    subEntities: [Types.ObjectId],
    feedback: Types.String,
    stars: Types.Number
  }]
})

// replace all '_id' with 'id'
schema.options.toJSON = {
  transform: function(doc, ret) {
    ret.id = ret._id;
    if(ret.subEntities) {
      ret.subEntities = ret.subEntities.map(item => ({...item, id: item._id, _id: undefined}))
    }

    delete ret._id;
    delete ret.__v;
  }
};

const model = mongoose.model('Entity', schema)

module.exports = model