window.Hopscotch = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.router = new Hopscotch.Routers.Router({$rootEl: $('#main')});
    this.header = new Hopscotch.Views.Header({el: '#header'});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Hopscotch.initialize();
});
