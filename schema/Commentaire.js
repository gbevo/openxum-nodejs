'use strict';

exports = module.exports = function (app, mongoose) {
    var  ReponseSchema = new mongoose.Schema({
        question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
        libelle: { type: String, default: '' },
        userCreated: {
            code: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

        }
    });
    app.db.model('Commentaire', ReponseSchema);
};


