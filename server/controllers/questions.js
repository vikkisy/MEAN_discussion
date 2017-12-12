var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
var User = mongoose.model('User');

module.exports = {

    create: (req, res) => {
        console.log("came into create question");
        console.log(req.body);
        User.findOne({_id: req.params.id}, (err, user) => {
            var newQuest = new Question(req.body);
            console.log(user);
            newQuest._user = user.name;
            newQuest.save((err) => {
                user.questions.push(newQuest);
                user.save((err) => {
                    if (err) {
                        console.log("error saving new question");
                        res.json(err);
                    } else {
                        console.log("successfully saved new question");
                        res.json(newQuest);
                    }
                })
                
            })

        })
        
    },

    allQuestions: (req,res) => {
        Question.find({}, (err, allQs) => {
            if(err){
                console.log("error loading questions");
                rees.json(err);
            } else{
                console.log("found all questions");
                res.json(allQs);
            }
        })
    },

    answer: (req,res) => {
        console.log("came into answer");
        Question.findOne({_id: req.params.id}, (err, question) => {
            var answer = new Answer(req.body);
            answer._question = question._id;
            answer.save((err) =>{
                question.answers.push(answer);
                question.save((err) => {
                    if(err){
                        console.log("error saveing answer to question");
                        res.json(err);
                    } else {
                        res.json(answer);
                    }
                })
            })
        })
    },

    getAnswers: (req, res) => {
        Question.findOne({ _id: req.params.id })
            .populate('answers')
            .exec((err,question) => {
                res.json(question);
            })
    },

    getQuestion: (req, res) => {
        console.log(req.body._id);
       
    }
}