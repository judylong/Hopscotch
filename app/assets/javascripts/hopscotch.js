window.Hopscotch = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.router = new Hopscotch.Routers.Router({$rootEl: $('#main')});
  }
};

$(document).ready(function(){
  Hopscotch.initialize();
});
