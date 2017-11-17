// require mongoose
var mongoose = require('mongoose');
// create the schema
var UserSchema = new mongoose.Schema({
    name: {type:String, required:true, minlength: 2},
}, { timestamps: true })
// register the schema as a model
var User = mongoose.model('User', UserSchema);