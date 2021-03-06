'use strict';

exports = module.exports = function (app, mongoose) {
    var questionSchema = new mongoose.Schema({
        titre: { type: String, default: '' },
        contenu: { type: String, default: '' },
        inscrit: { type: String, default: '' },
        timeCreated: { type: Date, default: Date.now },
        userCreated: {
           id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
        }
    });
    questionSchema.index({ titre: 1 });
    questionSchema.set('autoIndex', (app.get('env') === 'development'));
    app.db.model('Question', questionSchema);
};
