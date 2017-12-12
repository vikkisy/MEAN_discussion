var Users = require('../controllers/users.js')
var Questions = require('../controllers/questions.js')
var Answers = require('../controllers/answers.js')
var path = require("path");
module.exports = (app) => {
    app.get('/');
    app.get('/api/current', Users.getCurrentUser);
    app.post('/api/reg', Users.register);
    app.post('/api/question/:id', Questions.create);
    app.get('/api/question', Questions.allQuestions);
    app.get('/api/question/:id', Questions.getAnswers);
    app.post('/api/answer/:id', Questions.answer);
    app.post('/api/answer/like/:id', Answers.like);
    // app.get('/api/question/one', Questions.getAnswers);
    // app.delete('/delete/:id', Players.delete);
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}