'use strict';

exports.init = function(req, res){
    console.log(req.param('titre'));
    console.log(req.param('contenu'));

    var fieldsToSet = {
        titre: req.param('titre'),
        contenu: req.param('contenu'),
        userCreated: {
            id: req.user._id,
            name: req.user.username
        }
    };

console.log(fieldsToSet);

    req.app.db.models.Question.create(fieldsToSet, function (err, user) {
    });


    res.redirect('/forum');
};


