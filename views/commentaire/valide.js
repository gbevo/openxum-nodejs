'use strict';

exports.init = function(req, res){
    console.log(req.param('libelle'));


    var fieldsToSet = {
        libelle: req.param('libelle'),


        userCreated: {
            id: req.user._id,
            name: req.user.username
        }
    };

    console.log(fieldsToSet);

    req.app.db.models.Commentaire.create(fieldsToSet, function (err, user) {
    });


    res.redirect('/commentaire');
};


/**
 * Created by projetl3info on 10/06/15.
 */
