Hopscotch.Views.Landing = Backbone.View.extend({
  template: JST['landing'],

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
