'use strict';

exports = module.exports = function (app, mongoose) {
    var  ReponseSchema = new mongoose.Schema({
        data: { type: String, default: '' },
        userCreated: {
            code: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            libelle: { type: String, default: '' },

        }
    });
    app.db.model('Reponse', ReponseSchema);
};


