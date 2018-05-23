var mongoose = require('mongoose');

var Question = mongoose.model('Question', {
  question: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  options: {
    type: Array,
    default: false
  },
  correct: {
    type: Number,
    required: true
  }
});

module.exports = { Question };
