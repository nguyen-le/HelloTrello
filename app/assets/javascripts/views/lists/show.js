HelloTrello.Views.ListShow = Backbone.CompositeView.extend({
    template: JST["lists/show"],
    
    initialize: function() {
        this.collection = this.model.cards();
        this.listenTo( this.model, "sync", this.render );
    },

    render: function() {
        var content = this.template({ list: this.model });
        this.$el.html(content);
        return this;
    },
});
