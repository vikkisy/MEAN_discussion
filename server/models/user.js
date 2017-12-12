// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create the schema
var UserSchema = new mongoose.Schema({
    name: {type:String, required:true, minlength: 2},
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question'}],
    answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }]
}, { timestamps: true })
// register the schema as a model
var User = mongoose.model('User', UserSchema);