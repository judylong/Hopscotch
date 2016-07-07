Hopscotch.Views.NotesIndex = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, "reset", this.render);
    this.render();
  },
  template: JST['notes/index'],
  render: function() {
    var content = this.template({collection: this.collection});
    this.$el.html(content);
    return this;
  }
});
