'use strict';

exports.init = function (req, res) {
        req.app.db.models.Commentaire.find({question: req.param('test') }, null, { safe: true }, function (err, commentaires) {
                res.render('commentaire/index', {
                    question_id: req.param('test'),
                    libelle : req.param('test'),
                    commentaires : commentaires
                });

            });
};

