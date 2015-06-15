'use strict';

exports.init = function(req, res) {
    req.app.db.models.Question.find({ }, null,
        { safe: true }, function (err, questions) {
            res.render('forum/index', {
                questions: questions
            });

        });
};
