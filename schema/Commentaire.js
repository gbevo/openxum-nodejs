'use strict';

exports = module.exports = function (app, mongoose) {
    var  ReponseSchema = new mongoose.Schema({
        question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
        libelle: { type: String, default: '' },
        auteur: { type: String, default: '' },
        time: { type: Date, default: Date.now },
        userCreated: {
            code: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

        }
    });
    app.db.model('Commentaire', ReponseSchema);
};


