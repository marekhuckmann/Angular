var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password:{type: String, required: true},
    email: {type: String, required: true, unique: true},
    locations: [{type: Schema.Types.ObjectId, ref: 'Location'}]    
});

userSchema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('User', userSchema);