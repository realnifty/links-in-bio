const { Schema, model } = require('mongoose');

const linkSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 30
    },
    url: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
    },
    username: {
      type: String,
      required: true
    },
  }
);

const Link = model('Link', linkSchema);

module.exports = Link;