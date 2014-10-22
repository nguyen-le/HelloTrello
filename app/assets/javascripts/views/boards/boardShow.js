HelloTrello.Views.BoardShow = Backbone.CompositeView.extend({
    template: JST["boards/boardShow"],

    initialize: function() {
        this.collection = this.model.lists();
        this.listenTo( this.model, "sync", this.render );
        this.listenTo( this.collection, "sync add", this.addList );
    },
    addList: function(list) {
        var view = new HelloTrello.Views.ListShow({ model: list });
        this.addSubview( ".lists", view );
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
