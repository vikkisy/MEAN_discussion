var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');

module.exports = {

    like: (req,res) => {
        console.log("inside like")
        Answer.update({_id: req.params.id}, { $inc: {likes: 1}}, (err) => {
            if(err){
                console.log("error liking")
            } else {
                res.json({message: "liked"})
            }
        })
    }
    // getAnswers: (req, res) => {
    //     Question.findOne({_id: req.params.id})
    //     .populate('answers')
    // }
}