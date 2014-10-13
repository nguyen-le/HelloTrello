HelloTrello.Views.BoardNew = Backbone.CompositeView.extend({
    template: JST["boards/boardNew"],

    initialize: function() {
    },

    events: {
        "submit #create-board": "evAddBoard"
    },

    evAddBoard: function() {
        event.preventDefault();
        var formData = $("#create-board").serializeJSON();
        this.model.save(formData, {
            success: function() {
                Backbone.history.navigate('#/boards/'+this.model.id, {trigger: true});
            }.bind(this)
        });
    },

    render: function() {
        var content = this.template();
        this.$el.html(content);
        return this;
    }


});
