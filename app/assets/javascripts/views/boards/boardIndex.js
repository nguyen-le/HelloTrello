HelloTrello.Views.BoardsIndex = Backbone.CompositeView.extend({
    template: JST["boards/boardIndex"],

    initialize: function() {
        $('body').removeClass();
        this.listenTo( this.collection, 'sync', this.render );
    },

    events: {
    },

    render: function() {
        var content = this.template({ boards: this.collection });
        this.$el.html(content);
        return this;
    },
});
