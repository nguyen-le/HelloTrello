HelloTrello.Models.Board = Backbone.Model.extend({
    urlRoot: "api/boards",

    lists: function() {
        this._lists = this._lists || new HelloTrello.Collections.Lists([], {
            board: this
        });
        return this._lists;
    },

    parse: function(resp) {
        if (resp.lists) {
            this.lists().set(resp.lists, { parse: true });
            delete resp.lists;
        }
        return resp;
    }

});
