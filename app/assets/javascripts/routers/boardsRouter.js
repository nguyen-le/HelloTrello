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
        $("body").css("background-color", "white");
        HelloTrello.boards.fetch();
        var view = new HelloTrello.Views.BoardsIndex({ collection: HelloTrello.boards});
        this._swapView(view);
    },

    newBoard: function () {
        $("body").css("background-color", "white");
        var newBoard = new HelloTrello.Models.Board();
        var view     = new HelloTrello.Views.BoardNew({
            model:      newBoard,
            collection: HelloTrello.boards
        });
        this._swapView(view);
    },

    show: function (id) {
        $("body").css("background-color", "#23719F");
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
