window.HelloTrello = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
      HelloTrello.boards = new HelloTrello.Collections.Boards();
      new HelloTrello.Routers.Boards($('#main', '.backdrop'));
      Backbone.history.start();
  }
};
