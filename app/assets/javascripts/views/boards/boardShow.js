HelloTrello.Views.BoardShow = Backbone.CompositeView.extend({
    template: JST["boards/boardShow"],

    initialize: function() {
        $('body').removeClass();
        $('body').addClass('dark-logo');

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
