var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    register: (req, res) => {
        console.log("inside register controller");
        console.log(req.body.name);
        User.find({name: req.body.name}, (err, foundUser) => {
            if (foundUser.length > 0) {
                console.log("found user");
                req.session.userId = foundUser[0]._id;
                res.json(foundUser[0]);
            } else {
                var newUser = new User(req.body);
                newUser.save((err, savedUser) => {
                    if(err){
                        console.log("error saving user");
                        res.json(err);
                    } else {
                        console.log("registered a new user");
                        req.session.userId = savedUser._id;
                        res.json(savedUser);
                    }
                })
            }
        })                    
    },

    getCurrentUser: (req, res) => {
        console.log(req.session.userId);
        if(req.session.userId != undefined){
            User.findOne({_id: req.session.userId}, (err, loggedUser) => {
                console.log("found a user");
                res.json(loggedUser);
            })
        } else {
            console.log("nobody logged in");
            res.json({message: "not logged in"});
        }
    }

    // search: (req, res) => {
    //     user.find({ name: req.body.name }, (err, foundUser) => {
    //         if (found.User.length > 0) {
    //             req.session.userID = foundUser[0]._id;
    //             res.json(foundUser[0]);
    //         } else {
    //             var newuser = new User(req.body);
    //             newUser.save((err, savedUser) => {
    //                 if (err) {
    //                 }
    //                 else {
    //                     req.session.userID = savedUser._id;
    //                     res.json(savedUser);
    // }


}