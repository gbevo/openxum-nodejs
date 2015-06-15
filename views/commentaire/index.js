'use strict';

exports.init = function (req, res) {
    req.app.db.models.Question.findOne({titre: req.param('test')}, null, { safe: true }, function (err, questions) {
        req.app.db.models.Commentaire.find({}, null, { safe: true }, function (err, commentaires) {
                res.render('commentaire/index', {
                    libelle: req.param('test'),
                    commentaires: commentaires
                });

            });
    });
};

