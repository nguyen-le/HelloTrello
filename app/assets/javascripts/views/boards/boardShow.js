HelloTrello.Views.BoardShow = Backbone.CompositeView.extend({
    template: JST["boards/boardShow"],

    initialize: function() {
        this.collection = this.model.lists();
        this.listenTo( this.model, "sync", this.render );
    },

    render: function () {
        var content = this.template({ board: this.model });
        this.$el.html(content);
        this.attachSubviews();
        $('.lists').sortable();
        return this;
    },

});
