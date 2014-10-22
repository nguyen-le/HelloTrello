HelloTrello.Views.BoardShow = Backbone.CompositeView.extend({
    template: JST["boards/boardShow"],

    initialize: function() {
        this.collection = this.model.lists();
        this.listenTo( this.model, "sync", this.render );
        this.listenTo( this.collection, "sync add", this.addList );
    },
    events: {
        "click #list-new": "listNew",
    },
    addList: function(list) {
        var view = new HelloTrello.Views.ListShow({ model: list });
        this.addSubview( ".lists", view );
    },
    listNew: function() {
        alert("new list");
    },
    render: function () {
        var content = this.template({ board: this.model });
        this.$el.html(content);
        this.attachSubviews();
        $('.lists').sortable();
        return this;
    },
});
