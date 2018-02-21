var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');

var locationSchema = new Schema({
    title: String,
    description: String,
    updated_date: { type: Date, default: Date.now },
    user: [{type: Schema.Types.ObjectId, ref: 'User'}]
  });

  locationSchema.post('remove', function(message) {
    User.findById(message.user, function (err, user) {
      user.messages.pull(message);
      user.save();
    });
  });

  module.exports = mongoose.model('Location', locationSchema);