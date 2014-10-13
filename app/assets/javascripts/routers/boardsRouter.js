HelloTrello.Routers.Boards = Backbone.Router.extend({
    initialize: function(rootEl) {
        this.$rootEl = rootEl;
    },

    routes: {
        "": "index",
        "boards/new": "newBoard",
        "boards/:id": "show"
    },

    index: function() {
        HelloTrello.boards.fetch();
        var view = new HelloTrello.Views.BoardsIndex({ collection: HelloTrello.boards});
        this._swapView(view);
    },

    newBoard: function () {
        var newBoard = new HelloTrello.Models.Board();
        var view     = new HelloTrello.Views.BoardNew({
            model:      newBoard,
            collection: HelloTrello.boards
        });
        this._swapView(view);
    },

    show: function (id) {
        var board = HelloTrello.boards.getOrFetch(id);
        var view  = new HelloTrello.Views.BoardShow({ model: board });
        this._swapView(view);
    },

    _swapView: function (view) {
        this._currentView && this._currentView.remove();
        this._currentView = view;
        this.$rootEl.html(view.render().$el);

    },
});
