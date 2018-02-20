var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationSchema = new Schema({
    title: String,
    description: String,
    updated_date: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('location', locationSchema);