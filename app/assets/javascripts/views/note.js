Hopscotch.Views.Note = Backbone.View.extend({
  initialize: function() {
    this.editing = false;
  },
  template: JST['notes/indexItem'],
  className: "note",
  events: {
    "click .delete-note": "deleteNote",
    "click": "editable",
    "blur textarea": "updateNote"
  },
  render: function() {
    var content = this.template({model: this.model});
    this.$el.html(content);
    if (this.model.isNew()) {
      this.editable();
    }
    return this;
  },
  editable: function(e) {
    e && e.preventDefault();
    if (this.editing === false && this.model) {
      this.editing = true;
      var content = JST['notes/edit']({model: this.model});
      this.$el.html(content);
      var ta = $('textarea');
      var val = ta.val();
      ta.focus().val("").val(val);
    }
    return this;
  },
  updateNote: function(e) {
    attr = e.currentTarget.value;
    this.model.save("words", attr, {
      success: function() {
        this.editing = false;
        this.render();
      }.bind(this)
    });
  },
  deleteNote: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.model.destroy();
  }
});
