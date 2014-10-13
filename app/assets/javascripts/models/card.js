HelloTrello.Models.Card = Backbone.Model.extend({
    urlRoot: "api/cards",

    //items: function() {
    //    this._items = this._items || new HelloTrello.Collections.Items( [], {
    //        card: this
    //    });
    //},

    //parse: function(resp) {
    //    if (resp.items) {
    //        this.items().set( resp.items, { parse: true } );
    //        delete resp.items;
    //    }
    //    return resp;
    //}
});
