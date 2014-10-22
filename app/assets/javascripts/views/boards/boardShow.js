HelloTrello.Views.BoardShow = Backbone.CompositeView.extend({
    template: JST["boards/boardShow"],

    initialize: function() {
        this.collection = this.model.lists();
        this.listenTo( this.model, "sync", this.render );
        this.listenTo( this.collection, "sync", this.addList );
    },
    events: {
        "click #list-new": "listNew",
        "submit #new-list-form": "createList",
        "click #new-list-close": "closeList"
    },
    closeList: function (event) {
        this.removeSubview(".lists", this.newList);
    },
    createList: function (event) {
        event.preventDefault();
        var data = $('#new-list-form').serializeJSON();
        data.board_id = this.model.id;
        this.collection.create(data);
        this.removeSubview(".lists", this.newList);
    },
    addList: function(list) {
        var view = new HelloTrello.Views.ListShow({ model: list });
        this.addSubview( ".lists", view );
    },
    listNew: function() {
        this.newList = new HelloTrello.Views.ListNew([], {});
        this.addSubview( ".lists", this.newList );
        $('#new-list-title').trigger("focus");
    },
    render: function () {
        var content = this.template({ board: this.model });
        this.$el.html(content);
        this.renderLists();
        return this;
    },
    renderLists: function () {
        this.collection.each( this.addList.bind(this) );
        $('.lists').sortable();
    },
});
