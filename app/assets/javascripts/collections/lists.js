HelloTrello.Collections.Lists = Backbone.Collection.extend({
    model: HelloTrello.Models.List,

    initialize: function(models, options) {
        this.board = options.board;
    },

    url: 'api/lists',

    //getOrFetch: function (id) {
    //    var board = HelloTrello.boards.get(id);

    //    if (board) {
    //        board.fetch();
    //    } else {
    //        board = new HelloTrello.Models.Board( {id: id} );
    //        board.fetch( {
    //            success: function() {
    //            console.log("finished fetching");

    //        }});
    //    }
    //    return board;
    //},

});
