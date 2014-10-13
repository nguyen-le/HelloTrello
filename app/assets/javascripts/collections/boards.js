HelloTrello.Collections.Boards = Backbone.Collection.extend({
    url: "api/boards",
    model: HelloTrello.Models.Board,

    getOrFetch: function (id) {
        var board = HelloTrello.boards.get(id);

        if (board) {
            board.fetch();
        } else {
            board = new HelloTrello.Models.Board( {id: id} );
            board.fetch( {
                success: function() {

            }});
        }
        return board;
    },

});
