HelloTrello.Views.ListNew = Backbone.CompositeView.extend({
    className: "list",
    template: JST["lists/new"],
    createList: function(event) {
        event.preventDefault();
        alert("creating list");
    },
    render: function() {
        var content = this.template({ list: this.model });
        this.$el.html(content);
        return this;
    },
});
