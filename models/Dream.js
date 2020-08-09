const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DreamSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  dreamer: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  description: {
      type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Dream = mongoose.model('dream', DreamSchema);