Hopscotch.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "landing",
    "notesIndex":"notesIndex"
  },

  landing: function() {
    var view = new Hopscotch.Views.Landing();
    this._swapView(view);
  },

  notesIndex: function() {
    var notes = new Hopscotch.Collections.Notes();
    notes.fetch();
    var view = new Hopscotch.Views.NotesIndex({collection: notes});
    this._swapView(view);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(this._currentView.render().$el);
  }
});
