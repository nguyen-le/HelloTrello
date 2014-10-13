HelloTrello.Collections.Cards = Backbone.Collection.extend({
    url: "api/cards",
    model: HelloTrello.Models.Card
});
