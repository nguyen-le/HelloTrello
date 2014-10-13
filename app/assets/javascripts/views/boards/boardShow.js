HelloTrello.Views.BoardShow = Backbone.CompositeView.extend({
    template: JST["boards/boardShow"],

    initialize: function() {
        $('body').removeClass();
        $('body').addClass('dark-logo');

        this.listenTo( this.model, "sync", this.render );
    },

    events: {
    },

    render: function () {
        var content = this.template({ board: this.model });
        this.$el.html(content);
        this.attachSubviews();
        return this;
    },

});
