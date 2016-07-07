Hopscotch.Views.Note = Backbone.View.extend({
  template: JST['notes/indexItem'],
  className: "note",
  render: function() {
    var content = this.template({model: this.model});
    this.$el.html(content);
    return this;
  }
});
