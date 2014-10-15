HelloTrello.Views.BoardNew = Backbone.CompositeView.extend({
    template: JST["boards/boardNew"],

    initialize: function() {
    },

    events: {
        "submit #create-board": "addBoard"
    },

    addBoard: function(event) {
        console.log("submtting");
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
