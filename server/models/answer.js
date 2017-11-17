
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AnswerSchema = new mongoose.Schema({
    // since this is a reference to a different document, the _ is the naming convention!
    _question: { type: Schema.Types.ObjectId, ref: 'Question' },
    text: { type: String, required: true },
    details: { type: String},
    likes: {type: Number}
}, { timestamps: true });

var Answer = mongoose.model('Answer', AnswerSchema);