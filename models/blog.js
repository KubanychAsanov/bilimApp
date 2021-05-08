const {Schema, model} = require('mongoose')

const blog = new Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  img: String, 
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = model('Blog', blog)