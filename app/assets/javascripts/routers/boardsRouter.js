HelloTrello.Routers.Boards = Backbone.Router.extend({
    initialize: function(rootEl) {
        this.$rootEl = rootEl;
        $body = $('body');
        bodyCss = $body[0].style;
    },

    routes: {
        "": "index",
        "boards/new": "newBoard",
        "boards/:id": "show"
    },

    index: function() {
        bodyCss.backgroundColor = "white";
        HelloTrello.boards.fetch();
        var view = new HelloTrello.Views.BoardsIndex({ collection: HelloTrello.boards});
        this._swapView(view);
    },

    newBoard: function () {
        bodyCss.backgroundColor = "white";
        var newBoard = new HelloTrello.Models.Board();
        var view     = new HelloTrello.Views.BoardNew({
            model:      newBoard,
            collection: HelloTrello.boards
        });
        this._swapView(view);
    },

    show: function (id) {
        bodyCss.backgroundColor = "#23719F";
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
