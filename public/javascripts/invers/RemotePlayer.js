"use strict";

Invers.RemotePlayer = function (c, e, u, o, g) {
// private attributes
    var _super = new OpenXum.RemotePlayer(c, e, u, o, g);

// public methods
    this.color = _super.color;
    this.confirm = _super.confirm;
    this.finish = _super.finish;
    this.is_ready = _super.is_ready;
    this.is_remote = _super.is_remote;
    this.move = _super.move;
    this.set_manager = _super.set_manager;

    this.buildMove = function () {
        return new Invers.Move();
    };

    this.get_name = function () {
        return 'invers';
    };

    _super.that(this);
};
