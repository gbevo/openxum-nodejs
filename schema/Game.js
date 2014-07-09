'use strict';

exports = module.exports = function (app, mongoose) {
    var gameSchema = new mongoose.Schema({
        name: { type: String, default: '' },
        game: { type: mongoose.Schema.Types.ObjectId, ref: 'GameType' },
        color: { type: String, default: '' },
        mode: { type: mongoose.Schema.Types.ObjectId, ref: 'Mode' },
        type: { type: String, default: '' },
        status: { type: String, default: '' },
        userCreated: {
            id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
        },
        opponent: {
            id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
        }
    });
    gameSchema.index({ name: 1 });
    gameSchema.index({ game: 1 });
    gameSchema.set('autoIndex', (app.get('env') === 'development'));
    app.db.model('Game', gameSchema);
};
